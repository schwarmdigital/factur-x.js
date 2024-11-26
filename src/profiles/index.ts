import { DateTime } from 'luxon'
import objectPath from 'object-path'

import { DatatypeValidationError } from '../types/Errors.js'
import { XML_OBJECT_BOILERPLATE_AFTER, XML_OBJECT_BOILERPLATE_BEFORE } from '../types/additionalTypes.js'
import MinimumProfileConverter, { TaxIdentifierType } from './minimum/minimum.js'

type ArrayDotNotation<T, Prefix extends string> = T extends (infer U)[]
    ? `${Prefix}.${number}` | (U extends object ? DotNotation<U, `${Prefix}.${number}.`> : never)
    : never

// Main DotNotation type that delegates to ArrayDotNotation for arrays
type InconcreteDotNotation<T, Prefix extends string = ''> = {
    [K in keyof T & string]: T[K] extends any[]
        ? `${Prefix}${K}` | ArrayDotNotation<T[K], `${Prefix}${K}`>
        : T[K] extends object
          ? `${Prefix}${K}` | DotNotation<T[K], `${Prefix}${K}.`>
          : `${Prefix}${K}`
}[keyof T & string]

/*
Converts the optional parameters in the type to concrete ones (remove the ?).
Without that the paths to optional parameters are not valid
*/
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property]
}

export type DotNotation<T, Prefix extends string = ''> = InconcreteDotNotation<Concrete<T>, Prefix> | undefined

type ObjectTypes = 'string' | 'number' | 'Date' | 'taxid' | 'number_decimal_2' | undefined

interface BaseMappingItem {
    obj: string
    xml: string
    objType: ObjectTypes
    default?: string
}

interface ArrayMappingItem extends Omit<BaseMappingItem, 'objType'> {
    objType: 'Array'
    arrayMap: MappingItem[]
}

export type MappingItem = BaseMappingItem | ArrayMappingItem
export type SchemeNames = 'MINIMUM' | 'BASICWL' | 'BASIC' | 'EN16931' | 'EXTENDED' | 'XRECHNUNG'
export type XMLSchemeNames =
    | 'MINIMUM_XML'
    | 'BASICWL_XML'
    | 'BASIC_XML'
    | 'EN16931_XML'
    | 'EXTENDED_XML'
    | 'XRECHNUNG_XML'

abstract class Converter<XMLScheme extends object, ParsedObjectScheme extends object> {
    protected readonly map: MappingItem[]
    protected abstract readonly _scheme: SchemeNames

    private _xml: XMLScheme
    private _invoice: ParsedObjectScheme

    constructor(input: XMLScheme | ParsedObjectScheme, map: MappingItem[]) {
        this.map = map
        if (this.isProperXMLScheme(input)) {
            this._invoice = this.cleanObject(this.xml2obj(input))
            this._xml = input
        } else if (this.isProperObjectScheme(input)) {
            this._xml = this.cleanObject(this.obj2xml(input))
            this._invoice = input
        } else {
            throw new Error('Input data does not match the selected Profile')
        }

        this.checkConsistency()
    }

    get xml() {
        return this._xml
    }

    set xml(xml: XMLScheme) {
        if (!this.isProperXMLScheme(xml))
            throw new Error('Somethings wrong with the Data you provided: Scheme does not fit expected Scheme')
        this._invoice = this.xml2obj(xml)
        this._xml = xml
        this.checkConsistency()
    }

    get invoice() {
        return this._invoice
    }

    set invoice(invoice: ParsedObjectScheme) {
        if (!this.isProperObjectScheme(invoice))
            throw new Error('Somethings wrong with the Data you provided: Scheme does not fit expected Scheme')
        this._xml = this.obj2xml(invoice)
        this._invoice = invoice
        this.checkConsistency()
    }

    get scheme(): SchemeNames {
        return this._scheme
    }

    protected abstract isProperXMLScheme(xmlObject: any): xmlObject is XMLScheme
    protected abstract isProperObjectScheme(object: any): object is ParsedObjectScheme

    private checkConsistency() {
        if (!this.isProperXMLScheme(this._xml)) throw new Error('Something is wrong with the XML Scheme')
        if (!this.isProperObjectScheme(this._invoice)) throw new Error('Something is wrong with the invoice Data')
    }

    private xml2obj(xml: object): ParsedObjectScheme {
        const obj: ParsedObjectScheme = this.mapXml2Obj(xml, this.map) as ParsedObjectScheme
        return obj
    }

