import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { CURRENCY_CODES } from '../codes'
import { AmountTypeXml, ZAmountTypeXml } from './AmountTypeConverter'

export const ZAmountTypeWithRequiredCurrency = z.object({
    amount: z.number(),
    currency: z.nativeEnum(CURRENCY_CODES)
})

export type AmountTypeWithRequiredCurrency = z.infer<typeof ZAmountTypeWithRequiredCurrency>

export class AmountTypeWithRequiredCurrencyConverter extends BaseTypeConverter<
    AmountTypeWithRequiredCurrency,
    AmountTypeXml
> {
    toValue(xml: AmountTypeXml) {
        const { success, data } = ZAmountTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        const amount = parseFloat(data['#text'])
        if (!amount || isNaN(amount)) {
            throw new TypeConverterError('INVALID_XML')
        }

        const value = {
            amount,
            currency: data['@currencyID'] as CURRENCY_CODES
        }

        const { success: success_val, data: data_val } = ZAmountTypeWithRequiredCurrency.safeParse(value)
        if (!success_val) {
            throw new TypeConverterError('INVALID_XML')
        }

        return data_val
    }

    toXML(value: AmountTypeWithRequiredCurrency): AmountTypeXml {
        const { success, data } = ZAmountTypeWithRequiredCurrency.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            '#text': data.amount.toFixed(2),
            '@currencyID': data.currency
        }
    }
}
