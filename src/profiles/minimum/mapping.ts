import { CodeTypeConverter } from '../../types/CodeTypeConverter.js'
import { CURRENCY_CODES, DOCUMENT_TYPE_CODES, ISO6523_CODES } from '../../types/codes.js'
import { SpecifiedTaxRegistrationsTypeConverter } from '../../types/ram/SpecifiedTaxRegistrationsTypeConverter.js'
import { AmountTypeConverter } from '../../types/udt/AmountTypeConverter.js'
import { AmountTypeWithRequiredCurrencyConverter } from '../../types/udt/AmountTypeWithRequiredCurrencyConverter.js'
import { DateTimeTypeConverter } from '../../types/udt/DateTimeTypeConverter.js'
import { IdTypeConverter } from '../../types/udt/IdTypeConverter.js'
import { IdTypeWithOptionalSchemeConverter } from '../../types/udt/IdTypeWithOptionalSchemeConverter.js'
import { TextTypeConverter } from '../../types/udt/TextTypeConverter.js'
import type { SimplifiedMappingItem } from '../convert.js'

const mapping: SimplifiedMappingItem[] = [
    //const mapping: MappingItem<MinimumProfile, MinimumProfileXml>[] = [
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
        obj: 'buyer.reference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerReference',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.specifiedLegalOrganization',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID',
        converter: new IdTypeWithOptionalSchemeConverter(ISO6523_CODES)
    },
    {
        obj: 'seller.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountryID',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.taxIdentification',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedTaxRegistration',
        converter: new SpecifiedTaxRegistrationsTypeConverter()
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
        obj: 'referencedDocuments.orderReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID',
        converter: new IdTypeConverter()
    },
    {
        obj: undefined,
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.#text',
        converter: undefined
    },
    {
        obj: 'document.currency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode',
        converter: new CodeTypeConverter(CURRENCY_CODES)
    },
    {
        obj: 'totals.netTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.taxTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount',
        converter: new AmountTypeWithRequiredCurrencyConverter()
    },
    {
        obj: 'totals.grossTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:GrandTotalAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.dueTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:DuePayableAmount',
        converter: new AmountTypeConverter()
    }
]

export default mapping
