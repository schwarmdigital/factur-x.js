/** @see {isMinimumProfileXml} ts-auto-guard:type-guard */
export interface MinimumProfileXml {
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
