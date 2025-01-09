import objectPath from 'object-path'

import Converter, { SchemeNames } from '..'
import { BasicWLProfile, isBasicWLProfile } from './basicwl_profile'
import { XmlBasicWLProfile, isXmlBasicWLProfile } from './basicwl_xml_profile'
import { basicWLMapping } from './mapping'

const XML_PATH_TO_TAX_CURRENCY =
    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:TaxCurrencyCode.#text'
const XML_PATH_TO_INVOICE_CURRENCY =
    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode.#text'
const XML_PATH_TO_TAX_TOTAL =
    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount'

export function checkTaxCurrencyMatch(xmlData: XmlBasicWLProfile, objectData: BasicWLProfile): void {
    // This function makes sure that the Tax Data is well formed and also corrects the parsed object in case of parsing edge cases
    const taxCurrency = objectPath.get(xmlData, XML_PATH_TO_TAX_CURRENCY)
    const invoiceCurrency = objectPath.get(xmlData, XML_PATH_TO_INVOICE_CURRENCY)
    let taxTotal = objectPath.get(xmlData, XML_PATH_TO_TAX_TOTAL)
    if (!taxTotal) return
    if (!invoiceCurrency) throw new Error('ValidationError: The InvoiceCurrencyCode must be defined')
    if (Array.isArray(taxTotal) && taxTotal.length === 1) {
        taxTotal = taxTotal[0]
    }
    if (!Array.isArray(taxTotal)) {
        const taxTotalCurrency = taxTotal['@currencyID']
        if (taxTotalCurrency === invoiceCurrency) return // TaxTotalAmount in Invoice Currency
        if (taxTotalCurrency === taxCurrency) {
            // In case it's the edge case, that only Tax in Tax Currency is given, correct this data in the object
            objectData.monetarySummary.taxTotalInTaxCurrency = objectData.monetarySummary.taxTotal
            objectData.monetarySummary.taxTotal = undefined
            return
        }
        throw new Error('Validation Error: TaxTotalAmount must be in Invoice Currency or Tax Currency')
    }

    // taxTotal is an array --> Check whether the currencys are matching
    if (!taxCurrency)
        throw new Error(
            'Validation Error: TaxCurrencyCode must be defined, when TaxTotalAmount in Tax Currency is defined'
        )

    if (taxTotal[0]['@currencyID'] === invoiceCurrency && taxTotal[1]['@currencyID'] === taxCurrency) {
        // Order is as expected
        return
    }

    if (taxTotal[0]['@currencyID'] === taxCurrency && taxTotal[1]['@currencyID'] === invoiceCurrency) {
        // Order is not as expected, but the data is correct
        const temp = objectData.monetarySummary.taxTotal
        objectData.monetarySummary.taxTotal = objectData.monetarySummary.taxTotalInTaxCurrency
        objectData.monetarySummary.taxTotalInTaxCurrency = temp
        return
    }

    // unexpected currency
    throw new Error('Validation Error: TaxTotalAmount must be in Invoice Currency or Tax Currency')
}

export function addCurrencyToTaxTotalAmount(objectData: BasicWLProfile, xmlData: XmlBasicWLProfile): void {
    /**This function adds the currency to the TaxTotalAmount in the xmlData after converting the object
     * Preconditions: Object conversion creates an array of TaxTotalAmounts, as soon as either taxTotal or taxTotalInTaxCurrency is defined
     * the Value of taxTotal is always stored as first item in the array the value of taxTotalInTaxCurrency is always stored as second item in the array
     */
    const taxTotal = objectData.monetarySummary.taxTotal
    const taxTotalInTaxCurrency = objectData.monetarySummary.taxTotalInTaxCurrency
    if (!taxTotal && !taxTotalInTaxCurrency) return
    if (taxTotal) objectPath.set(xmlData, `${XML_PATH_TO_TAX_TOTAL}.0.@currencyID`, objectData.monetarySummary.currency)
    if (taxTotalInTaxCurrency)
        objectPath.set(xmlData, `${XML_PATH_TO_TAX_TOTAL}.1.@currencyID`, objectData.monetarySummary.taxCurrency)
}

export default class BasicWLProfileConverter extends Converter<XmlBasicWLProfile, BasicWLProfile> {
    readonly _scheme = 'BASICWL' as SchemeNames

    constructor(input: XmlBasicWLProfile)
    constructor(input: BasicWLProfile)
    constructor(input: XmlBasicWLProfile | BasicWLProfile) {
        super(input, basicWLMapping)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isProperXMLScheme(xmlObject: any): xmlObject is XmlBasicWLProfile {
        return isXmlBasicWLProfile(xmlObject)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isProperObjectScheme(object: any): object is BasicWLProfile {
        return isBasicWLProfile(object)
    }

    protected afterXml2Obj(xmlData: XmlBasicWLProfile, objectData: BasicWLProfile): void {
        checkTaxCurrencyMatch(xmlData, objectData)
    }

    protected afterObj2Xml(objectData: BasicWLProfile, xmlData: XmlBasicWLProfile): void {
        addCurrencyToTaxTotalAmount(objectData, xmlData)
    }
}
