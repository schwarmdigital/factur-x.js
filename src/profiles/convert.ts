import objectPath from 'object-path'

import { parseXML } from '../core/xml.js'
import { DatatypeValidationError } from '../types/Errors'
import { TaxIdentifierType } from '../types/additionalTypes'
import { NoteTypeConverter } from '../types/ram/index.js'
import { TextTypeConverter } from '../types/udt/TextTypeConverter.js'
import {
    AmountTypeConverter,
    DateTimeTypeConverter,
    IdTypeConverter,
    IdTypeWithSchemeConverter
} from '../types/udt/index.js'

type ArrayDotNotation<T, Prefix extends string> = T extends (infer U)[]
    ? `${Prefix}.${number}` | (U extends object ? DotNotation<U, `${Prefix}.${number}.`> : never)
    : never

// Main DotNotation type that delegates to ArrayDotNotation for arrays
export type DotNotation<T, Prefix extends string = ''> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [K in keyof T & string]: T[K] extends any[]
        ? `${Prefix}${K}` | ArrayDotNotation<T[K], `${Prefix}${K}`>
        : T[K] extends object
          ? `${Prefix}${K}` | DotNotation<T[K], `${Prefix}${K}.`>
          : `${Prefix}${K}`
}[keyof T & string]

type AvailableConverters =
    | AmountTypeConverter
    | DateTimeTypeConverter
    | IdTypeConverter
    | IdTypeWithSchemeConverter
    | TextTypeConverter
    | NoteTypeConverter

export type MappingItem<T> =
    | {
          type: 'string' | 'number' | 'date' | 'taxid' | 'number_decimal_2'
          obj: DotNotation<T>
          xml: string
          default?: string
          converter?: AvailableConverters
      }
    | {
          type: 'array'
          obj: DotNotation<T>
          xml: string
          default?: string
          arrayMap: MappingItem<T>[]
          converter?: AvailableConverters
      }

export type SimpleMappingItem =
    | {
          type: 'string' | 'number' | 'date' | 'taxid' | 'number_decimal_2'
          obj: string
          xml: string
          default?: string
          converter?: AvailableConverters
      }
    | {
          type: 'array'
          obj: string
          xml: string
          default?: string
          arrayMap: SimpleMappingItem[]
          converter?: AvailableConverters
      }

export type ComplexMappingItem<Profile, ProfileXml> =
    | {
          type: 'string' | 'number' | 'date' | 'taxid' | 'number_decimal_2'
          obj: DotNotation<Profile>
          xml: DotNotation<ProfileXml>
          default?: string
          converter?: AvailableConverters
      }
    | {
          type: 'array'
          obj: DotNotation<Profile>
          xml: DotNotation<ProfileXml>
          default?: string
          arrayMap: ComplexMappingItem<Profile, ProfileXml>[]
          converter?: AvailableConverters
      }

// export interface Converter<Profile, ProfileXml> {
//     xml2obj(xml: object, map: MappingItem<Profile>): Profile
//     obj2xml(obj: Profile): ProfileXml
// }

export abstract class Converter<Profile, ProfileXml> {
    protected readonly map: ComplexMappingItem<Profile, ProfileXml>[] = []
    // obj2xml(obj: Profile): ProfileXml {}

    xml2obj(xml: object, map: SimpleMappingItem[] = this.map): Profile {
        const out: object = {}

        for (const item of map) {
            const value = objectPath.get(xml, item.xml, item.default)
            if (!value) {
                continue
            }

            if (item.type === 'array' && item.converter) {
                if (!Array.isArray(value)) {
                    throw new Error('Type "array" but value is not an array')
                }

                objectPath.set(
                    out,
                    item.obj,
                    value.map(v => item.converter?.fromXML(v).toValue())
                )
                continue
            }

            if (item.converter) {
                objectPath.set(out, item.obj, item.converter.fromXML(value as any).toValue())
                continue
            }

            switch (item.type) {
                case 'string':
                    objectPath.set(out, item.obj, value.toString())
                    break
                case 'number':
                case 'number_decimal_2': {
                    const x = Number(value)
                    if (!x || isNaN(x)) {
                        throw new DatatypeValidationError(item.type, value)
                    }
                    objectPath.set(out, item.obj, x)
                    break
                }
                case 'taxid': {
                    const local = !Array.isArray(value) ? [value] : value
                    const data: TaxIdentifierType = {
                        localTaxId: local.find(item => item['ram:ID']?.['@schemeID'] === 'FC')?.['ram:ID']?.['#text'],
                        vatId: local.find(taxId => taxId['ram:ID']?.['@schemeID'] === 'VA')?.['ram:ID']?.['#text']
                    }
                    if (!data.localTaxId && !data.vatId) {
                        throw new DatatypeValidationError(item.type, value)
                    }
                    objectPath.set(out, item.obj, data)
                    break
                }
                case 'array': {
                    if (!item.arrayMap) {
                        throw new Error(`Tried to map array without proper arrayMap\n${value.toString}`)
                    }
                    if (!Array.isArray(value)) {
                        throw new Error('Type "array" but value is not an array')
                    }

                    objectPath.set(
                        out,
                        item.obj,
                        value.map((val: object) => this.xml2obj(val, item.arrayMap))
                    )
                    break
                }
            }
        }

        return out as Profile
    }
}
