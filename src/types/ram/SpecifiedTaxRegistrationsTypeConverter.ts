import { z } from 'zod'

import { BaseTypeConverter } from '../BaseTypeConverter'

export const ZSpecifiedTaxRegistrationsType = z.object({
    vatId: z.string().optional(), // BT-31
    localTaxId: z.string().optional() // BT-32
})

export type SpecifiedTaxRegistrationsType = z.infer<typeof ZSpecifiedTaxRegistrationsType>

export const ZSpecifiedTaxRegistrationsTypeXml = z
    .object({
        'ram:ID': z.object({
            '#text': z.string(),
            '@schemeID': z.string()
        })
    })
    .array()
    .min(0)
    .max(2)

export type SpecifiedTaxRegistrationsTypeXml = z.infer<typeof ZSpecifiedTaxRegistrationsTypeXml>

export class SpecifiedTaxRegistrationsTypeConverter extends BaseTypeConverter<SpecifiedTaxRegistrationsType> {
    fromXML(xml: SpecifiedTaxRegistrationsTypeXml) {
        const vatId = xml.find(item => item['ram:ID']['@schemeID'] === 'VA')
        const localTaxId = xml.find(item => item['ram:ID']['@schemeID'] === 'FC')

        return new SpecifiedTaxRegistrationsTypeConverter({
            vatId: vatId?.['ram:ID']['#text'],
            localTaxId: localTaxId?.['ram:ID']['#text']
        }) as this // cast to this
    }

    toXML(): SpecifiedTaxRegistrationsTypeXml {
        const xml: SpecifiedTaxRegistrationsTypeXml = []

        if (this.value?.vatId) {
            xml.push({
                'ram:ID': {
                    '#text': this.value.vatId,
                    '@schemeID': 'VA'
                }
            })
        }

        if (this.value?.localTaxId) {
            xml.push({
                'ram:ID': {
                    '#text': this.value.localTaxId,
                    '@schemeID': 'VA'
                }
            })
        }

        return xml
    }
}
