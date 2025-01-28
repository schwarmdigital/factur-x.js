import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { PAYMENT_MEANS_CODES } from '../codes'
import { ZTextTypeXml } from '../udt/TextTypeConverter'
import { ZTokenType } from '../xs/TokenConverter'

// Todo: Different ZPaymentMeansType and extended XML Types for other Profiles

export const ZPaymentMeansType = z.object({
    paymentType: z.nativeEnum(PAYMENT_MEANS_CODES),
    payerIBAN: ZTokenType.optional(),
    payeeIBAN: ZTokenType.optional(),
    payeeProprietaryID: ZTokenType.optional()
})

export type PaymentMeansType = z.infer<typeof ZPaymentMeansType>

export const ZSpecifiedTradeSettlementPaymentMeansTypeXml = z.object({
    'ram:TypeCode': ZTextTypeXml,
    'ram:PayerPartyDebtorFinancialAccount': z
        .object({
            'ram:IBANID': ZTextTypeXml
        })
        .optional(),
    'ram:PayeePartyCreditorFinancialAccount': z
        .object({
            'ram:IBANID': ZTextTypeXml.optional(),
            'ram:ProprietaryID': ZTextTypeXml.optional()
        })
        .optional()
})

export type SpecifiedTradeSettlementPaymentMeansTypeXml = z.infer<typeof ZSpecifiedTradeSettlementPaymentMeansTypeXml>

export class SpecifiedTradeSettlementPaymentMeansTypeConverter extends BaseTypeConverter<
    PaymentMeansType,
    SpecifiedTradeSettlementPaymentMeansTypeXml
> {
    toValue(xml: SpecifiedTradeSettlementPaymentMeansTypeXml) {
        const { success: success_xml } = ZSpecifiedTradeSettlementPaymentMeansTypeXml.safeParse(xml)
        if (!success_xml) {
            throw new TypeConverterError('INVALID_XML')
        }

        const value = {
            paymentType: xml['ram:TypeCode']?.['#text'],
            payerIBAN: xml['ram:PayerPartyDebtorFinancialAccount']?.['ram:IBANID'],
            payeeIBAN: xml['ram:PayeePartyCreditorFinancialAccount']?.['ram:IBANID'],
            payeeProprietaryID: xml['ram:PayeePartyCreditorFinancialAccount']?.['ram:ProprietaryID']
        }

        const { success: success_value, data } = ZPaymentMeansType.safeParse(value)

        if (!success_value) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return data
    }

    toXML(value: PaymentMeansType): SpecifiedTradeSettlementPaymentMeansTypeXml {
        const { success, data } = ZPaymentMeansType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const xml: SpecifiedTradeSettlementPaymentMeansTypeXml = {
            'ram:TypeCode': {
                '#text': data.paymentType
            },
            'ram:PayerPartyDebtorFinancialAccount': data.payerIBAN
                ? {
                      'ram:IBANID': {
                          '#text': data.payerIBAN
                      }
                  }
                : undefined,
            'ram:PayeePartyCreditorFinancialAccount': {
                'ram:IBANID': data.payeeIBAN
                    ? {
                          '#text': data.payeeIBAN
                      }
                    : undefined,
                'ram:ProprietaryID': data.payeeProprietaryID
                    ? {
                          '#text': data.payeeProprietaryID
                      }
                    : undefined
            }
        }
        return xml
    }
}
