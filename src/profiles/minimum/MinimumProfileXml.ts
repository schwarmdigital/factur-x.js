import { z } from 'zod'

import { ZAmountTypeXml } from '../../types/udt/AmountTypeConverter'
import { ZDateTimeTypeXml } from '../../types/udt/DateTimeTypeConverter'
import { ZIDTypeXml } from '../../types/udt/IDTypeConverter'
import { ZIdTypeWithSchemeXml } from '../../types/udt/IdTypeWithSchemeConverter'
import { ZTextTypeXml } from '../../types/udt/TextTypeConverter'

export const ZMinimumProfileXml = z.object({
    '?xml': z.object({
        '@version': z.literal('1.0'),
        '@encoding': z.literal('UTF-8')
    }),
    'rsm:CrossIndustryInvoice': z.object({
        'rsm:ExchangedDocumentContext': z.object({
            'ram:BusinessProcessSpecifiedDocumentContextParameter': z.object({
                'ram:ID': ZIDTypeXml.optional()
            }),
            'ram:GuidelineSpecifiedDocumentContextParameter': z.object({
                'ram:ID': z.object({
                    '#text': z.literal('urn:factur-x.eu:1p0:minimum')
                })
            })
        }),
        'rsm:ExchangedDocument': z.object({
            'ram:ID': ZIDTypeXml.optional(),
            'ram:TypeCode': ZTextTypeXml,
            'ram:IssueDateTime': z.object({
                'udt:DateTimeString': ZDateTimeTypeXml
            })
        }),
        'rsm:SupplyChainTradeTransaction': z.object({
            'ram:ApplicableHeaderTradeAgreement': z.object({
                'ram:BuyerReference': ZTextTypeXml.optional(),
                'ram:SellerTradeParty': z.object({
                    'ram:Name': ZTextTypeXml,
                    'ram:SpecifiedLegalOrganization': z.object({
                        'ram:ID': ZIdTypeWithSchemeXml.optional()
                    }),
                    'ram:PostalTradeAddress': z.object({
                        'ram:CountryID': ZTextTypeXml // TODO: specific CountryCodeType
                    }),
                    'ram:SpecifiedTaxRegistration': ZIdTypeWithSchemeXml.array().min(0).max(2).optional()
                }),
                'ram:BuyerTradeParty': z.object({
                    'ram:Name': ZTextTypeXml,
                    'ram:SpecifiedLegalOrganization': z.object({
                        'ram:ID': ZIdTypeWithSchemeXml.optional()
                    })
                }),
                'ram:BuyerOrderReferencedDocument': z.object({
                    'ram:IssuerAssignedID': ZTextTypeXml.optional()
                })
            }),
            'ram:ApplicableHeaderTradeSettlement': z.object({
                'ram:InvoiceCurrencyCode': ZTextTypeXml, // TODO: specific CurrencyType
                'ram:SpecifiedTradeSettlementHeaderMonetarySummation': z.object({
                    'ram:TaxBasisTotalAmount': ZAmountTypeXml,
                    'ram:TaxTotalAmount': ZAmountTypeXml,
                    'ram:GrandTotalAmount': ZAmountTypeXml,
                    'ram:DuePayableAmount': ZAmountTypeXml
                })
            })
        })
    }),
    '@xmlns:rsm': z.literal('urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100'),
    '@xmlns:qdt': z.literal('urn:un:unece:uncefact:data:standard:QualifiedDataType:100'),
    '@xmlns:ram': z.literal('urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100'),
    '@xmlns:xs': z.literal('http://www.w3.org/2001/XMLSchema'),
    '@xmlns:udt': z.literal('urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100')
})

export type MinimumProfileXml = z.infer<typeof ZMinimumProfileXml>

export function isMinimumProfileXml(data: unknown): data is MinimumProfileXml {
    return ZMinimumProfileXml.safeParse(data).success
}
