import { SpecifiedTaxRegistrationsTypeConverter } from '../../types/ram/SpecifiedTaxRegistrationsTypeConverter.js'
import { TextTypeConverter } from '../../types/udt/TextTypeConverter.js'
import {
    AmountTypeConverter,
    DateTimeTypeConverter,
    IdTypeConverter,
    IdTypeWithSchemeConverter
} from '../../types/udt/index.js'
import type { MappingItem } from '../convert.js'
import type { MinimumProfile } from './MinimumProfile.js'
import { MinimumProfileXml } from './MinimumProfileXml.js'

const mapping: MappingItem<MinimumProfile, MinimumProfileXml>[] = [
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
        converter: new TextTypeConverter()
    },
    {
        obj: 'document.currency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode',
        converter: new TextTypeConverter()
    },
    {
        obj: 'document.dateOfIssue',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString',
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
        converter: new IdTypeWithSchemeConverter()
    },
    {
        obj: 'seller.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountryID',
        converter: new TextTypeConverter()
    },
    // TODO: Tax Identifcation
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
        converter: new IdTypeWithSchemeConverter()
    },
    {
        obj: 'buyer.orderReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID',
        converter: new IdTypeConverter()
    },
    {
        obj: 'totals.netTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount',
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.taxTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount',
        converter: new AmountTypeConverter()
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
