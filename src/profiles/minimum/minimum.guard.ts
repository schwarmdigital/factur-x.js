/*
 * Generated type guards for "minimum.ts".
 * WARNING: Do not manually change this file.
 */
import { XmlMinimumProfile, MinimumProfile } from "./minimum";
import { DOCUMENT_CODES, CountryIDContentType } from "../../types/qdt/types";
import { CURRENCY_ID } from "../../types/udt/types";

export function isXmlMinimumProfile(obj: unknown): obj is XmlMinimumProfile {
    const typedObj = obj as XmlMinimumProfile
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typedObj["?xml"] !== null &&
            typeof typedObj["?xml"] === "object" ||
            typeof typedObj["?xml"] === "function") &&
        typedObj["?xml"]["@version"] === "1.0" &&
        typedObj["?xml"]["@encoding"] === "UTF-8" &&
        (typedObj["rsm:CrossIndustryInvoice"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"] === "function") &&
        (typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"] === "undefined" ||
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"] === "function") &&
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"]["ram:ID"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"]["ram:ID"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"]["ram:ID"] === "function") &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"]["ram:ID"]["#text"] === "string") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"]["ram:ID"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"]["ram:ID"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"]["ram:ID"] === "function") &&
        typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"]["ram:ID"]["#text"] === "urn:factur-x.eu:1p0:minimum" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:ID"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:ID"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:ID"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:ID"]["#text"] === "string" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:TypeCode"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:TypeCode"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:TypeCode"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:TypeCode"]["#text"] === "string" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]["udt:DateTimeString"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]["udt:DateTimeString"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]["udt:DateTimeString"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]["udt:DateTimeString"]["#text"] === "string" &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]["udt:DateTimeString"]["@format"] === "string" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"] === "function") &&
        (typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerReference"] === "undefined" ||
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerReference"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerReference"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerReference"] === "function") &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerReference"]["#text"] === "string") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:Name"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:Name"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:Name"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:Name"]["#text"] === "string" &&
        (typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"] === "undefined" ||
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"] === "function") &&
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"] === "function") &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["#text"] === "string" &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["@schemeID"] === "string") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"]["ram:CountryID"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"]["ram:CountryID"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"]["ram:CountryID"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"]["ram:CountryID"]["#text"] === "string" &&
        Array.isArray(typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"]) &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][0] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][0] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][0] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][0]["ram:ID"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][0]["ram:ID"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][0]["ram:ID"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][0]["ram:ID"]["#text"] === "string" &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][0]["ram:ID"]["@schemeID"] === "string" &&
        (typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1] === "undefined" ||
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1] === "function") &&
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1]["ram:ID"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1]["ram:ID"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1]["ram:ID"] === "function") &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1]["ram:ID"]["#text"] === "string" &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"][1]["ram:ID"]["@schemeID"] === "string") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:Name"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:Name"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:Name"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:Name"]["#text"] === "string" &&
        (typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"] === "undefined" ||
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"] === "function") &&
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"] === "function") &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["#text"] === "string" &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["@schemeID"] === "string") &&
        (typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"] === "undefined" ||
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"] === "function") &&
            (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"]["ram:IssuerAssignedID"] !== null &&
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"]["ram:IssuerAssignedID"] === "object" ||
                typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"]["ram:IssuerAssignedID"] === "function") &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"]["ram:IssuerAssignedID"]["#text"] === "string") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeDelivery"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeDelivery"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeDelivery"] === "function") &&
        typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeDelivery"]["#text"] === "" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:InvoiceCurrencyCode"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:InvoiceCurrencyCode"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:InvoiceCurrencyCode"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:InvoiceCurrencyCode"]["#text"] === "string" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"] === "function") &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxBasisTotalAmount"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxBasisTotalAmount"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxBasisTotalAmount"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxBasisTotalAmount"]["#text"] === "string" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxTotalAmount"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxTotalAmount"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxTotalAmount"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxTotalAmount"]["#text"] === "string" &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxTotalAmount"]["@currencyID"] === "string" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:GrandTotalAmount"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:GrandTotalAmount"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:GrandTotalAmount"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:GrandTotalAmount"]["#text"] === "string" &&
        (typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:DuePayableAmount"] !== null &&
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:DuePayableAmount"] === "object" ||
            typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:DuePayableAmount"] === "function") &&
        typeof typedObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:DuePayableAmount"]["#text"] === "string" &&
        typedObj["rsm:CrossIndustryInvoice"]["@xmlns:rsm"] === "urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100" &&
        typedObj["rsm:CrossIndustryInvoice"]["@xmlns:qdt"] === "urn:un:unece:uncefact:data:standard:QualifiedDataType:100" &&
        typedObj["rsm:CrossIndustryInvoice"]["@xmlns:ram"] === "urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100" &&
        typedObj["rsm:CrossIndustryInvoice"]["@xmlns:xs"] === "http://www.w3.org/2001/XMLSchema" &&
        typedObj["rsm:CrossIndustryInvoice"]["@xmlns:udt"] === "urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100"
    )
}

