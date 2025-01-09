import { MappingItem } from '../index.js'

const notesMapping: MappingItem[] = [
    { obj: 'content', xml: 'ram:Content.#text', objType: 'string' },
    { obj: 'subjectCode', xml: 'ram:SubjectCode.#text', objType: 'string' }
]

const globalIdMapping: MappingItem[] = [
    { obj: 'id', xml: '#text', objType: 'token' },
    { obj: 'identificationScheme', xml: '@schemeID', objType: 'string' }
]

const universalCommunicationMapping: MappingItem[] = [
    { obj: 'URIID', xml: 'ram:URIID.#text', objType: 'token' },
    { obj: 'ElectronicAddressScheme', xml: 'ram:URIID.@schemeID', objType: 'string' }
]

const paymentMeansMapping: MappingItem[] = [
    { obj: 'paymentType', xml: 'ram:TypeCode.#text', objType: 'string' },
    { obj: 'payerIBAN', xml: 'ram:PayerPartyDebtorFinancialAccount.ram:IBANID.#text', objType: 'token' },
    { obj: 'payeeIBAN', xml: 'ram:PayeePartyCreditorFinancialAccount.ram:IBANID.#text', objType: 'token' },
    {
        obj: 'payeeProprietaryID',
        xml: 'ram:PayeePartyCreditorFinancialAccount.ram:ProprietaryID.#text',
        objType: 'token'
    }
]

const taxBreakdownMapping: MappingItem[] = [
    { obj: 'calculatedAmount', xml: 'ram:CalculatedAmount.#text', objType: 'number_decimal_2' },
    { obj: 'typeCode', xml: 'ram:TypeCode.#text', objType: 'string' },
    { obj: 'exemptionReason', xml: 'ram:ExemptionReason.#text', objType: 'string' },
    { obj: 'basisAmount', xml: 'ram:BasisAmount.#text', objType: 'number_decimal_2' },
    { obj: 'categoryCode', xml: 'ram:CategoryCode.#text', objType: 'string' },
    { obj: 'exemptionReasonCode', xml: 'ram:ExemptionReasonCode.#text', objType: 'string' },
    { obj: 'dueDateTypeCode', xml: 'ram:DueDateTypeCode.#text', objType: 'string' },
    { obj: 'rateApplicablePercent', xml: 'ram:RateApplicablePercent.#text', objType: 'number_decimal_2' }
]

const documentLevelAllowanceChargeMapping: MappingItem[] = [
    { obj: 'calculationPercent', xml: 'ram:CalculationPercent.#text', objType: 'number_decimal_2' },
    { obj: 'basisAmount', xml: 'ram:BasisAmount.#text', objType: 'number_decimal_2' },
    { obj: 'actualAmount', xml: 'ram:ActualAmount.#text', objType: 'number_decimal_2' },
    { obj: 'reasonCode', xml: 'ram:ReasonCode.#text', objType: 'string' },
    { obj: 'reason', xml: 'ram:Reason.#text', objType: 'string' },
    {
        obj: 'categoryTradeTax',
        xml: 'ram:CategoryTradeTax',
        objType: 'Array',
        subMap: [
            { obj: 'typeCode', xml: 'ram:TypeCode.#text', objType: 'string' },
            { obj: 'categoryCode', xml: 'ram:CategoryCode.#text', objType: 'string' },
            { obj: 'rateApplicablePercent', xml: 'ram:RateApplicablePercent.#text', objType: 'number_decimal_2' }
        ]
    }
]

const referencedInvoiceMapping: MappingItem[] = [
    {
        obj: 'documentId',
        xml: 'ram:IssuerAssignedID.#text',
        objType: 'token'
    },
    {
        obj: 'issueDate',
        xml: 'ram:FormattedIssueDateTime.udt:DateTimeString',
        objType: 'date'
    }
]

