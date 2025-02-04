import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZAmountType = z.number()

export type AmountType = z.infer<typeof ZAmountType>

export const ZAmountTypeXml = z.object({
    '#text': z.string(),
    '@currencyID': z.string().optional()
})

export type AmountTypeXml = z.infer<typeof ZAmountTypeXml>

export class AmountTypeConverter extends BaseTypeConverter<AmountType, AmountTypeXml> {
    _toValue(xml: AmountTypeXml) {
        const { success, data } = ZAmountTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        const amount = parseFloat(data['#text'])
        if (amount == null || isNaN(amount)) {
            throw new TypeConverterError('INVALID_XML')
        }

        return amount
    }

    _toXML(value: any): AmountTypeXml {
        const { success, data } = ZAmountType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }
        return {
            '#text': data.toFixed(2)
        }
    }
}
