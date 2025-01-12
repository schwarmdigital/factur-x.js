import { z } from 'zod'

import { ZNoteTypeXml } from '../../types/ram/NoteTypeConverter.js'
import { ZSpecifiedTaxRegistrationsTypeXml } from '../../types/ram/SpecifiedTaxRegistrationsTypeConverter.js'
import { ZAmountTypeXml } from '../../types/udt/AmountTypeConverter.js'
import { ZDateTimeTypeXml } from '../../types/udt/DateTimeTypeConverter.js'
import { ZIdTypeXml } from '../../types/udt/IdTypeConverter.js'
import { ZIdTypeWithSchemeXml } from '../../types/udt/IdTypeWithSchemeConverter.js'
import { ZIndicatorTypeXml } from '../../types/udt/IndicatorTypeConverter.js'
import { ZPercentTypeXml } from '../../types/udt/PercentTypeConverter.js'
import { ZTextTypeXml } from '../../types/udt/TextTypeConverter.js'

const ZTradePartyTypeXml = z.object({
    'ram:ID': ZTextTypeXml.array().optional(),
    'ram:GlobalID': ZIdTypeWithSchemeXml.array().optional(),
    'ram:Name': ZTextTypeXml.optional(), // may be required on some specific trade parties
    'ram:SpecifiedLegalOrganization': z
        .object({
            'ram:ID': ZIdTypeWithSchemeXml.optional(),
            'ram:TradingBusinessName': ZTextTypeXml.optional()
        })
        .optional(),
    'ram:PostalTradeAddress': z.object({
        'ram:PostcodeCode': ZTextTypeXml.optional(),
        'ram:LineOne': ZTextTypeXml.optional(),
        'ram:LineTwo': ZTextTypeXml.optional(),
        'ram:LineThree': ZTextTypeXml.optional(),
        'ram:CityName': ZTextTypeXml.optional(),
        'ram:CountryID': ZTextTypeXml, // TODO: specific CountryCodeType
        'ram:CountrySubDivisionName': ZTextTypeXml.optional()
    }),
    'ram:URIUniversalCommunication': z
        .object({
            'ram:URIID': ZIdTypeWithSchemeXml
        })
        .optional(),
    'ram:SpecifiedTaxRegistration': ZSpecifiedTaxRegistrationsTypeXml.optional()
})

