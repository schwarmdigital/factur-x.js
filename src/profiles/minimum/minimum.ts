import { CountryIDType, CurrencyCodeType, DocumentCodeType } from '../../types/qdt/types.js'
import { IDType, Token } from '../../types/udt/types.js'
import Converter, { SchemeNames } from '../index.js'
import { isMinimumProfile, isXmlMinimumProfile } from './minimum.guard.js'

/** @see {isXmlMinimumProfile} ts-auto-guard:type-guard */
export interface XmlMinimumProfile {
    '?xml': { '@version': '1.0'; '@encoding': 'UTF-8' }
    'rsm:CrossIndustryInvoice': {
        'rsm:ExchangedDocumentContext': {
            'ram:BusinessProcessSpecifiedDocumentContextParameter'?: { 'ram:ID': { '#text': string } }
            'ram:GuidelineSpecifiedDocumentContextParameter': { 'ram:ID': { '#text': 'urn:factur-x.eu:1p0:minimum' } }
        }
        'rsm:ExchangedDocument': {
            'ram:ID': { '#text': string }
            'ram:TypeCode': { '#text': string }
            'ram:IssueDateTime': {
                'udt:DateTimeString': { '#text': string; '@format': string }
            }
        }
        'rsm:SupplyChainTradeTransaction': {
            'ram:ApplicableHeaderTradeAgreement': {
                'ram:BuyerReference'?: { '#text': string }
                'ram:SellerTradeParty': {
                    'ram:Name': { '#text': string }
                    'ram:SpecifiedLegalOrganization'?: { 'ram:ID': { '#text': string; '@schemeID': string } }
                    'ram:PostalTradeAddress': { 'ram:CountryID': { '#text': string } }
                    'ram:SpecifiedTaxRegistration': [
                        { 'ram:ID': { '#text': string; '@schemeID': string } },
                        { 'ram:ID': { '#text': string; '@schemeID': string } }?
                    ]
                }
                'ram:BuyerTradeParty': {
                    'ram:Name': { '#text': string }
                    'ram:SpecifiedLegalOrganization'?: { 'ram:ID': { '#text': string; '@schemeID': string } }
                }
                'ram:BuyerOrderReferencedDocument'?: {
                    'ram:IssuerAssignedID': { '#text': string }
                }
            }
            'ram:ApplicableHeaderTradeDelivery': { '#text': '' }
            'ram:ApplicableHeaderTradeSettlement': {
                'ram:InvoiceCurrencyCode': { '#text': string }
                'ram:SpecifiedTradeSettlementHeaderMonetarySummation': {
                    'ram:TaxBasisTotalAmount': { '#text': string }
                    'ram:TaxTotalAmount': { '#text': string; '@currencyID': string }
                    'ram:GrandTotalAmount': { '#text': string }
                    'ram:DuePayableAmount': { '#text': string }
                }
            }
        }
        '@xmlns:rsm': 'urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100'
        '@xmlns:qdt': 'urn:un:unece:uncefact:data:standard:QualifiedDataType:100'
        '@xmlns:ram': 'urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100'
        '@xmlns:xs': 'http://www.w3.org/2001/XMLSchema'
        '@xmlns:udt': 'urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100'
    }
}

export type TaxIdentifierType =
    | {
          vatId: IDType
          localTaxId?: IDType
      }
    | {
          vatId?: IDType
          localTaxId: IDType
      }

/** @see {isMinimumProfile} ts-auto-guard:type-guard */
export interface MinimumProfile {
    meta: {
        businessProcessType?: IDType
        guidelineSpecifiedDocumentContextParameter: 'urn:factur-x.eu:1p0:minimum'
    }
    document: {
        id: IDType
        type: DocumentCodeType
        dateOfIssue: Date
    }
    seller: {
        name: string
        specifiedLegalOrganization?: {
            id: IDType
            schemeId: Token
        }
        postalAddress: {
            country: CountryIDType
        }
        taxIdentification: TaxIdentifierType
    }
    buyer: {
        reference?: string // Explanation @https://www.e-rechnung-bund.de/faq/leitweg-id/
        name: string
        specifiedLegalOrganization?: {
            id: IDType
            schemeId: Token
        }
        orderReference?: IDType
    }
    monetarySummary: {
        currency: CurrencyCodeType
        taxCurrency: CurrencyCodeType
        sumWithoutTax: number
        tax: number
        grandTotal: number
        openAmount: number
    }
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