const basicWLMapping: MappingItem[] = [
    {
        obj: 'meta.businessProcessType',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID.#text',
        objType: 'token'
    },
    {
        obj: 'meta.guidelineSpecifiedDocumentContextParameter',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID.#text',
        objType: 'string'
    },
    { obj: 'document.id', xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:ID.#text', objType: 'token' },
    {
        obj: 'document.type',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:TypeCode.#text',
        objType: 'string'
    },
    {
        obj: 'document.dateOfIssue',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString',
        objType: 'date'
    },
    {
        obj: 'document.notes',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IncludedNote',
        objType: 'Array',
        subMap: notesMapping
    },
    {
        obj: 'buyer.reference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerReference.#text',
        objType: 'string'
    },
    {
        obj: 'seller.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:ID',
        objType: 'Array',
        subMap: [{ obj: '', xml: '#text', objType: 'token' }]
    },
    {
        obj: 'seller.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:GlobalID',
        objType: 'Array',
        subMap: globalIdMapping
    },
    {
        obj: 'seller.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name.#text',
        objType: 'string'
    },
    {
        obj: 'seller.specifiedLegalOrganization.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text',
        objType: 'token'
    },
    {
        obj: 'seller.specifiedLegalOrganization.schemeId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID',
        objType: 'string'
    },
    {
        obj: 'seller.specifiedLegalOrganization.tradingBusinessName',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:TradingBusinessName.#text',
        objType: 'string'
    },
    {
        obj: 'seller.postalAddress.postcode',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:PostcodeCode.#text',
        objType: 'token'
    },
    {
        obj: 'seller.postalAddress.addressLineOne',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineOne.#text',
        objType: 'string'
    },
    {
        obj: 'seller.postalAddress.addressLineTwo',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineTwo.#text',
        objType: 'string'
    },
    {
        obj: 'seller.postalAddress.addressLineThree',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineThree.#text',
        objType: 'string'
    },
    {
        obj: 'seller.postalAddress.city',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CityName.#text',
        objType: 'string'
    },
    {
        obj: 'seller.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountryID.#text',
        objType: 'string'
    },
    {
        obj: 'seller.postalAddress.countrySubDivision',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName.#text',
        objType: 'string'
    },
    {
        obj: 'seller.UniversalCommunicationAddress',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:URIUniversalCommunication',
        objType: 'Object',
        subMap: universalCommunicationMapping
    },
    {
        obj: 'seller.taxIdentification',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedTaxRegistration',
        objType: 'taxid'
    },
    {
        obj: 'buyer.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:ID.#text',
        objType: 'token'
    },
    {
        obj: 'buyer.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:GlobalID',
        objType: 'Object',
        subMap: globalIdMapping
    },
    {
        obj: 'buyer.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:Name.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.specifiedLegalOrganization.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text',
        objType: 'token'
    },
    {
        obj: 'buyer.specifiedLegalOrganization.schemeId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID',
        objType: 'string'
    },
    {
        obj: 'buyer.postalAddress.postcode',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:PostcodeCode.#text',
        objType: 'token'
    },
    {
        obj: 'buyer.postalAddress.addressLineOne',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineOne.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.postalAddress.addressLineTwo',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineTwo.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.postalAddress.addressLineThree',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineThree.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.postalAddress.city',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CityName.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CountryID.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.postalAddress.countrySubDivision',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName.#text',
        objType: 'string'
    },
    {
        obj: 'buyer.UniversalCommunicationAddress',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:URIUniversalCommunication',
        objType: 'Object',
        subMap: universalCommunicationMapping
    },
    {
        obj: 'buyer.taxIdentification',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedTaxRegistration',
        objType: 'taxid'
    },
    {
        obj: 'sellerTaxRepresentative.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:Name.#text',
        objType: 'string'
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.postcode',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:PostcodeCode.#text',
        objType: 'token'
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.addressLineOne',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:LineOne.#text',
        objType: 'string'
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.addressLineTwo',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:LineTwo.#text',
        objType: 'string'
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.addressLineThree',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:LineThree.#text',
        objType: 'string'
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.city',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:CityName.#text',
        objType: 'string'
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:CountryID.#text',
        objType: 'string'
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.countrySubDivision',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName.#text',
        objType: 'string'
    },
    {
        obj: 'sellerTaxRepresentative.taxIdentification',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:SpecifiedTaxRegistration',
        objType: 'taxid'
    },
    {
        obj: 'referencedDocuments.orderReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID.#text',
        objType: 'token'
    },
    {
        obj: 'referencedDocuments.contractReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:ContractReferencedDocument.ram:IssuerAssignedID.#text',
        objType: 'token'
    },
    {
        obj: 'delivery.recipient.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:ID.#text',
        objType: 'token'
    },
    {
        obj: 'delivery.recipient.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:GlobalID',
        objType: 'Object',
        subMap: globalIdMapping
    },
    {
        obj: 'delivery.recipient.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:Name.#text',
        objType: 'string'
    },
    {
        obj: 'delivery.recipient.postalAddress.postcode',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:PostcodeCode.#text',
        objType: 'token'
    },
    {
        obj: 'delivery.recipient.postalAddress.addressLineOne',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineOne.#text',
        objType: 'string'
    },
    {
        obj: 'delivery.recipient.postalAddress.addressLineTwo',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineTwo.#text',
        objType: 'string'
    },
    {
        obj: 'delivery.recipient.postalAddress.addressLineThree',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineThree.#text',
        objType: 'string'
    },
    {
        obj: 'delivery.recipient.postalAddress.city',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CityName.#text',
        objType: 'string'
    },
    {
        obj: 'delivery.recipient.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CountryID.#text',
        objType: 'string'
    },
    {
        obj: 'delivery.recipient.postalAddress.countrySubDivision',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName.#text',
        objType: 'string'
    },
    {
        obj: 'delivery.deliveryDate',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ActualDeliverySupplyChainEvent.ram:OccurrenceDateTime.udt:DateTimeString',
        objType: 'date'
    },
    {
        obj: 'referencedDocuments.advanceShippingNotice',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:DespatchAdviceReferencedDocument.ram:IssuerAssignedID.#text',
        objType: 'token'
    },
    {
        obj: 'paymentInformation.creditorReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:CreditorReferenceID.#text',
        objType: 'token'
    },
    {
        obj: 'paymentInformation.paymentReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PaymentReference.#text',
        objType: 'string'
    },
    {
        obj: 'monetarySummary.taxCurrency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:TaxCurrencyCode.#text',
        objType: 'string'
    },
    {
        obj: 'monetarySummary.currency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode.#text',
        objType: 'string'
    },
    {
        obj: 'paymentInformation.payee.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:ID.#text',
        objType: 'token'
    },
    {
        obj: 'paymentInformation.payee.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:GlobalID',
        objType: 'Object',
        subMap: globalIdMapping
    },
    {
        obj: 'paymentInformation.payee.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:Name.#text',
        objType: 'string'
    },
    {
        obj: 'paymentInformation.payee.specifiedLegalOrganization.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text',
        objType: 'token'
    },
    {
        obj: 'paymentInformation.payee.specifiedLegalOrganization.schemeId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID',
        objType: 'string'
    },
    {
        obj: 'paymentInformation.paymentMeans',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementPaymentMeans',
        objType: 'Array',
        subMap: paymentMeansMapping
    },
    {
        obj: 'monetarySummary.taxBreakdown',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:ApplicableTradeTax',
        objType: 'Array',
        subMap: taxBreakdownMapping
    },
    {
        obj: 'paymentInformation.paymentPeriod.startDate',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:BillingSpecifiedPeriod.ram:StartDateTime.udt:DateTimeString',
        objType: 'date'
    },
    {
        obj: 'paymentInformation.paymentPeriod.endDate',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:BillingSpecifiedPeriod.ram:EndDateTime.udt:DateTimeString',
        objType: 'date'
    },
    {
        obj: 'monetarySummary.documentLevelAllowances',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeAllowanceCharge',
        objType: 'Allowance',
        subMap: documentLevelAllowanceChargeMapping
    },
    {
        obj: 'monetarySummary.documentLevelCharges',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeAllowanceCharge',
        objType: 'Charge',
        subMap: documentLevelAllowanceChargeMapping
    },
    {
        obj: 'paymentInformation.paymentTerms.description',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradePaymentTerms.ram:Description.#text',
        objType: 'string'
    },
    {
        obj: 'paymentInformation.paymentTerms.dueDate',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradePaymentTerms.ram:DueDateDateTime.udt:DateTimeString',
        objType: 'date'
    },
    {
        obj: 'paymentInformation.paymentTerms.directDebitMandateID',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradePaymentTerms.ram:DirectDebitMandateID.#text',
        objType: 'token'
    },
    {
        obj: 'monetarySummary.sumWithoutAllwancesAndCharges',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:LineTotalAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'monetarySummary.chargeTotalAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:ChargeTotalAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'monetarySummary.allowanceTotalAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:AllowanceTotalAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'monetarySummary.sumWithoutTax',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount.#text',
        objType: 'number_decimal_2'
    },
    // Attention!! TaxTotal & TaxTotalInTaxCurrency is an edge case. Additionally to the 'normal mapping' there needs to be done some rework via afterXml2Obj and afterObj2Xml
    {
        obj: 'monetarySummary.taxTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount',
        objType: 'tax_total'
    },
    {
        obj: 'monetarySummary.taxTotalInTaxCurrency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount',
        objType: 'tax_total_tax_currency'
    },
    {
        obj: 'monetarySummary.grandTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:GrandTotalAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'monetarySummary.prepaidAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TotalPrepaidAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'monetarySummary.openAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:DuePayableAmount.#text',
        objType: 'number_decimal_2'
    },
    {
        obj: 'referencedDocuments.referencedInvoice',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceReferencedDocument',
        objType: 'Array',
        subMap: referencedInvoiceMapping
    },
    {
        obj: 'paymentInformation.SpecifiedTradeAccountingAccount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:ReceivableSpecifiedTradeAccountingAccount.ram:ID.#text',
        objType: 'token'
    }
]

export { basicWLMapping }
