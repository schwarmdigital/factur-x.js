import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { ZIdType } from '../udt/IdTypeConverter'
import { ZIdTypeWithRequiredSchemeXml } from '../udt/IdTypeWithRequiredlSchemeConverter'

export const ZSpecifiedTaxRegistrationsType = z.union([
    z.object({
        vatId: ZIdType // BT-31
    }),
    z.object({
        localTaxId: ZIdType // BT-32
    })
])

export type SpecifiedTaxRegistrationsType = z.infer<typeof ZSpecifiedTaxRegistrationsType>

export const ZSpecifiedTaxRegistrationsTypeXml = z.object({
    'ram:ID': ZIdTypeWithRequiredSchemeXml
})

export type SpecifiedTaxRegistrationsTypeXml = z.infer<typeof ZSpecifiedTaxRegistrationsTypeXml>

export class SpecifiedTaxRegistrationsTypeConverter extends BaseTypeConverter<
    SpecifiedTaxRegistrationsType,
    SpecifiedTaxRegistrationsTypeXml
> {
    _toValue(xml: SpecifiedTaxRegistrationsTypeXml) {
        const { success, data } = ZSpecifiedTaxRegistrationsTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        if (xml['ram:ID']['@schemeID'] === 'VA') {
            return {
                vatId: data['ram:ID']['#text']
            }
        }

        if (xml['ram:ID']['@schemeID'] === 'FC') {
            return {
                localTaxId: data['ram:ID']['#text']
            }
        }

        throw new TypeConverterError('INVALID_XML')
    }

    _toXML(value: SpecifiedTaxRegistrationsType): SpecifiedTaxRegistrationsTypeXml {
        const { success, data } = ZSpecifiedTaxRegistrationsType.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        if ('vatId' in data) {
            return {
                'ram:ID': {
                    '#text': data.vatId,
                    '@schemeID': 'VA'
                }
            }
        }

        if ('localTaxId' in data) {
            return {
                'ram:ID': {
                    '#text': data.localTaxId,
                    '@schemeID': 'FC'
                }
            }
        }

        throw new TypeConverterError('INVALID_VALUE')
    }
}