export function isMinimumProfile(obj: unknown): obj is MinimumProfile {
    const typedObj = obj as MinimumProfile
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typedObj["meta"] !== null &&
            typeof typedObj["meta"] === "object" ||
            typeof typedObj["meta"] === "function") &&
        (typeof typedObj["meta"]["businessProcessType"] === "undefined" ||
            typeof typedObj["meta"]["businessProcessType"] === "string") &&
        typedObj["meta"]["guidelineSpecifiedDocumentContextParameter"] === "urn:factur-x.eu:1p0:minimum" &&
        (typedObj["document"] !== null &&
            typeof typedObj["document"] === "object" ||
            typeof typedObj["document"] === "function") &&
        typeof typedObj["document"]["id"] === "string" &&
        (typedObj["document"]["type"] === DOCUMENT_CODES.REQUEST_FOR_PAYMENT ||
            typedObj["document"]["type"] === DOCUMENT_CODES.DEBIT_NOTE_RELATED_TO_GOODS_OR_SERVICES ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CREDIT_NOTE_RELATED_TO_GOODS_OR_SERVICES ||
            typedObj["document"]["type"] === DOCUMENT_CODES.METERED_SERVICES_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CREDIT_NOTE_RELATED_TO_FINANCIAL_ADJUSTMENTS ||
            typedObj["document"]["type"] === DOCUMENT_CODES.DEBIT_NOTE_RELATED_TO_FINANCIAL_ADJUSTMENTS ||
            typedObj["document"]["type"] === DOCUMENT_CODES.TAX_NOTIFICATION ||
            typedObj["document"]["type"] === DOCUMENT_CODES.INVOICING_DATA_SHEET ||
            typedObj["document"]["type"] === DOCUMENT_CODES.DIRECT_PAYMENT_VALUATION ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PROVISIONAL_PAYMENT_VALUATION ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PAYMENT_VALUATION ||
            typedObj["document"]["type"] === DOCUMENT_CODES.INTERIM_APPLICATION_FOR_PAYMENT ||
            typedObj["document"]["type"] === DOCUMENT_CODES.FINAL_PAYMENT_REQUEST_BASED_ON_COMPLETION_OF_WORK ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PAYMENT_REQUEST_FOR_COMPLETED_UNITS ||
            typedObj["document"]["type"] === DOCUMENT_CODES.SELF_BILLED_CREDIT_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CONSOLIDATED_CREDIT_NOTE___GOODS_AND_SERVICES ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PRICE_VARIATION_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CREDIT_NOTE_FOR_PRICE_VARIATION ||
            typedObj["document"]["type"] === DOCUMENT_CODES.DELCREDERE_CREDIT_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PROFORMA_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PARTIAL_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.COMMERCIAL_INVOICE_WHICH_INCLUDES_A_PACKING_LIST ||
            typedObj["document"]["type"] === DOCUMENT_CODES.COMMERCIAL_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CREDIT_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.COMMISSION_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.DEBIT_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CORRECTED_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CONSOLIDATED_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PREPAYMENT_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.HIRE_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.TAX_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.SELF_BILLED_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.DELCREDERE_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.FACTORED_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.LEASE_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CONSIGNMENT_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.FACTORED_CREDIT_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.OPTICAL_CHARACTER_READING_OCR_PAYMENT_CREDIT_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.DEBIT_ADVICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.REVERSAL_OF_DEBIT ||
            typedObj["document"]["type"] === DOCUMENT_CODES.REVERSAL_OF_CREDIT ||
            typedObj["document"]["type"] === DOCUMENT_CODES.SELF_BILLED_DEBIT_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.FORWARDERS_CREDIT_NOTE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.FORWARDERS_INVOICE_DISCREPANCY_REPORT ||
            typedObj["document"]["type"] === DOCUMENT_CODES.INSURERS_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.FORWARDERS_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PORT_CHARGES_DOCUMENTS ||
            typedObj["document"]["type"] === DOCUMENT_CODES.INVOICE_INFORMATION_FOR_ACCOUNTING_PURPOSES ||
            typedObj["document"]["type"] === DOCUMENT_CODES.FREIGHT_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CLAIM_NOTIFICATION ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CONSULAR_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PARTIAL_CONSTRUCTION_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.PARTIAL_FINAL_CONSTRUCTION_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.FINAL_CONSTRUCTION_INVOICE ||
            typedObj["document"]["type"] === DOCUMENT_CODES.CUSTOMS_INVOICE) &&
        typedObj["document"]["dateOfIssue"] instanceof Date &&
        (typedObj["seller"] !== null &&
            typeof typedObj["seller"] === "object" ||
            typeof typedObj["seller"] === "function") &&
        typeof typedObj["seller"]["name"] === "string" &&
        (typeof typedObj["seller"]["specifiedLegalOrganization"] === "undefined" ||
            (typedObj["seller"]["specifiedLegalOrganization"] !== null &&
                typeof typedObj["seller"]["specifiedLegalOrganization"] === "object" ||
                typeof typedObj["seller"]["specifiedLegalOrganization"] === "function") &&
            typeof typedObj["seller"]["specifiedLegalOrganization"]["id"] === "string" &&
            typeof typedObj["seller"]["specifiedLegalOrganization"]["schemeId"] === "string") &&
        (typedObj["seller"]["postalAddress"] !== null &&
            typeof typedObj["seller"]["postalAddress"] === "object" ||
            typeof typedObj["seller"]["postalAddress"] === "function") &&
        (typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ANDORRA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.UNITED_ARAB_EMIRATES ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.AFGHANISTAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ANTIGUA_AND_BARBUDA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ANGUILLA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ALBANIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ARMENIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ANGOLA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ANTARCTICA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ARGENTINA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.AMERICAN_SAMOA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.AUSTRIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.AUSTRALIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ARUBA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ALAND_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.AZERBAIJAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BOSNIA_AND_HERZEGOVINA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BARBADOS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BANGLADESH ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BELGIUM ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BURKINA_FASO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BULGARIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BAHRAIN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BURUNDI ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BENIN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAINT_BARTHELEMY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BERMUDA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BRUNEI_DARUSSALAM ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BOLIVIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BONAIRE_SINT_EUSTATIUS_AND_SABA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BRAZIL ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BAHAMAS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BHUTAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BOUVET_ISLAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BOTSWANA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BELARUS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BELIZE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CANADA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.COCOS_KEELING_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CENTRAL_AFRICAN_REPUBLIC ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CONGO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SWITZERLAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.COTE_D_IVOIRE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.COOK_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CHILE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CAMEROON ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CHINA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.COLOMBIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.COSTA_RICA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CUBA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CABO_VERDE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CURACAO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CHRISTMAS_ISLAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CYPRUS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CZECHIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GERMANY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.DJIBOUTI ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.DENMARK ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.DOMINICA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.DOMINICAN_REPUBLIC ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ALGERIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ECUADOR ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ESTONIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.EGYPT ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.WESTERN_SAHARA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ERITREA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SPAIN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ETHIOPIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.FINLAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.FIJI ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.FALKLAND_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MICRONESIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.FAROE_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.FRANCE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GABON ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GRENADA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GEORGIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.FRENCH_GUIANA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GUERNSEY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GHANA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GIBRALTAR ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GREENLAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GAMBIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GUINEA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GUADELOUPE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.EQUATORIAL_GUINEA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GREECE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GUATEMALA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GUAM ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GUINEA_BISSAU ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.GUYANA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.HONG_KONG ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.HEARD_ISLAND_AND_MCDONALD_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.HONDURAS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CROATIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.HAITI ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.HUNGARY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.INDONESIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.IRELAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ISRAEL ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ISLE_OF_MAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.INDIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.BRITISH_INDIAN_OCEAN_TERRITORY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.IRAQ ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.IRAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ICELAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ITALY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.JERSEY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.JAMAICA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.JORDAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.JAPAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.KENYA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.KYRGYZSTAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CAMBODIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.KIRIBATI ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.COMOROS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAINT_KITTS_AND_NEVIS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.THE_DEMOCRATIC_PEOPLES_REPUBLIC_OF_KOREA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.THE_REPUBLIC_OF_KOREA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.KUWAIT ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CAYMAN_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.KAZAKHSTAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LAO_PEOPLES_DEMOCRATIC_REPUBLIC ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LEBANON ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAINT_LUCIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LIECHTENSTEIN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SRI_LANKA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LIBERIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LESOTHO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LITHUANIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LUXEMBOURG ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LATVIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.LIBYA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MOROCCO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MONACO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MOLDOVA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MONTENEGRO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAINT_MARTIN_FRENCH_PART ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MADAGASCAR ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MARSHALL_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NORTH_MACEDONIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MALI ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MYANMAR ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MONGOLIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MACAO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NORTHERN_MARIANA_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MARTINIQUE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MAURITANIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MONTSERRAT ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MALTA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MAURITIUS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MALDIVES ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MALAWI ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MEXICO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MALAYSIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MOZAMBIQUE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NAMIBIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NEW_CALEDONIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NIGER ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NORFOLK_ISLAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NIGERIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NICARAGUA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NETHERLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NORWAY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NEPAL ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NAURU ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NIUE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.NEW_ZEALAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.OMAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PANAMA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PERU ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.FRENCH_POLYNESIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PAPUA_NEW_GUINEA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PHILIPPINES ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PAKISTAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.POLAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAINT_PIERRE_AND_MIQUELON ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PITCAIRN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PUERTO_RICO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PALESTINE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PORTUGAL ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PALAU ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.PARAGUAY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.QATAR ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.REUNION ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ROMANIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SERBIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.RUSSIAN_FEDERATION ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.RWANDA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAUDI_ARABIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SOLOMON_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SEYCHELLES ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SUDAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SWEDEN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SINGAPORE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAINT_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SLOVENIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SVALBARD_AND_JAN_MAYEN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SLOVAKIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SIERRA_LEONE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAN_MARINO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SENEGAL ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SOMALIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SURINAME ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SOUTH_SUDAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAO_TOME_AND_PRINCIPE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.EL_SALVADOR ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SINT_MAARTEN_DUTCH_PART ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SYRIAN_ARAB_REPUBLIC ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ESWATINI ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TURKS_AND_CAICOS_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.CHAD ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.FRENCH_SOUTHERN_TERRITORIES ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TOGO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.THAILAND ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TAJIKISTAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TOKELAU ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TIMOR_LESTE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TURKMENISTAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TUNISIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TONGA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TURKEY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TRINIDAD_AND_TOBAGO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TUVALU ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TAIWAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.TANZANIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.UKRAINE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.UGANDA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.UNITED_STATES_MINOR_OUTLYING_ISLANDS ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.UNITED_STATES_OF_AMERICA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.URUGUAY ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.UZBEKISTAN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.HOLY_SEE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAINT_VINCENT_AND_THE_GRENADINES ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.VENEZUELA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.VIRGIN_ISLANDS_BRITISH ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.VIRGIN_ISLANDS_US ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.VIET_NAM ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.VANUATU ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.WALLIS_AND_FUTUNA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SAMOA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.YEMEN ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.MAYOTTE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.SOUTH_AFRICA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ZAMBIA ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.ZIMBABWE ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.KOSOVO ||
            typedObj["seller"]["postalAddress"]["country"] === CountryIDContentType.UNITED_KINGDOM_NORTHERN_IRELAND) &&
        ((typedObj["seller"]["taxIdentification"] !== null &&
            typeof typedObj["seller"]["taxIdentification"] === "object" ||
            typeof typedObj["seller"]["taxIdentification"] === "function") &&
            typeof typedObj["seller"]["taxIdentification"]["vatId"] === "string" &&
            (typeof typedObj["seller"]["taxIdentification"]["localTaxId"] === "undefined" ||
                typeof typedObj["seller"]["taxIdentification"]["localTaxId"] === "string") ||
            (typedObj["seller"]["taxIdentification"] !== null &&
                typeof typedObj["seller"]["taxIdentification"] === "object" ||
                typeof typedObj["seller"]["taxIdentification"] === "function") &&
            (typeof typedObj["seller"]["taxIdentification"]["vatId"] === "undefined" ||
                typeof typedObj["seller"]["taxIdentification"]["vatId"] === "string") &&
            typeof typedObj["seller"]["taxIdentification"]["localTaxId"] === "string") &&
        (typedObj["buyer"] !== null &&
            typeof typedObj["buyer"] === "object" ||
            typeof typedObj["buyer"] === "function") &&
        (typeof typedObj["buyer"]["reference"] === "undefined" ||
            typeof typedObj["buyer"]["reference"] === "string") &&
        typeof typedObj["buyer"]["name"] === "string" &&
        (typeof typedObj["buyer"]["specifiedLegalOrganization"] === "undefined" ||
            (typedObj["buyer"]["specifiedLegalOrganization"] !== null &&
                typeof typedObj["buyer"]["specifiedLegalOrganization"] === "object" ||
                typeof typedObj["buyer"]["specifiedLegalOrganization"] === "function") &&
            typeof typedObj["buyer"]["specifiedLegalOrganization"]["id"] === "string" &&
            typeof typedObj["buyer"]["specifiedLegalOrganization"]["schemeId"] === "string") &&
        (typeof typedObj["buyer"]["orderReference"] === "undefined" ||
            typeof typedObj["buyer"]["orderReference"] === "string") &&
        (typedObj["monetarySummary"] !== null &&
            typeof typedObj["monetarySummary"] === "object" ||
            typeof typedObj["monetarySummary"] === "function") &&
        (typedObj["monetarySummary"]["currency"] === CURRENCY_ID.UAEDirham ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Afghani ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Lek ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ArmenianDram ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NetherlandsAntilleanGuilder ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Kwanza ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ArgentinePeso ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.AustralianDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ArubanFlorin ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.AzerbaijanManat ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ConvertibleMark ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BarbadosDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Taka ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BulgarianLev ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BahrainiDinar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BurundiFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BermudianDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BruneiDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Boliviano ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Mvdol ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BrazilianReal ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BahamianDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Ngultrum ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Pula ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BelarusianRuble ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BelizeDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CanadianDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CongoleseFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.WIREuro ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SwissFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.WIRFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.UnidaddeFomento ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ChileanPeso ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.YuanRenminbi ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ColombianPeso ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.UnidaddeValorReal ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CostaRicanColon ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.PesoConvertible ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CubanPeso ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CaboVerdeEscudo ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CzechKoruna ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.DjiboutiFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.DanishKrone ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.DominicanPeso ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.AlgerianDinar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.EgyptianPound ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Nakfa ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.EthiopianBirr ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Euro ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.FijiDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.FalklandIslandsPound ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.PoundSterling ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Lari ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.GhanaCedi ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.GibraltarPound ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Dalasi ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.GuineanFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Quetzal ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.GuyanaDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.HongKongDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Lempira ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Kuna ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Gourde ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Forint ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Rupiah ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NewIsraeliSheqel ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.IndianRupee ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.IraqiDinar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.IranianRial ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.IcelandKrona ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.JamaicanDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.JordanianDinar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Yen ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.KenyanShilling ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Som ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Riel ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ComorianFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NorthKoreanWon ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Won ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.KuwaitiDinar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CaymanIslandsDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Tenge ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.LaoKip ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.LebanesePound ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SriLankaRupee ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.LiberianDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Loti ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.LibyanDinar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MoroccanDirham ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MoldovanLeu ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MalagasyAriary ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Denar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Kyat ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Tugrik ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Pataca ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Ouguiya ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MauritiusRupee ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Rufiyaa ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MalawiKwacha ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MexicanPeso ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MexicanUnidaddeInversion ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MalaysianRinggit ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.MozambiqueMetical ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NamibiaDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Naira ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CordobaOro ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NorwegianKrone ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NepaleseRupee ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NewZealandDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.RialOmani ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Balboa ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Sol ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Kina ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.PhilippinePeso ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.PakistanRupee ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Zloty ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Guarani ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.QatariRial ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.RomanianLeu ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SerbianDinar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.RussianRuble ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.RwandaFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SaudiRiyal ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SolomonIslandsDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SeychellesRupee ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SudanesePound ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SwedishKrona ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SingaporeDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SaintHelenaPound ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Leone ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SomaliShilling ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SurinamDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SouthSudanesePound ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Dobra ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ElSalvadorColon ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SyrianPound ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Lilangeni ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Baht ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Somoni ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.TurkmenistanNewManat ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.TunisianDinar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.PaAnga ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.TurkishLira ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.TrinidadandTobagoDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NewTaiwanDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.TanzanianShilling ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Hryvnia ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.UgandaShilling ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.USDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.USDollarNextday ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.UruguayPesoenUnidadesIndexadas ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.PesoUruguayo ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.UnidadPrevisional ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.UzbekistanSum ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BolívarSoberano ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Dong ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Vatu ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Tala ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CFAFrancBEAC ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Silver ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Gold ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BondMarketsUnitEuropeanCompositeUnit ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BondMarketsUnitEuropeanMonetaryUnit ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BondMarketsUnitEuropeanUnitofAccount9 ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.BondMarketsUnitEuropeanUnitofAccount17 ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.EastCaribbeanDollar ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.SDR ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CFAFrancBCEAO ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Palladium ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.CFPFranc ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Platinum ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Sucre ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.TestingCode ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ADBUnitofAccount ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.NoCurrencyInvolved ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.YemeniRial ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.Rand ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ZambianKwacha ||
            typedObj["monetarySummary"]["currency"] === CURRENCY_ID.ZimbabweDollar) &&
        (typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.UAEDirham ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Afghani ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Lek ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ArmenianDram ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NetherlandsAntilleanGuilder ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Kwanza ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ArgentinePeso ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.AustralianDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ArubanFlorin ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.AzerbaijanManat ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ConvertibleMark ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BarbadosDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Taka ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BulgarianLev ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BahrainiDinar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BurundiFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BermudianDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BruneiDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Boliviano ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Mvdol ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BrazilianReal ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BahamianDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Ngultrum ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Pula ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BelarusianRuble ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BelizeDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CanadianDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CongoleseFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.WIREuro ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SwissFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.WIRFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.UnidaddeFomento ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ChileanPeso ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.YuanRenminbi ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ColombianPeso ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.UnidaddeValorReal ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CostaRicanColon ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.PesoConvertible ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CubanPeso ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CaboVerdeEscudo ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CzechKoruna ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.DjiboutiFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.DanishKrone ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.DominicanPeso ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.AlgerianDinar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.EgyptianPound ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Nakfa ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.EthiopianBirr ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Euro ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.FijiDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.FalklandIslandsPound ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.PoundSterling ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Lari ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.GhanaCedi ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.GibraltarPound ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Dalasi ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.GuineanFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Quetzal ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.GuyanaDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.HongKongDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Lempira ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Kuna ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Gourde ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Forint ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Rupiah ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NewIsraeliSheqel ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.IndianRupee ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.IraqiDinar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.IranianRial ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.IcelandKrona ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.JamaicanDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.JordanianDinar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Yen ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.KenyanShilling ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Som ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Riel ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ComorianFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NorthKoreanWon ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Won ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.KuwaitiDinar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CaymanIslandsDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Tenge ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.LaoKip ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.LebanesePound ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SriLankaRupee ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.LiberianDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Loti ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.LibyanDinar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MoroccanDirham ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MoldovanLeu ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MalagasyAriary ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Denar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Kyat ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Tugrik ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Pataca ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Ouguiya ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MauritiusRupee ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Rufiyaa ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MalawiKwacha ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MexicanPeso ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MexicanUnidaddeInversion ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MalaysianRinggit ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.MozambiqueMetical ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NamibiaDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Naira ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CordobaOro ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NorwegianKrone ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NepaleseRupee ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NewZealandDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.RialOmani ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Balboa ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Sol ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Kina ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.PhilippinePeso ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.PakistanRupee ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Zloty ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Guarani ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.QatariRial ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.RomanianLeu ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SerbianDinar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.RussianRuble ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.RwandaFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SaudiRiyal ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SolomonIslandsDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SeychellesRupee ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SudanesePound ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SwedishKrona ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SingaporeDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SaintHelenaPound ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Leone ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SomaliShilling ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SurinamDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SouthSudanesePound ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Dobra ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ElSalvadorColon ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SyrianPound ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Lilangeni ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Baht ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Somoni ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.TurkmenistanNewManat ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.TunisianDinar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.PaAnga ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.TurkishLira ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.TrinidadandTobagoDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NewTaiwanDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.TanzanianShilling ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Hryvnia ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.UgandaShilling ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.USDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.USDollarNextday ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.UruguayPesoenUnidadesIndexadas ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.PesoUruguayo ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.UnidadPrevisional ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.UzbekistanSum ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BolívarSoberano ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Dong ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Vatu ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Tala ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CFAFrancBEAC ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Silver ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Gold ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BondMarketsUnitEuropeanCompositeUnit ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BondMarketsUnitEuropeanMonetaryUnit ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BondMarketsUnitEuropeanUnitofAccount9 ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.BondMarketsUnitEuropeanUnitofAccount17 ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.EastCaribbeanDollar ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.SDR ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CFAFrancBCEAO ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Palladium ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.CFPFranc ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Platinum ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Sucre ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.TestingCode ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ADBUnitofAccount ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.NoCurrencyInvolved ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.YemeniRial ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.Rand ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ZambianKwacha ||
            typedObj["monetarySummary"]["taxCurrency"] === CURRENCY_ID.ZimbabweDollar) &&
        typeof typedObj["monetarySummary"]["sumWithoutTax"] === "number" &&
        typeof typedObj["monetarySummary"]["tax"] === "number" &&
        typeof typedObj["monetarySummary"]["grandTotal"] === "number" &&
        typeof typedObj["monetarySummary"]["openAmount"] === "number"
    )
}
