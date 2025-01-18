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

export class AmountTypeConverter extends BaseTypeConverter<AmountType, AmountTypeXml> {
    toValue(xml: AmountTypeXml) {
        const { success, data } = ZAmountTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        const amount = parseFloat(data['#text'])
        if (!amount || isNaN(amount)) {
            throw new TypeConverterError('INVALID_XML')
        }

        return {
            amount,
            currency: data['@currencyID']
        }
    }

    toXML(value: AmountType): AmountTypeXml {
        const { success, data } = ZAmountType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }
        return {
            '#text': data.amount.toFixed(2),
            '@currencyID': data.currency
        }
    }
}
