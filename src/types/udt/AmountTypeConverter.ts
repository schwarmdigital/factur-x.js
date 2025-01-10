import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZAmountType = z.object({
    amount: z.number(),
    currency: z.string().optional()
})

export type AmountType = z.infer<typeof ZAmountType>

export const ZAmountTypeXml = z.object({
    '#text': z.string(),
    '@currencyID': z.string().optional()
})

export type AmountTypeXml = z.infer<typeof ZAmountTypeXml>

export class AmountTypeConverter extends BaseTypeConverter<AmountType> {
    fromXML(xml: AmountTypeXml) {
        const amount = parseFloat(xml['#text'])
        if (!amount || isNaN(amount)) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new AmountTypeConverter({
            amount,
            currency: xml['@currencyID']
        }) as this // cast to this
    }

    toXML(): AmountTypeXml {
        if (!this.value?.amount) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            '#text': this.value.amount.toFixed(2),
            '@currencyID': this.value.currency
        }
    }
}
