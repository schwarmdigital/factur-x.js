import fs from 'node:fs/promises'
import path from 'node:path'
import objectPath from 'object-path'
import { validateXML } from 'xmllint-wasm'

import { parseXML } from '../src/core/xml.js'
import { FacturX } from '../src/index.js'
import { isXmlMinimumProfile } from '../src/profiles/minimum/minimum.guard.js'
import { MinimumProfile, XmlMinimumProfile } from '../src/profiles/minimum/minimum.js'
import { CountryIDContentType, DOCUMENT_CODES } from '../src/types/qdt/types.js'
import { CURRENCY_ID } from '../src/types/udt/types.js'

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

let xmlObject: XmlMinimumProfile
let facturX: FacturX

beforeAll(async () => {
    facturX = new FacturX(testObj, 'MINIMUM')

    const xml = await facturX.getXML()
    const obj = parseXML(xml)

    if (!isXmlMinimumProfile(obj)) throw new Error('Conversion to XML Obj failed')

    xmlObject = obj
})

describe('7.2.2 - ExchangedDocumentContext - Page 43/85 f.', () => {
    describe('BG-2 - PROCESS CONTROL', () => {
        test('BT-23 - Business process type', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:BusinessProcessSpecifiedDocumentContextParameter.ram:ID.#text'
                )
            ).toBe('A1')
        })
        test('BT-24 - Specification identifier', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID.#text'
                )
            ).toBe('urn:factur-x.eu:1p0:minimum')
        })
    })
})

describe('7.2.2 - ExchangedDocument - Page 44/85.', () => {
    test('BT-1 - Invoice number', () => {
        expect(objectPath.get(xmlObject, 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:ID.#text')).toBe(
            'RE20248731'
        )
    })

    test('BT-3 - Type Code', () => {
        expect(objectPath.get(xmlObject, 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:TypeCode.#text')).toBe(
            '380'
        )
    })
    test('BT-2 - Invoice issue date', () => {
        expect(
            objectPath.get(
                xmlObject,
                'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString.#text'
            )
        ).toBe('20241120')
        expect(
            objectPath.get(
                xmlObject,
                'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString.@format'
            )
        ).toBe('102')
    })
})

describe('7.3.3 - SupplyChainTradeTransaction - Page 44/85 ff.', () => {
    describe('7.3.3.1 - ApplicableHeaderTradeAgreement', () => {
        test('BT-10-00 - Buyer reference', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerReference.#text'
                )
            ).toBe('991-1234512345-06')
        })
        describe('BG-4 - SELLER', () => {
            test('BT-27 - Seller name', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name.#text'
                    )
                ).toBe('ZUGFeRD AG')
            })
            test('BT-30-00 - Seller legal registration', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text'
                    )
                ).toBe('ZUGFERDAG')
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID'
                    )
                ).toBe('0002')
            })
            describe('BG-5 - SELLER POSTAL ADDRESS', () => {
                test('BT-40 - Seller country code', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountryID.#text'
                        )
                    ).toBe('DE')
                })
            })
            test('BT-31-00 - Seller VAT identifier', () => {
                const sellerTaxArray = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedTaxRegistration'
                )
                expect(Array.isArray(sellerTaxArray)).toBeTruthy()
                expect(sellerTaxArray.length).toBe(2)
                expect(sellerTaxArray[0]['ram:ID']?.['#text']).toBe('DE124356789')
                expect(sellerTaxArray[0]['ram:ID']?.['@schemeID']).toBe('VA')
                expect(sellerTaxArray[1]['ram:ID']?.['#text']).toBe('93815/08152')
                expect(sellerTaxArray[1]['ram:ID']?.['@schemeID']).toBe('FC')
            })
        })
        describe('BG-5 - BUYER', () => {
            test('BT-44 - Buyer name', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:Name.#text'
                    )
                ).toBe('FACTURX AG')
            })
            test('BT-47-00 - Buyer legal registration', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text'
                    )
                ).toBe('FACTURXAG')
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID'
                    )
                ).toBe('0003')
            })
        })
        test('BT-13-00 - BuyerOrderReferencedDocument', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID.#text'
                )
            ).toBe('ORD123456')
        })
    })
    describe('BG-13-00 ApplicableHeaderTradeDelivery', () => {
        test('BG-13-00 Empty Tag', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.#text'
                )
            ).toBe('')
        })
    })

    describe('BG-19 ApplicableHeaderTradeSettlement', () => {
        test('BT-5 - InvoiceCurrencyCode', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceCurrencyCode.#text'
                )
            ).toBe('EUR')
        })

        describe('7.3.3.3 - ApplicableHeaderTradeSettlement', () => {
            describe('BG-22 SpecifiedTradeSettlementHeaderMonetarySummation', () => {
                test('BT-109 - TaxBasisTotalAmount', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount.#text'
                        )
                    ).toBe('200.00')
                })
                test('BT-110 - TaxTotalAmount', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount.#text'
                        )
                    ).toBe('38.00')
                })
                test('BT-110-0 - TaxCurrencyCode', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount.@currencyID'
                        )
                    ).toBe('EUR')
                })
                test('BT-112 - GrandTotalAmount', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:GrandTotalAmount.#text'
                        )
                    ).toBe('238.00')
                })
                test('BT-115 - DuePayableAmount', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:DuePayableAmount.#text'
                        )
                    ).toBe('238.00')
                })
            })
        })
    })
})

describe('Build and check XML', () => {
    test('Build XML succeeds', async () => {
        const convertedXML = await facturX.getXML()
        expect(convertedXML).toBeDefined()
    })
    test('Check XML against XSD Schemes', async () => {
        const convertedXML = await facturX.getXML()
        if (!convertedXML) {
            throw new Error('XSD Check could not be performed as XML conversion failed')
        }

        const xsd = await fs.readFile(
            path.join(__dirname, 'xsdSchemes', 'MINIMUM', 'Factur-X_1.0.07_MINIMUM.xsd'),
            'utf-8'
        )

        // xs:import references need to be loaded into wasm
        const xsdImports = [
            'Factur-X_1.0.07_MINIMUM_urn_un_unece_uncefact_data_standard_QualifiedDataType_100.xsd',
            'Factur-X_1.0.07_MINIMUM_urn_un_unece_uncefact_data_standard_ReusableAggregateBusinessInformationEntity_100.xsd',
            'Factur-X_1.0.07_MINIMUM_urn_un_unece_uncefact_data_standard_UnqualifiedDataType_100.xsd'
        ]

        const preload = []

        for (const fileName of xsdImports) {
            const contents = await fs.readFile(path.join(__dirname, 'xsdSchemes', 'MINIMUM', fileName), 'utf-8')
            preload.push({
                fileName,
                contents
            })
        }

        const result = await validateXML({
            xml: [
                {
                    fileName: 'e-invoice.xml',
                    contents: convertedXML
                }
            ],
            schema: [xsd],
            preload
        })

        if (!result.valid) console.log(result.errors)

        expect(result.valid).toBe(true)
    })
})
