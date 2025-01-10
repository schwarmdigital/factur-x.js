import objectPath from 'object-path'

import { parseXML } from '../core/xml.js'
import { SpecifiedTaxRegistrationsTypeConverter } from '../types/ram/SpecifiedTaxRegistrationsTypeConverter.js'
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
    | SpecifiedTaxRegistrationsTypeConverter
    | TextTypeConverter
    | NoteTypeConverter

export interface MappingItem<Profile, ProfileXml> {
    obj: DotNotation<Profile>
    xml: DotNotation<ProfileXml>
    default?: string
    arrayMap?: MappingItem<Profile, ProfileXml>[]
    converter: AvailableConverters
}

export interface SimplifiedMappingItem {
    obj: string
    xml: string
    default?: string
    arrayMap?: SimplifiedMappingItem[]
    converter: AvailableConverters
}

// export interface Converter<Profile, ProfileXml> {
//     xml2obj(xml: object, map: MappingItem<Profile>): Profile
//     obj2xml(obj: Profile): ProfileXml
// }

export abstract class Converter<Profile, ProfileXml> {
    protected readonly map: MappingItem<Profile, ProfileXml>[] = []
    // obj2xml(obj: Profile): ProfileXml {}

    xml2obj(xml: object, map: SimplifiedMappingItem[] = this.map): Profile {
        const out: object = {}

        for (const item of map) {
            const value = objectPath.get(xml, item.xml, item.default)
            if (!value) {
                continue
            }

            if (item.arrayMap && Array.isArray(value)) {
                objectPath.set(
                    out,
                    item.obj,
                    value.map(v => item.converter?.fromXML(v).toValue())
                )

                continue
            }

            objectPath.set(out, item.obj, item.converter.fromXML(value as any).toValue())
        }

        return out as Profile
    }
}
