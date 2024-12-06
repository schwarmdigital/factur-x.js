import type { DeepMerge } from '../../types/helpers.js'
import type { MinimumProfileXml } from '../minimum/index.js'

interface BasicWithoutLinesProfileXmlAdditions {
    'rsm:CrossIndustryInvoice': {
        'rsm:ExchangedDocumentContext': {
            'ram:GuidelineSpecifiedDocumentContextParameter': { 'ram:ID': { '#text': 'urn:factur-x.eu:1p0:basicwl' } }
        }
        'rsm:ExchangedDocument': {
            'ram:IncludedNote'?: [
                {
                    'ram:Content': { '#text': string }
                    'ram:SubjectCode': { '#text': string }
                }
            ]
        }
        'rsm:SupplyChainTradeTransaction': {
            'ram:ApplicableHeaderTradeAgreement': {
                'ram:SellerTradeParty': {
                    'ram:ID'?: { '#text': string }
                    'ram:GlobalID'?: { '#text': string; '@schemeID': string }
                    'ram:SpecifiedLegalOrganization'?: {
                        'ram:ID': { '#text': string; '@schemeID': string }
                        'ram:TradingBusinessName'?: { '#text': string }
                    }
                }
                'ram:BuyerTradeParty': {
                    'ram:ID'?: { '#text': string }
                    'ram:GlobalID'?: { '#text': string; '@schemeID': string }
                    'ram:SpecifiedLegalOrganization'?: {
                        'ram:ID': { '#text': string; '@schemeID': string }
                        'ram:TradingBusinessName'?: { '#text': string }
                    }
                }
            }
        }
    }
}

/** @see {isBasicWithoutLinesProfileXml} ts-auto-guard:type-guard */
export type BasicWithoutLinesProfileXml = DeepMerge<MinimumProfileXml, BasicWithoutLinesProfileXmlAdditions>
