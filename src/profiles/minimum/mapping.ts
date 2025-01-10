import { TextTypeConverter } from '../../types/udt/TextTypeConverter.js'
import {
    AmountTypeConverter,
    DateTimeTypeConverter,
    IDTypeConverter,
    IdTypeWithSchemeConverter
} from '../../types/udt/index.js'
import type { ComplexMappingItem } from '../convert.js'
import type { MinimumProfile } from './MinimumProfile.js'
import { MinimumProfileXml } from './MinimumProfileXml.js'

const mapping: ComplexMappingItem<MinimumProfile, MinimumProfileXml>[] = [
    {
        obj: 'meta.businessProcessType',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID',
        type: 'string', // @deprecated
        converter: new IDTypeConverter()
    },
    {
        obj: 'meta.guidelineSpecifiedDocumentContextParameter',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID',
        type: 'string', // @deprecated
        converter: new IDTypeConverter()
    },
    {
        obj: 'document.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:ID',
        type: 'string', // @deprecated
        converter: new IDTypeConverter()
    },
    {
        obj: 'document.type',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:TypeCode',
        type: 'string',
        converter: new TextTypeConverter()
    },
    {
        obj: 'document.currency',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode',
        type: 'string',
        converter: new TextTypeConverter()
    },
    {
        obj: 'document.dateOfIssue',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString',
        type: 'date',
        converter: new DateTimeTypeConverter()
    },
    {
        obj: 'buyer.reference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerReference',
        type: 'string',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name',
        type: 'string',
        converter: new TextTypeConverter()
    },
    {
        obj: 'seller.specifiedLegalOrganization',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID',
        type: 'string', // @deprecated
        converter: new IdTypeWithSchemeConverter()
    },
    {
        obj: 'seller.postalAddress.country',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountryID',
        type: 'string',
        converter: new TextTypeConverter()
    },
    // TODO: Tax Identifcation
    // {
    //     obj: 'seller.taxIdentification',
    //     xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedTaxRegistration',
    //     type: 'taxid'
    // },
    {
        obj: 'buyer.name',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:Name',
        type: 'string',
        converter: new TextTypeConverter()
    },
    {
        obj: 'buyer.specifiedLegalOrganization',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID',
        type: 'string', // @deprecated
        converter: new IdTypeWithSchemeConverter()
    },
    {
        obj: 'buyer.orderReference',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID',
        type: 'string', // @deprecated
        converter: new IDTypeConverter()
    },
    {
        obj: 'totals.netTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount',
        type: 'number', // @deprecated
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.taxTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount',
        type: 'number', // @deprecated
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.grossTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:GrandTotalAmount',
        type: 'number', // @deprecated
        converter: new AmountTypeConverter()
    },
    {
        obj: 'totals.dueTotal',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:DuePayableAmount',
        type: 'number', // @deprecated
        converter: new AmountTypeConverter()
    }
]

export default mapping