    private mapXml2Obj(xml: object, map: MappingItem[]): any {
        const out: any = {}
        for (const item of map) {
            if (!item.obj) continue
            const value = objectPath.get(xml, item.xml, item.default)
            let parsedValue
            if (item.objType === 'Array') {
                parsedValue = this.xml2objTypeConverter(value, item.objType, item.arrayMap)
            } else {
                parsedValue = this.xml2objTypeConverter(value, item.objType)
            }
            objectPath.set(out, item.obj, parsedValue)
        }

        return out
    }

    private xml2objTypeConverter(xmlValue: any, targetType: ObjectTypes | 'Array', arrayMap?: MappingItem[]): any {
        if (!xmlValue) return undefined
        switch (targetType) {
            case 'string': {
                if (typeof xmlValue !== 'string') throw new DatatypeValidationError(targetType, xmlValue.toString())
                return xmlValue
            }
            case 'number':
            case 'number_decimal_2': {
                const value = Number(xmlValue)
                if (isNaN(value)) throw new DatatypeValidationError(targetType, xmlValue.toString())
                return value
            }
            case 'Date':
                return this.convertDateStringToDate(xmlValue['#text']?.toString())
            case 'taxid': {
                return this.mapTaxIdFromXml2Obj(xmlValue)
            }
            case 'Array': {
                if (!arrayMap) throw new Error(`Tried to map array without proper arrayMap\n${xmlValue.toString}`)
                return this.mapArrayFromXml2Obj(xmlValue, arrayMap)
            }
            case undefined:
                throw new Error('Undefined is only allowed when map.obj is also undefined')
            default:
                throw new Error(`Parsing failed as ${targetType} is not a valid targetType`)
        }
    }

    private obj2xml(obj: ParsedObjectScheme): XMLScheme {
        let xml = this.mapObj2Xml(obj, this.map)
        if (!xml['rsm:CrossIndustryInvoice'])
            throw new Error('Conversion from XML to Obj failed! No rsm:CrossIndustryInvoice')
        xml = {
            'rsm:CrossIndustryInvoice': { ...xml['rsm:CrossIndustryInvoice'], ...XML_OBJECT_BOILERPLATE_AFTER }
        }
        return { ...XML_OBJECT_BOILERPLATE_BEFORE, ...xml }
    }

    private mapObj2Xml(obj: object, map: MappingItem[]): any {
        const xml = {} as XMLScheme

        for (const item of map) {
            const value = objectPath.get(obj, item.obj)
            let parsedValue
            if (item.objType === 'Array') {
                parsedValue = this.obj2xmlTypeConverter(value, item.objType, item.arrayMap)
            } else {
                parsedValue = this.obj2xmlTypeConverter(value, item.objType)
            }
            objectPath.set(xml, item.xml, parsedValue)
        }
        return xml
    }

    private obj2xmlTypeConverter(objValue: any, sourceType: ObjectTypes | 'Array', arrayMap?: MappingItem[]): any {
        if (!objValue) return undefined

        switch (sourceType) {
            case 'string': {
                if (typeof objValue !== 'string') throw new DatatypeValidationError(sourceType, objValue.toString())
                return objValue
            }
            case 'number': {
                if (isNaN(objValue)) throw new DatatypeValidationError(sourceType, objValue.toString())
                const value = objValue.toString()
                return value
            }
            case 'number_decimal_2': {
                if (isNaN(objValue)) throw new DatatypeValidationError(sourceType, objValue.toString())
                const value = objValue.toFixed(2)
                return value
            }
            case 'Date':
                if (!(objValue instanceof Date)) throw new DatatypeValidationError(sourceType, objValue.toString())
                return { '#text': this.convertDateToDateString(objValue), '@format': '102' }
            case 'taxid': {
                return this.mapTaxIdFromObj2Xml(objValue)
            }
            case 'Array': {
                if (!arrayMap) throw new Error(`Tried to map array without proper arrayMap\n${objValue.toString}`)
                return this.mapArrayFromObj2Xml(objValue, arrayMap)
            }
            case undefined:
                return ''
            default:
                throw new Error(`Parsing failed as ${sourceType} is not a valid targetType`)
        }
    }

