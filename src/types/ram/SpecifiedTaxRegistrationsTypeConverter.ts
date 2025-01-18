import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { ZIdType } from '../udt/IdTypeConverter'

export const ZSpecifiedTaxRegistrationsType = z.object({
    vatId: ZIdType.optional(), // BT-31
    localTaxId: ZIdType.optional() // BT-32
})

export type SpecifiedTaxRegistrationsType = z.infer<typeof ZSpecifiedTaxRegistrationsType>

export const ZSpecifiedTaxRegistrationsTypeXml = z.union([
    z
        .array(
            z.object({
                'ram:ID': z.object({
                    '#text': z.string(),
                    '@schemeID': z.string()
                })
            })
        )
        .max(2),
    z.object({
        'ram:ID': z.object({
            '#text': z.string(),
            '@schemeID': z.string()
        })
    })
])

export type SpecifiedTaxRegistrationsTypeXml = z.infer<typeof ZSpecifiedTaxRegistrationsTypeXml>

export class SpecifiedTaxRegistrationsTypeConverter extends BaseTypeConverter<
    SpecifiedTaxRegistrationsType,
    SpecifiedTaxRegistrationsTypeXml
> {
    toValue(xml: SpecifiedTaxRegistrationsTypeXml) {
        let vatId
        let localTaxId
        if (Array.isArray(xml)) {
            vatId = xml.find(item => item['ram:ID']['@schemeID'] === 'VA')
            localTaxId = xml.find(item => item['ram:ID']['@schemeID'] === 'FC')
        } else {
            vatId = xml['ram:ID']['@schemeID'] === 'VA' ? xml : undefined
            localTaxId = xml['ram:ID']['@schemeID'] === 'FC' ? xml : undefined
        }

        return {
            vatId: vatId?.['ram:ID']['#text'],
            localTaxId: localTaxId?.['ram:ID']['#text']
        }
    }

    toXML(value: SpecifiedTaxRegistrationsType): SpecifiedTaxRegistrationsTypeXml {
        const { success, data } = ZSpecifiedTaxRegistrationsType.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const xml: SpecifiedTaxRegistrationsTypeXml = []

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
