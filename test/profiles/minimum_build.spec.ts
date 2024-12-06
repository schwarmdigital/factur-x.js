import fs from 'node:fs/promises'
import path from 'node:path'
import objectPath from 'object-path'
import { validateXML } from 'xmllint-wasm'

import { parseXML } from '../../src/core/xml.js'
import { FacturX } from '../../src/index.js'
import { isXmlMinimumProfile } from '../../src/profiles/minimum/minimum.guard.js'
import type { MinimumProfile } from '../../src/profiles/minimum/minimum.js'
import { CountryIDContentType, DOCUMENT_CODES } from '../../src/types/qdt.js'
import { CURRENCY_ID } from '../../src/types/udt.js'

const testObj: MinimumProfile = {
    meta: {
        businessProcessType: 'A1',
        guidelineSpecifiedDocumentContextParameter: 'urn:factur-x.eu:1p0:minimum'
    },
    document: {
        id: 'RE20248731',
        type: DOCUMENT_CODES.COMMERCIAL_INVOICE,
        dateOfIssue: new Date(2024, 10, 20)
    },
    seller: {
        name: 'ZUGFeRD AG',
        specifiedLegalOrganization: {
            id: 'ZUGFERDAG',
            schemeId: '0002'
        },
        postalAddress: {
            country: CountryIDContentType.GERMANY
        },
        taxIdentification: {
            localTaxId: '93815/08152',
            vatId: 'DE124356789'
        }
    },
    buyer: {
        reference: '991-1234512345-06',
        name: 'FACTURX AG',
        specifiedLegalOrganization: {
            id: 'FACTURXAG',
            schemeId: '0003'
        },
        orderReference: 'ORD123456'
    },
    monetarySummary: {
        currency: CURRENCY_ID.Euro,
        taxCurrency: CURRENCY_ID.Euro,
        sumWithoutTax: 200,
        tax: 38,
        grandTotal: 238,
        openAmount: 238
    }
}

let instance: FacturX
let xml: string
let parsedXml: object

beforeAll(async () => {
    instance = await FacturX.fromObject(testObj)
    xml = await instance.getXML()
    parsedXml = parseXML(xml)
})

describe('Create FacturX Instance from Object', () => {
    test('Builds XML with Correct Profile', () => {
        expect(isXmlMinimumProfile(parsedXml)).toBe(true)
    })

    test('Builds XML with Provided Values', () => {
        function valueAtXpath(key: string) {
            return objectPath.get(parsedXml, `rsm:CrossIndustryInvoice.${key}`)
        }

        expect(
            valueAtXpath(
                'rsm:ExchangedDocumentContext.ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID.#text'
            )
        ).toBe('A1')

        expect(
            valueAtXpath('rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID.#text')
        ).toBe('urn:factur-x.eu:1p0:minimum')

        expect(valueAtXpath('rsm:ExchangedDocument.ram:ID.#text')).toBe('RE20248731')

        expect(valueAtXpath('rsm:ExchangedDocument.ram:TypeCode.#text')).toBe('380')

        expect(valueAtXpath('rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString.#text')).toBe('20241120')

        expect(valueAtXpath('rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString.@format')).toBe('102')

        expect(
            valueAtXpath('rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerReference.#text')
        ).toBe('991-1234512345-06')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name.#text'
            )
        ).toBe('ZUGFeRD AG')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text'
            )
        ).toBe('ZUGFERDAG')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID'
            )
        ).toBe('0002')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountryID.#text'
            )
        ).toBe('DE')

        const sellerTaxArray = valueAtXpath(
            'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedTaxRegistration'
        )

        expect(Array.isArray(sellerTaxArray)).toBeTruthy()
        expect(sellerTaxArray.length).toBeTruthy()
        expect(sellerTaxArray[0]['ram:ID']?.['#text']).toBe('DE124356789')
        expect(sellerTaxArray[0]['ram:ID']?.['@schemeID']).toBe('VA')
        expect(sellerTaxArray[1]['ram:ID']?.['#text']).toBe('93815/08152')
        expect(sellerTaxArray[1]['ram:ID']?.['@schemeID']).toBe('FC')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:Name.#text'
            )
        ).toBe('FACTURX AG')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text'
            )
        ).toBe('FACTURXAG')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID'
            )
        ).toBe('0003')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID.#text'
            )
        ).toBe('ORD123456')

        expect(valueAtXpath('rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.#text')).toBe('')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode.#text'
            )
        ).toBe('EUR')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount.#text'
            )
        ).toBe('200.00')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount.#text'
            )
        ).toBe('38.00')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount.@currencyID'
            )
        ).toBe('EUR')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:GrandTotalAmount.#text'
            )
        ).toBe('238.00')

        expect(
            valueAtXpath(
                'rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:DuePayableAmount.#text'
            )
        ).toBe('238.00')
    })

    test('Builds Valid XML According to XSD Schema', async () => {
        const xsd = await fs.readFile(path.join(__dirname, 'xsd', 'minimum.xsd'), 'utf-8')

        // xs:import references need to be loaded into wasm
        const xsdImports = ['minimum_qdt.xsd', 'minimum_ram.xsd', 'minimum_udt.xsd']

        const preload = []

        for (const fileName of xsdImports) {
            const contents = await fs.readFile(path.join(__dirname, 'xsd', fileName), 'utf-8')
            preload.push({
                fileName,
                contents
            })
        }

        const result = await validateXML({
            xml: [
                {
                    fileName: 'e-invoice.xml',
                    contents: xml
                }
            ],
            schema: [xsd],
            preload
        })

        expect(result.valid).toBe(true)
    })
})
