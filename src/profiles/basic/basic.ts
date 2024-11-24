import { IDType } from '../../types/udt/types.js'
import Converter, { SchemeNames } from '../index.js'
import { isMinimumProfile, isXmlMinimumProfile } from '../minimum/minimum.guard.js'

// !!!!!!!!!!!!!!!!!! NOT PROPERLY IMPLEMENTED, YET, JUST FOR TEST PURPOSE!

export interface XmlBasicProfile {
    '?xml': { '@version': '1.0'; '@encoding': 'UTF-8' }
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

export interface BasicProfile {
    meta: {
        businessProcessType?: IDType
        guidelineSpecifiedDocumentContextParameter: 'urn:factur-x.eu:1p0:minimum'
    }
}

/*interface Basic_MappingItem extends Omit<MappingItem, 'obj' | 'xml'> {
    obj: DotNotation<BasicProfile>;
    xml: DotNotation<XmlBasicProfile>;
}*/

const mapping: any[] = [
    // Basic_MappingItem[] = [
    {
        obj: 'meta.businessProcessType',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID.#text',
        objType: 'string'
    },
    {
        obj: 'meta.guidelineSpecifiedDocumentContextParameter',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID.#text',
        objType: 'string'
    }
]

export default class BasicProfileConverter extends Converter<XmlBasicProfile, BasicProfile> {
    readonly _scheme = 'BASIC' as SchemeNames
    constructor(input: XmlBasicProfile)
    constructor(input: BasicProfile)
    constructor(input: XmlBasicProfile | BasicProfile) {
        super(input, mapping)
    }

    isProperXMLScheme(xmlObject: any): xmlObject is XmlBasicProfile {
        return isXmlMinimumProfile(xmlObject)
    }
    isProperObjectScheme(object: any): object is BasicProfile {
        return isMinimumProfile(object)
    }
}

/*

const test =
{
    '?xml': { '@version': '1.0', '@encoding': 'UTF-8' },
    'rsm:CrossIndustryInvoice': {
        'rsm:ExchangedDocumentContext': {
            'ram:BusinessProcessSpecifiedDocumentContextParameter': { 'ram:ID': { '#text': "A1" } },
            'ram:GuidelineSpecifiedDocumentContextParameter': { 'ram:ID': { '#text': 'urn:factur-x.eu:1p0:minimum' } }
        },
        'rsm:ExchangedDocument': {
            'ram:ID': { '#text': '471102' },
            'ram:TypeCode': { '#text': '380' },
            'ram:IssueDateTime': {
                'udt:DateTimeString': { '#text': '20200305', '@format': '102' }
            }
        },
        'rsm:SupplyChainTradeTransaction': {
            'ram:ApplicableHeaderTradeAgreement': {
                'ram:SellerTradeParty': {
                    'ram:Name': { '#text': 'Lieferant GmbH' },
                    'ram:PostalTradeAddress': { 'ram:CountryID': { '#text': 'DE' } },
                    'ram:SpecifiedTaxRegistration': [
                        { 'ram:ID': { '#text': '201/113/40209', '@schemeID': 'FC' } },
                        { 'ram:ID': { '#text': 'DE123456789', '@schemeID': 'VA' } }
                    ]
                },
                'ram:BuyerTradeParty': { 'ram:Name': { '#text': 'Kunden AG Frankreich' } },
                'ram:BuyerOrderReferencedDocument': {
                    'ram:IssuerAssignedID': { '#text': "hi" },
                }
            },
            'ram:ApplicableHeaderTradeDelivery': { '#text': '' },
            'ram:ApplicableHeaderTradeSettlement': {
                'ram:InvoiceCurrencyCode': { '#text': 'EUR' },
                'ram:SpecifiedTradeSettlementHeaderMonetarySummation': {
                    'ram:TaxBasisTotalAmount': { '#text': '198.00' },
                    'ram:TaxTotalAmount': { '#text': '37.62', '@currencyID': 'EUR' },
                    'ram:GrandTotalAmount': { '#text': '235.62' },
                    'ram:DuePayableAmount': { '#text': '235.62' }
                }
            }
        },
        '@xmlns:rsm': 'urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100',
        '@xmlns:qdt': 'urn:un:unece:uncefact:data:standard:QualifiedDataType:100',
        '@xmlns:ram': 'urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100',
        '@xmlns:xs': 'http://www.w3.org/2001/XMLSchema',
        '@xmlns:udt': 'urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100'
    }
}*/
