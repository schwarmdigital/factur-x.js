import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export interface AmountType {
    amount: number
    currency?: string
}

export interface AmountTypeXML {
    '#text': string
    '@currencyID'?: string
}

export class AmountTypeConverter extends BaseTypeConverter<AmountType> {
    fromXML(xml: AmountTypeXML) {
        const amount = parseFloat(xml['#text'])
        if (!amount || isNaN(amount)) {
            console.log(xml)
            console.log(amount)
            throw new TypeConverterError('INVALID_XML')
        }

        return new AmountTypeConverter({
            amount,
            currency: xml['@currencyID']
        }) as this // cast to this
    }

    toXML(): AmountTypeXML {
        if (!this.value?.amount) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            '#text': this.value.amount.toFixed(2),
            '@currencyID': this.value.currency
        }
    }
}
