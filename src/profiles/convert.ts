/* eslint-disable @typescript-eslint/no-explicit-any */
import objectPath from 'object-path'

import { BaseTypeConverter, TypeConverterError } from '../types/BaseTypeConverter.js'
import { XML_OBJECT_BOILERPLATE_AFTER, XML_OBJECT_BOILERPLATE_BEFORE } from '../types/additionalTypes.js'

// Main DotNotation type that delegates to ArrayDotNotation for array
export type DotNotation<T> = T extends object
    ? {
          [K in keyof T & string]:
              | K
              | (NonNullable<T[K]> extends (infer U)[]
                    ? `${K}.${number}` | (U extends object ? `${K}.${number}.${DotNotation<U>}` : never)
                    : NonNullable<T[K]> extends object
                      ? `${K}.${DotNotation<NonNullable<T[K]>>}`
                      : never)
      }[keyof T & string]
    : never

export type MappingItem<Profile, ProfileXml> =
    | {
          obj: DotNotation<Profile>
          xml: DotNotation<ProfileXml>
          default?: string
          converter: BaseTypeConverter<any, any>
      }
    | {
          obj: undefined
          xml: DotNotation<ProfileXml>
          default?: string
          converter: undefined
      }

export type SimplifiedMappingItem =
    | {
          obj: string
          xml: string
          default?: string
          converter: BaseTypeConverter<any, any>
      }
    | {
          obj: undefined
          xml: string
          default?: string
          converter: undefined
      }

// export interface Converter<Profile, ProfileXml> {
//     xml2obj(xml: object, map: MappingItem<Profile>): Profile
//     obj2xml(obj: Profile): ProfileXml
// }

export abstract class Converter<Profile, ProfileXml> {
    // protected readonly map: MappingItem<Profile, ProfileXml>[] = []
    protected readonly map: SimplifiedMappingItem[] = []
    protected abstract isProperXMLScheme(xmlObject: any): xmlObject is ProfileXml
    protected abstract isProperObjectScheme(object: any): object is Profile

    xml2obj(xml: object, map: SimplifiedMappingItem[] = this.map): Profile {
        let out: object = {}

        for (const item of map) {
            if (item.obj === undefined) continue
            const value = objectPath.get<any>(xml, item.xml, item.default)
            if (!value) {
                continue
            }

            objectPath.set(out, item.obj, item.converter.toValue(value))
        }

        out = Converter.cleanObject(out)

        if (!this.isProperObjectScheme(out)) throw new TypeConverterError('INVALID_STRUCTURE')

        return out as Profile
    }

    obj2xml(obj: object, map: SimplifiedMappingItem[] = this.map): ProfileXml {
        let xml: any = {}

        for (const item of map) {
            if (item.obj === undefined) {
                objectPath.set(xml, item.xml, '')
                continue
            }
            const value = objectPath.get<any>(obj, item.obj, item.default)
            if (!value) {
                continue
            }

            objectPath.set(xml, item.xml, item.converter?.toXML(value))
        }

        if (!xml['rsm:CrossIndustryInvoice'])
            throw new Error('Conversion from XML to Obj failed! No rsm:CrossIndustryInvoice')
        xml = {
            'rsm:CrossIndustryInvoice': { ...xml['rsm:CrossIndustryInvoice'], ...XML_OBJECT_BOILERPLATE_AFTER }
        }
        xml = { ...XML_OBJECT_BOILERPLATE_BEFORE, ...xml }
        xml = Converter.cleanObject(xml)

        if (!this.isProperXMLScheme(xml)) throw new TypeConverterError('INVALID_STRUCTURE')
        return xml as ProfileXml
    }

    private static cleanObject(obj: any): any {
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
}
