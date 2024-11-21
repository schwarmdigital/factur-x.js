export type SpecifiedTaxRegistrationSchemeType = {
    SalesTaxId: "VA";
    TaxId: "FC";
}

export const XML_OBJECT_BOILERPLATE_BEFORE = {
    '?xml': { '@version': '1.0', '@encoding': 'UTF-8' },
}

export const XML_OBJECT_BOILERPLATE_AFTER = {
    '@xmlns:rsm': 'urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100',
    '@xmlns:qdt': 'urn:un:unece:uncefact:data:standard:QualifiedDataType:100',
    '@xmlns:ram': 'urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100',
    '@xmlns:xs': 'http://www.w3.org/2001/XMLSchema',
    '@xmlns:udt': 'urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100'
}