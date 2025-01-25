import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { ZIdType } from '../udt/IdTypeConverter'
import { ZIdTypeWithRequiredSchemeXml } from '../udt/IdTypeWithRequiredlSchemeConverter'

export const ZSpecifiedTaxRegistrationsForSellerType = z.object({
    vatId: ZIdType.optional(), // BT-31
    localTaxId: ZIdType.optional() // BT-32
})

export type SpecifiedTaxRegistrationsForSellerType = z.infer<typeof ZSpecifiedTaxRegistrationsForSellerType>

export const ZSpecifiedTaxRegistrationsForSellerTypeXml = z.union([
    z
        .array(
            z.object({
                'ram:ID': ZIdTypeWithRequiredSchemeXml
            })
        )
        .max(2),
    z.object({
        'ram:ID': ZIdTypeWithRequiredSchemeXml
    })
])

export type SpecifiedTaxRegistrationsForSellerTypeXml = z.infer<typeof ZSpecifiedTaxRegistrationsForSellerTypeXml>

export class SpecifiedTaxRegistrationsForSellerTypeConverter extends BaseTypeConverter<
    SpecifiedTaxRegistrationsForSellerType,
    SpecifiedTaxRegistrationsForSellerTypeXml
> {
    toValue(xml: SpecifiedTaxRegistrationsForSellerTypeXml) {
        const { success, data } = ZSpecifiedTaxRegistrationsForSellerTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        let vatId
        let localTaxId
        if (Array.isArray(data)) {
            vatId = data.find(item => item['ram:ID']['@schemeID'] === 'VA')
            localTaxId = data.find(item => item['ram:ID']['@schemeID'] === 'FC')
        } else {
            vatId = data['ram:ID']['@schemeID'] === 'VA' ? data : undefined
            localTaxId = data['ram:ID']['@schemeID'] === 'FC' ? data : undefined
        }

        return {
            vatId: vatId?.['ram:ID']['#text'],
            localTaxId: localTaxId?.['ram:ID']['#text']
        }
    }

    toXML(value: SpecifiedTaxRegistrationsForSellerType): SpecifiedTaxRegistrationsForSellerTypeXml {
        const { success, data } = ZSpecifiedTaxRegistrationsForSellerType.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const xml: SpecifiedTaxRegistrationsForSellerTypeXml = []

        if (data.vatId) {
            xml.push({
                'ram:ID': {
                    '#text': data.vatId,
                    '@schemeID': 'VA'
                }
            })
        }

        if (data.localTaxId) {
            xml.push({
                'ram:ID': {
                    '#text': data.localTaxId,
                    '@schemeID': 'FC'
                }
            })
        }

        return xml
    }
}