    private cleanObject(obj: any): any {
        /* This function makes sure that objects which are completely undefined, will be set to undefined on the higher level
            example:
            {
                something:{
                    x: undefined,
                    y: undefined,
                },
                somethingElse:{
                    z:"test",
                }
            }

            --> Will be converted to:
            {
                something: undefined,
                somethingElse:{
                    z:"test",
                }
            }

        */

        if (typeof obj !== 'object' || obj === null || obj === undefined || obj instanceof Date) {
            return obj
        }

        const cleanedObj: any = Array.isArray(obj) ? [] : {}

        let allUndefined = true

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const cleanedValue = this.cleanObject(obj[key])
                if (cleanedValue !== undefined) {
                    allUndefined = false
                }
                cleanedObj[key] = cleanedValue
            }
        }

        return allUndefined ? undefined : cleanedObj
    }

    private convertDateStringToDate(DateTimeString: string): Date {
        const dt = DateTime.fromFormat(DateTimeString, 'yyyyMMdd')
        if (!dt.isValid) {
            throw new DatatypeValidationError('DateTimeType', DateTimeString)
        }
        return dt.toJSDate()
    }

    private convertDateToDateString(date: Date): string {
        const year = date.getFullYear().toString()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        const dateString = `${year}${month}${day}`
        const dateRegex = /^(20|21)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/
        if (!dateRegex.test(dateString)) throw new DatatypeValidationError('DateTimeType', date.toISOString())
        return dateString
    }

    private mapTaxIdFromXml2Obj(xmlValue: any): TaxIdentifierType {
        const data = {} as TaxIdentifierType
        if (Array.isArray(xmlValue)) {
            data.localTaxId = xmlValue.find(taxId => taxId['ram:ID']?.['@schemeID'] === 'FC')?.['ram:ID']?.['#text']
            data.vatId = xmlValue.find(taxId => taxId['ram:ID']?.['@schemeID'] === 'VA')?.['ram:ID']?.['#text']
            if (!data.localTaxId && !data.vatId) throw new DatatypeValidationError('taxid', xmlValue.toString())
            return data
        }
        const schemeID = xmlValue['ram:ID']?.['@schemeID']
        if (!(schemeID === 'VA') && !(schemeID === 'FC'))
            throw new DatatypeValidationError('taxid', xmlValue.toString())
        const id = xmlValue['ram:ID']?.['#text']
        if (!id) throw new DatatypeValidationError('taxid', xmlValue.toString())
        return {
            vatId: schemeID === 'VA' ? id : undefined,
            localTaxId: schemeID === 'FC' ? id : undefined
        } as TaxIdentifierType
    }

    private mapTaxIdFromObj2Xml(objValue: any): any[] {
        const xmlData: any[] = []

        if (objValue.vatId) {
            const data = { 'ram:ID': { '#text': objValue.vatId, '@schemeID': 'VA' } }
            xmlData.push(data)
        }

        if (objValue.localTaxId) {
            const data = { 'ram:ID': { '#text': objValue.localTaxId, '@schemeID': 'FC' } }
            xmlData.push(data)
        }

        if (xmlData.length === 0) throw new Error('TaxId was not given correctly')

        return xmlData
    }

    private mapArrayFromXml2Obj(xmlValue: any, arrayMap: MappingItem[]) {
        const mappingArray = Array.isArray(xmlValue) ? xmlValue : [xmlValue]
        return mappingArray.map(item => this.mapXml2Obj(item, arrayMap))
    }

    private mapArrayFromObj2Xml(objValue: any, arrayMap: MappingItem[]) {
        const mappingArray = Array.isArray(objValue) ? objValue : [objValue]
        return mappingArray.map(item => this.mapObj2Xml(item, arrayMap))
    }
}

// --------- TYPEGUARDS -------------------

export function isMinimum(x: Converter<object, object>): x is MinimumProfileConverter {
    return x.scheme === 'MINIMUM'
}

/*
export function isBasicWL(x: Converter<object, object>): x is BasicWLProfileConverter {
    return x.scheme === "BASICWL";
}


export function isBasic(x: Converter<object, object>): x is BasicProfileConverter {
    return x.scheme === "BASIC";
}

export function isEN16931(x: Converter<object, object>): x is EN16931ProfileConverter {
    return x.scheme === "EN16931";
}

export function isExtended(x: Converter<object, object>): x is ExtendedProfileConverter {
    return x.scheme === "EXTENDED";
}

export function isXRechnung(x: Converter<object, object>): x is XRechnungProfileConverter {
    return x.scheme === "XRECHNUNG";
}*/

// ------------------------------------------

export default Converter