export const ZBasicWithoutLinesProfileXml = z.object({
    '?xml': z.object({
        '@version': z.literal('1.0'),
        '@encoding': z.literal('UTF-8')
    }),
    'rsm:CrossIndustryInvoice': z.object({
        'rsm:ExchangedDocumentContext': z.object({
            'ram:BusinessProcessSpecifiedDocumentContextParameter': z.object({
                'ram:ID': ZIdTypeXml.optional()
            }),
            'ram:GuidelineSpecifiedDocumentContextParameter': z.object({
                'ram:ID': z.object({
                    '#text': z.literal('urn:factur-x.eu:1p0:minimum')
                })
            })
        }),
        'rsm:ExchangedDocument': z.object({
            'ram:ID': ZIdTypeXml.optional(),
            'ram:TypeCode': ZTextTypeXml,
            'ram:IssueDateTime': z.object({
                'udt:DateTimeString': ZDateTimeTypeXml
            }),
            'ram:IncludedNote': ZNoteTypeXml.array().optional()
        }),
        'rsm:SupplyChainTradeTransaction': z.object({
            'ram:ApplicableHeaderTradeAgreement': z.object({
                'ram:BuyerReference': ZTextTypeXml.optional(),
                'ram:SellerTradeParty': ZTradePartyTypeXml.extend({
                    'ram:Name': ZTextTypeXml // required here
                }),
                'ram:BuyerTradeParty': ZTradePartyTypeXml.extend({
                    'ram:Name': ZTextTypeXml // required here
                }),
                'ram:SellerTaxRepresentativeTradeParty': ZTradePartyTypeXml.extend({
                    'ram:Name': ZTextTypeXml // required here
                }).optional(),
                'ram:BuyerOrderReferencedDocument': z
                    .object({
                        'ram:IssuerAssignedID': ZTextTypeXml
                    })
                    .optional(),
                'ram:ContractReferencedDocument': z
                    .object({
                        'ram:IssuerAssignedID': ZTextTypeXml
                    })
                    .optional()
            }),
            'ram:ApplicableHeaderTradeDelivery': z.object({
                'ram:ShipToTradeParty': ZTradePartyTypeXml,
                'ram:ActualDeliverySupplyChainEvent': z
                    .object({
                        'ram:OccurenceDateTime': z.object({
                            'udt:DateTimeString': ZDateTimeTypeXml
                        })
                    })
                    .optional(),
                'ram:DespatchAdviceReferencedDocument': z
                    .object({
                        'ram:IssuerAssignedID': ZTextTypeXml
                    })
                    .optional()
            }),
            'ram:ApplicableHeaderTradeSettlement': z.object({
                'ram:CreditorReferenceID': ZIdTypeXml.optional(),
                'ram:PaymentReference': ZTextTypeXml.optional(),
                'ram:TaxCurrencyCode': ZTextTypeXml.optional(), // TODO: specific CurrencyType
                'ram:InvoiceCurrencyCode': ZTextTypeXml, // TODO: specific CurrencyType
                'ram:PayeeTradeParty': ZTradePartyTypeXml.pick({
                    'ram:ID': true,
                    'ram:GlobalID': true,
                    'ram:SpecifiedLegalOrganization': true
                })
                    .extend({
                        'ram:Name': ZTextTypeXml // required here
                    })
                    .optional(),
                'ram:ApplicableTradeTax': z
                    .object({
                        'ram:CalculatedAmount': ZAmountTypeXml,
                        'ram:TypeCode': ZTextTypeXml, // TODO: specific qdt TaxTypeCodeType
                        'ram:ExemptionReason': ZTextTypeXml.optional(),
                        'ram:BasisAmount': ZAmountTypeXml,
                        'ram:CategoryCode': ZTextTypeXml, // TODO: specific qdt TaxCategoryCodeType
                        'ram:ExemptionReasonCode': ZTextTypeXml.optional(),
                        'ram:DueDateTypeCode': ZTextTypeXml.optional(), // TODO: specific qdt TimeReferenceCodeType
                        'ram:RateApplicablePercent': ZPercentTypeXml.optional()
                    })
                    .array()
                    .min(1),
                'ram:BillingSpecifiedPeriod': z
                    .object({
                        'ram:StartDateTime': z
                            .object({
                                'udt:DateTimeString': ZDateTimeTypeXml
                            })
                            .optional(),
                        'ram:EndDateTime': z
                            .object({
                                'udt:DateTimeString': ZDateTimeTypeXml
                            })
                            .optional()
                    })
                    .optional(),
                'ram:SpecifiedTradeAllowanceCharge': z
                    .object({
                        'ram:ChargeIndicator': ZIndicatorTypeXml,
                        'ram:CalculationPercent': ZPercentTypeXml.optional(),
                        'ram:BasisAmount': ZAmountTypeXml.optional(),
                        'ram:ActualAmount': ZAmountTypeXml,
                        'ram:ReasonCode': ZTextTypeXml.optional(), // TODO: specific qdt AllowanceChargeReasonCodeType
                        'ram:Reason': ZTextTypeXml.optional(),
                        'ram:CategoryTradeTax': z.object({
                            'ram:TypeCode': ZTextTypeXml, // TODO: specific qdt TaxTypeCodeType
                            'ram:CategoryCode': ZTextTypeXml, // TODO: specific qdt TaxCategoryCodeType
                            'ram:RateApplicablePercent': ZPercentTypeXml.optional()
                        })
                    })
                    .array()
                    .optional(),
                'ram:SpecifiedTradePaymentTerms': z
                    .object({
                        'ram:Description': ZTextTypeXml.optional(),
                        'ram:DueDateDateTime': z
                            .object({
                                'udt:DateTimeString': ZDateTimeTypeXml
                            })
                            .optional(),
                        'ram:DirectDebitMandateID': ZIdTypeXml.optional()
                    })
                    .optional(),
                'ram:SpecifiedTradeSettlementHeaderMonetarySummation': z.object({
                    'ram:LineTotalAmount': ZAmountTypeXml,
                    'ram:ChargeTotalAmount': ZAmountTypeXml.optional(),
                    'ram:AllowanceTotalAmount': ZAmountTypeXml.optional(),
                    'ram:TaxBasisTotalAmount': ZAmountTypeXml,
                    'ram:TaxTotalAmount': z
                        .union([
                            ZAmountTypeXml, // TODO: a way to make currencyID required
                            z.tuple([ZAmountTypeXml.optional(), ZAmountTypeXml.optional()])
                        ])
                        .optional(),
                    'ram:GrandTotalAmount': ZAmountTypeXml,
                    'ram:TotalPrepaidAmount': ZAmountTypeXml.optional(),
                    'ram:DuePayableAmount': ZAmountTypeXml
                }),
                'ram:InvoiceReferencedDocument': z
                    .object({
                        'ram:IssuerAssignedID': ZTextTypeXml,
                        'ram:FormattedIssueDateTime': z
                            .object({
                                'udt:DateTimeString': ZDateTimeTypeXml
                            })
                            .optional()
                    })
                    .array()
                    .optional(),
                'ram:ReceivableSpecifiedTradeAccountingAccount': z
                    .object({
                        'ram:ID': ZIdTypeXml
                    })
                    .optional()
            })
        })
    }),
    '@xmlns:rsm': z.literal('urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100'),
    '@xmlns:qdt': z.literal('urn:un:unece:uncefact:data:standard:QualifiedDataType:100'),
    '@xmlns:ram': z.literal('urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100'),
    '@xmlns:xs': z.literal('http://www.w3.org/2001/XMLSchema'),
    '@xmlns:udt': z.literal('urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100')
})

export type BasicWithoutLinesProfileXml = z.infer<typeof ZBasicWithoutLinesProfileXml>

export function isBasicWithoutLinesProfileXml(data: unknown): data is BasicWithoutLinesProfileXml {
    return ZBasicWithoutLinesProfileXml.safeParse(data).success
}
