import { ArrayConverter } from '../../types/ArrayConverter.js'
import { CodeTypeConverter } from '../../types/CodeTypeConverter.js'
import {
    COUNTRY_ID_CODES,
    CURRENCY_CODES,
    DOCUMENT_TYPE_CODES,
    EAS_SCHEME_CODES,
    ISO6523_CODES
} from '../../types/codes.js'
import { NoteTypeConverter } from '../../types/ram/NoteTypeConverter.js'
import { ReferencedDocumentTypeConverter } from '../../types/ram/ReferencedDocumentConverter.js'
import { SpecifiedTaxRegistrationsForSellerTypeConverter } from '../../types/ram/SpecifiedTaxRegistrationsForSellerTypeConverter.js'
import { SpecifiedTaxRegistrationsTypeConverter } from '../../types/ram/SpecifiedTaxRegistrationsTypeConverter.js'
import { TradeAllowanceChargeTypeConverter } from '../../types/ram/TradeAllowanceChargeType/TradeAllowanceChargeTypeConverter.js'
import { TradeSettlementPaymentMeansTypeConverter } from '../../types/ram/TradeSettlementPaymentMeansTypeConverter.js'
import { TradeTaxTypeConverter } from '../../types/ram/TradeTaxTypeConverter.js'
import { AmountTypeConverter } from '../../types/udt/AmountTypeConverter.js'
import { AmountTypeWithRequiredCurrencyConverter } from '../../types/udt/AmountTypeWithRequiredCurrencyConverter.js'
import { DateTimeTypeConverter } from '../../types/udt/DateTimeTypeConverter.js'
import { IdTypeConverter } from '../../types/udt/IdTypeConverter.js'
import { IdTypeWithOptionalSchemeConverter } from '../../types/udt/IdTypeWithOptionalSchemeConverter.js'
import { IdTypeWithRequiredSchemeConverter } from '../../types/udt/IdTypeWithRequiredlSchemeConverter.js'
import { TextTypeConverter } from '../../types/udt/TextTypeConverter.js'
import { TokenTypeConverter } from '../../types/xs/TokenConverter.js'
import type { MappingItem } from '../convert.js'
import type { BasicWithoutLinesProfile } from './BasicWithoutLinesProfile.js'
import { BasicWithoutLinesProfileXml } from './BasicWithoutLinesProfileXml.js'

