import { z } from 'zod'

import { CountryIDContentType, DOCUMENT_CODES } from '../../types/qdt/types.js'
import { CURRENCY_ID } from '../../types/udt/types.js'
import Converter, { SchemeNames } from '../index.js'

const XmlMinimumProfileSchema = z.object({
    '?xml': z.object({
        '@version': z.literal('1.0'),
        '@encoding': z.literal('UTF-8')
    }),
    'rsm:CrossIndustryInvoice': z.object({
        'rsm:ExchangedDocumentContext': z.object({
            'ram:BusinessProcessSpecifiedDocumentContextParameter': z
                .object({
                    'ram:ID': z.object({
                        '#text': z.string()
                    })
                })
                .optional(),
            'ram:GuidelineSpecifiedDocumentContextParameter': z.object({
                'ram:ID': z.object({
                    '#text': z.literal('urn:factur-x.eu:1p0:minimum')
                })
            })
        }),
        'rsm:ExchangedDocument': z.object({
            'ram:ID': z.object({
                '#text': z.string()
            }),
            'ram:TypeCode': z.object({
                '#text': z.string()
            }),
            'ram:IssueDateTime': z.object({
                'udt:DateTimeString': z.object({
                    '#text': z.string(),
                    '@format': z.string()
                })
            })
        }),
        'rsm:SupplyChainTradeTransaction': z.object({
            'ram:ApplicableHeaderTradeAgreement': z.object({
                'ram:BuyerReference': z
                    .object({
                        '#text': z.string()
                    })
                    .optional(),
                'ram:SellerTradeParty': z.object({
                    'ram:Name': z.object({
                        '#text': z.string()
                    }),
                    'ram:SpecifiedLegalOrganization': z
                        .object({
                            'ram:ID': z.object({
                                '#text': z.string(),
                                '@schemeID': z.string().optional()
                            })
                        })
                        .optional(),
                    'ram:PostalTradeAddress': z.object({
                        'ram:CountryID': z.object({
                            '#text': z.string()
                        })
                    }),
                    'ram:SpecifiedTaxRegistration': z
                        .array(
                            z.object({
                                'ram:ID': z.object({
                                    '#text': z.string(),
                                    '@schemeID': z.string()
                                })
                            })
                        )
                        .length(2)
                        .optional()
                }),
                'ram:BuyerTradeParty': z.object({
                    'ram:Name': z.object({
                        '#text': z.string()
                    }),
                    'ram:SpecifiedLegalOrganization': z
                        .object({
                            'ram:ID': z.object({
                                '#text': z.string(),
                                '@schemeID': z.string().optional()
                            })
                        })
                        .optional()
                }),
                'ram:BuyerOrderReferencedDocument': z
                    .object({
                        'ram:IssuerAssignedID': z.object({
                            '#text': z.string()
                        })
                    })
                    .optional()
            }),
            'ram:ApplicableHeaderTradeDelivery': z.object({
                '#text': z.literal('')
            }),
            'ram:ApplicableHeaderTradeSettlement': z.object({
                'ram:InvoiceCurrencyCode': z.object({
                    '#text': z.string()
                }),
                'ram:SpecifiedTradeSettlementHeaderMonetarySummation': z.object({
                    'ram:TaxBasisTotalAmount': z.object({
                        '#text': z.string()
                    }),
                    'ram:TaxTotalAmount': z.object({
                        '#text': z.string(),
                        '@currencyID': z.string()
                    }),
                    'ram:GrandTotalAmount': z.object({
                        '#text': z.string()
                    }),
                    'ram:DuePayableAmount': z.object({
                        '#text': z.string()
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
})

type XmlMinimumProfile = z.infer<typeof XmlMinimumProfileSchema>

const isXmlMinimumProfile = (data: unknown): data is XmlMinimumProfile => {
    return XmlMinimumProfileSchema.safeParse(data).success
}

export { XmlMinimumProfileSchema, XmlMinimumProfile, isXmlMinimumProfile }
const TokenScheme = z
    .string()
    .min(1)
    .regex(/^\S.*\S$/, 'No leading or trailing spaces allowed')
    .regex(/^[^\n\t]+$/, 'No newlines, or tabs allowed')
    .regex(/^(?!.* {2}).*$/, 'No double spaces allowed')
    .brand<'Token'>()

/**
 * @description A string with the following restrictions:
 * - No leading or trailing spaces
 * - No newline characters (\n)
 * - No tabs (\t)
 * - No double spaces (" ") -> Single space is allowed
 */
export type Token = z.infer<typeof TokenScheme>

// Definiere die native Enums

// Definiere die Zod-Schemas
const TaxIdentifierTypeSchema = z.union([
    z.object({
        vatId: TokenScheme,
        localTaxId: TokenScheme.optional()
    }),
    z.object({
        vatId: TokenScheme.optional(),
        localTaxId: TokenScheme
    })
])

const MinimumProfileSchema = z.object({
    meta: z.object({
        businessProcessType: TokenScheme.optional(),
        guidelineSpecifiedDocumentContextParameter: z.literal('urn:factur-x.eu:1p0:minimum')
    }),
    document: z.object({
        id: TokenScheme,
        type: z.nativeEnum(DOCUMENT_CODES),
        dateOfIssue: z.date()
    }),
    seller: z.object({
        name: z.string(),
        specifiedLegalOrganization: z
            .object({
                id: TokenScheme,
                schemeId: TokenScheme.optional()
            })
            .optional(),
        postalAddress: z.object({
            country: z.nativeEnum(CountryIDContentType)
        }),
        taxIdentification: TaxIdentifierTypeSchema
    }),
    buyer: z.object({
        reference: z.string().optional(),
        name: z.string(),
        specifiedLegalOrganization: z
            .object({
                id: TokenScheme,
                schemeId: TokenScheme.optional()
            })
            .optional(),
        orderReference: TokenScheme.optional()
    }),
    monetarySummary: z.object({
        currency: z.nativeEnum(CURRENCY_ID),
        taxCurrency: z.nativeEnum(CURRENCY_ID),
        sumWithoutTax: z.number(),
        tax: z.number(),
        grandTotal: z.number(),
        openAmount: z.number()
    })
})

// Typen ableiten
export type MinimumProfile = z.infer<typeof MinimumProfileSchema>
export type TaxIdentifierType = z.infer<typeof TaxIdentifierTypeSchema>

const isMinimumProfile = (data: unknown): data is MinimumProfile => {
    return MinimumProfileSchema.safeParse(data).success
}

// Detailed type definition only for dev use. Commented out, to increase IntelliSense performance
/*interface Minimum_MappingItem extends Omit<MappingItem, 'obj' | 'xml'> {
    obj: DotNotation<MinimumProfile>;
    xml: DotNotation<XmlMinimumProfile>;
}*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapping: any[] = [
    //] Minimum_MappingItem[] = [  // Detailed type definition only for dev use. Commented out, to increase IntelliSense performance
    {
        obj: 'meta.businessProcessType',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID.#text',
        objType: 'string'
    },
    {
        obj: 'meta.guidelineSpecifiedDocumentContextParameter',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID.#text',
        objType: 'string'
    },
    { obj: 'document.id', xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:ID.#text', objType: 'string' },
    {
        obj: 'document.type',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:TypeCode.#text',
        objType: 'string'
    },
    {
        obj: 'document.dateOfIssue',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString',
        objType: 'Date'
    },
    {
        obj: 'buyer.reference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerReference.#text',
        objType: 'string'
    },
    {
        obj: 'seller.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name.#text',
        objType: 'string'
    },
    {
        obj: 'seller.specifiedLegalOrganization.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text',
        objType: 'string'
    },
    {
        obj: 'seller.specifiedLegalOrganization.schemeId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID',
        objType: 'string'
    },
    {
        obj: 'seller.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountryID.#text',
        objType: 'string'
    },
    {
        obj: 'seller.taxIdentification',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedTaxRegistration',
        objType: 'taxid'
    },
    {
        obj: 'buyer.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:Name.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.specifiedLegalOrganization.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.specifiedLegalOrganization.schemeId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID',
        objType: 'string'
    },
    {
        obj: 'buyer.orderReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID.#text',
        objType: 'string'
    },
    {
        obj: undefined,
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.#text',
        objType: undefined
    },
    {
        obj: 'monetarySummary.currency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode.#text',
        objType: 'string'
    },
    {
        obj: 'monetarySummary.sumWithoutTax',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'monetarySummary.tax',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'monetarySummary.taxCurrency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount.@currencyID',
        objType: 'string'
    },
    {
        obj: 'monetarySummary.grandTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:GrandTotalAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'monetarySummary.openAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:DuePayableAmount.#text',
        objType: 'number_decimal_2'
    }
]

export default class MinimumProfileConverter extends Converter<XmlMinimumProfile, MinimumProfile> {
    readonly _scheme = 'MINIMUM' as SchemeNames

    constructor(input: XmlMinimumProfile)
    constructor(input: MinimumProfile)
    constructor(input: XmlMinimumProfile | MinimumProfile) {
        super(input, mapping)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isProperXMLScheme(xmlObject: any): xmlObject is XmlMinimumProfile {
        return isXmlMinimumProfile(xmlObject)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isProperObjectScheme(object: any): object is MinimumProfile {
        return isMinimumProfile(object)
    }
}