const mapping: MappingItem<BasicWithoutLinesProfile, BasicWithoutLinesProfileXml>[] = [
    {
        obj: 'meta.businessProcessType',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'meta.guidelineSpecifiedDocumentContextParameter',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'document.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:ID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'document.type',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:TypeCode',
        converter: new CodeTypeConverter(DOCUMENT_TYPE_CODES)
    },
    {
        obj: 'document.dateOfIssue',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IssueDateTime',
        converter: new DateTimeTypeConverter()
    },
    {
        obj: 'document.notes',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IncludedNote',
        converter: new ArrayConverter(new NoteTypeConverter())
    },
    {
        obj: 'buyer.reference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerReference',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:ID',
        converter: new ArrayConverter(new IdTypeConverter())
    },
    {
        obj: 'seller.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:GlobalID',
        converter: new ArrayConverter(new IdTypeWithRequiredSchemeConverter(ISO6523_CODES))
    },
    {
        obj: 'seller.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.specifiedLegalOrganization.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID',
        converter: new IdTypeWithOptionalSchemeConverter(ISO6523_CODES)
    },
    {
        obj: 'seller.specifiedLegalOrganization.tradingBusinessName',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:TradingBusinessName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.postalAddress.postcode',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:PostcodeCode',
        converter: new TokenTypeConverter()
    },
    {
        obj: 'seller.postalAddress.addressLineOne',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineOne',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.postalAddress.addressLineTwo',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineTwo',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.postalAddress.addressLineThree',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineThree',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.postalAddress.city',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CityName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountryID',
        converter: new CodeTypeConverter(COUNTRY_ID_CODES)
    },
    {
        obj: 'seller.postalAddress.countrySubDivision',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.universalCommunicationAddressURI',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:URIUniversalCommunication.ram:URIID',
        converter: new IdTypeWithRequiredSchemeConverter(EAS_SCHEME_CODES)
    },
    {
        obj: 'seller.taxIdentification',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedTaxRegistration',
        converter: new SpecifiedTaxRegistrationsForSellerTypeConverter()
    },
    {
        obj: 'buyer.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:ID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'buyer.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:GlobalID',
        converter: new IdTypeWithRequiredSchemeConverter(ISO6523_CODES)
    },
    {
        obj: 'buyer.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:Name',
        converter: new TextTypeConverter()
    },
    {
        obj: 'buyer.specifiedLegalOrganization',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID',
        converter: new IdTypeWithOptionalSchemeConverter(ISO6523_CODES)
    },
    {
        obj: 'buyer.postalAddress.postcode',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:PostcodeCode',
        converter: new TokenTypeConverter()
    },
    {
        obj: 'buyer.postalAddress.addressLineOne',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineOne',
        converter: new TextTypeConverter()
    },
    {
        obj: 'buyer.postalAddress.addressLineTwo',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineTwo',
        converter: new TextTypeConverter()
    },
    {
        obj: 'buyer.postalAddress.addressLineThree',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineThree',
        converter: new TextTypeConverter()
    },
    {
        obj: 'buyer.postalAddress.city',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CityName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'buyer.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CountryID',
        converter: new CodeTypeConverter(COUNTRY_ID_CODES)
    },
    {
        obj: 'buyer.postalAddress.countrySubDivision',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'buyer.universalCommunicationAddressURI',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:URIUniversalCommunication.ram:URIID',
        converter: new IdTypeWithRequiredSchemeConverter(EAS_SCHEME_CODES)
    },
    {
        obj: 'buyer.taxIdentification',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedTaxRegistration',
        converter: new SpecifiedTaxRegistrationsTypeConverter()
    },
    {
        obj: 'sellerTaxRepresentative.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:Name',
        converter: new TextTypeConverter()
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.postcode',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:PostcodeCode',
        converter: new TokenTypeConverter()
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.addressLineOne',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:LineOne',
        converter: new TextTypeConverter()
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.addressLineTwo',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:LineTwo',
        converter: new TextTypeConverter()
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.addressLineThree',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:LineThree',
        converter: new TextTypeConverter()
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.city',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:CityName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:CountryID',
        converter: new CodeTypeConverter(COUNTRY_ID_CODES)
    },
    {
        obj: 'sellerTaxRepresentative.postalAddress.countrySubDivision',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'sellerTaxRepresentative.taxIdentification',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTaxRepresentativeTradeParty.ram:SpecifiedTaxRegistration',
        converter: new SpecifiedTaxRegistrationsTypeConverter()
    },
    {
        obj: 'referencedDocuments.orderReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'referencedDocuments.contractReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:ContractReferencedDocument.ram:IssuerAssignedID',
        converter: new IdTypeConverter()
    },

    {
        obj: 'delivery.recipient.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:ID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'delivery.recipient.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:GlobalID',
        converter: new IdTypeWithRequiredSchemeConverter(ISO6523_CODES)
    },
    {
        obj: 'delivery.recipient.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:Name',
        converter: new TextTypeConverter()
    },
    {
        obj: 'delivery.recipient.postalAddress.postcode',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:PostcodeCode',
        converter: new TokenTypeConverter()
    },
    {
        obj: 'delivery.recipient.postalAddress.addressLineOne',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineOne',
        converter: new TextTypeConverter()
    },
    {
        obj: 'delivery.recipient.postalAddress.addressLineTwo',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineTwo',
        converter: new TextTypeConverter()
    },
    {
        obj: 'delivery.recipient.postalAddress.addressLineThree',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineThree',
        converter: new TextTypeConverter()
    },
    {
        obj: 'delivery.recipient.postalAddress.city',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CityName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'delivery.recipient.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CountryID',
        converter: new CodeTypeConverter(COUNTRY_ID_CODES)
    },
    {
        obj: 'delivery.recipient.postalAddress.countrySubDivision',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName',
        converter: new TextTypeConverter()
    },
    {
        obj: 'delivery.deliveryDate',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ActualDeliverySupplyChainEvent.ram:OccurrenceDateTime',
        converter: new DateTimeTypeConverter()
    },
    {
        obj: 'referencedDocuments.advanceShippingNotice',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:DespatchAdviceReferencedDocument.ram:IssuerAssignedID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'paymentInformation.creditorReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:CreditorReferenceID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'paymentInformation.paymentReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PaymentReference',
        converter: new TextTypeConverter()
    },
    {
        obj: 'totals.taxCurrency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:TaxCurrencyCode',
        converter: new CodeTypeConverter(CURRENCY_CODES)
    },
    {
        obj: 'document.currency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode',
        converter: new CodeTypeConverter(CURRENCY_CODES)
    },
    {
        obj: 'paymentInformation.payee.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:ID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'paymentInformation.payee.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:GlobalID',
        converter: new IdTypeWithRequiredSchemeConverter(ISO6523_CODES)
    },
    {
        obj: 'paymentInformation.payee.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:Name',
        converter: new TextTypeConverter()
    },
    {
        obj: 'paymentInformation.payee.specifiedLegalOrganization',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:PayeeTradeParty.ram:SpecifiedLegalOrganization.ram:ID',
        converter: new IdTypeWithOptionalSchemeConverter(ISO6523_CODES)
    },
    {
        obj: 'paymentInformation.paymentMeans',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementPaymentMeans',
        converter: new ArrayConverter(new TradeSettlementPaymentMeansTypeConverter())
    },
    {
        obj: 'totals.taxBreakdown',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:ApplicableTradeTax',
        converter: new ArrayConverter(new TradeTaxTypeConverter())
    },
    {
        obj: 'paymentInformation.paymentPeriod.startDate',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:BillingSpecifiedPeriod.ram:StartDateTime',
        converter: new DateTimeTypeConverter()
    },
    {
        obj: 'paymentInformation.paymentPeriod.endDate',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:BillingSpecifiedPeriod.ram:EndDateTime',
        converter: new DateTimeTypeConverter()
    },
    {
        obj: 'totals.documentLevelAllowancesAndCharges',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeAllowanceCharge',
        converter: TradeAllowanceChargeTypeConverter.basicDocumentLevel()
    },
    {
        obj: 'paymentInformation.paymentTerms.description',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradePaymentTerms.ram:Description',
        converter: new TextTypeConverter()
    },
    {
        obj: 'paymentInformation.paymentTerms.dueDate',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradePaymentTerms.ram:DueDateDateTime',
        converter: new DateTimeTypeConverter()
    },
    {
        obj: 'paymentInformation.paymentTerms.directDebitMandateID',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradePaymentTerms.ram:DirectDebitMandateID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'totals.sumWithoutAllowancesAndCharges',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:LineTotalAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.chargeTotalAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:ChargeTotalAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.allowanceTotalAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:AllowanceTotalAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.netTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.taxTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount',
        converter: new ArrayConverter(new AmountTypeWithRequiredCurrencyConverter())
    },
    {
        obj: 'totals.grossTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:GrandTotalAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.prepaidAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TotalPrepaidAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.openAmount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:DuePayableAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'referencedDocuments.referencedInvoice',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceReferencedDocument',
        converter: new ArrayConverter(new ReferencedDocumentTypeConverter())
    },
    {
        obj: 'paymentInformation.specifiedTradeAccountingAccount',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:ReceivableSpecifiedTradeAccountingAccount.ram:ID',
        converter: new IdTypeConverter()
    }
]

export default mapping
