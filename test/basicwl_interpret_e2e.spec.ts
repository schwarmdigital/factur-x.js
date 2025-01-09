import { DateTime } from 'luxon'
import fs from 'node:fs'
import path from 'node:path'

import { FacturX } from '../src/index.js'
import { BasicWLProfile, isBasicWLProfile } from '../src/profiles/basicwl/basicwl_profile.js'
import { CountryIDContentType, DOCUMENT_CODES } from '../src/types/qdt/types.js'
import { CURRENCY_ID } from '../src/types/udt/types.js'

type TestCases = Record<string, BasicWLProfile | undefined>

const testCases: TestCases = Object.fromEntries(['factur-x_basicwl'].map(name => [name, undefined]))

beforeAll(async () => {
    for (const name of Object.keys(testCases)) {
        console.log('Before all started')
        const facturX = await FacturX.fromXML(fs.readFileSync(path.join(__dirname, 'xmls', `${name}.xml`)))
        const result = await facturX.getObject()

        if (!isBasicWLProfile(result)) throw new Error('The profile was not properly chosen')

        testCases[name] = result
    }
})

describe('7.2.2 - ExchangedDocumentContext - Page 43/85 f.', () => {
    describe('BG-2 - PROCESS CONTROL', () => {
        test('BT-23 - Business process type', () => {
            expect(testCases['factur-x_basicwl']?.meta.businessProcessType).toBe(undefined)
        })
        test('BT-24 - Specification identifier', () => {
            expect(testCases['factur-x_basicwl']?.meta.guidelineSpecifiedDocumentContextParameter).toBe(
                'urn:factur-x.eu:1p0:basicwl'
            )
        })
    })
})

describe('7.2.2 - ExchangedDocument - Page 44/85.', () => {
    test('BT-1 - Invoice number', () => {
        expect(testCases['factur-x_basicwl']?.document.id).toBe('TX-471102')
    })

    test('BT-3 - Type Code', () => {
        expect(testCases['factur-x_basicwl']?.document.type).toBe('380')
        expect(testCases['factur-x_basicwl']?.document.type).toBe(DOCUMENT_CODES.COMMERCIAL_INVOICE)
    })
    test('BT-2 - Invoice issue date', () => {
        if (!testCases['factur-x_basicwl']?.document.dateOfIssue) {
            throw new Error('PDF or Document Date undefined')
        }
        expect(DateTime.fromJSDate(testCases['factur-x_basicwl'].document.dateOfIssue).toISODate()).toBe('2024-11-15')
    })
})

describe('7.3.3 - SupplyChainTradeTransaction - Page 44/85 ff.', () => {
    describe('7.3.3.1 - ApplicableHeaderTradeAgreement', () => {
        test('BT-10-00 - Buyer reference', () => {
            expect(testCases['factur-x_basicwl']?.buyer.reference).toBeUndefined()
        })
        describe('BG-4 - SELLER', () => {
            test('BT-27 - Seller name', () => {
                expect(testCases['factur-x_basicwl']?.seller.name).toBe('Taxiunternehmen TX GmbH')
            })
            test('BT-30-00 - Seller legal registration', () => {
                expect(testCases['factur-x_basicwl']?.seller.specifiedLegalOrganization?.id).toBeUndefined()
                expect(testCases['factur-x_basicwl']?.seller.specifiedLegalOrganization?.schemeId).toBeUndefined()
            })
            describe('BG-5 - SELLER POSTAL ADDRESS', () => {
                test('BT-40 - Seller country code', () => {
                    expect(testCases['factur-x_basicwl']?.seller.postalAddress.country).toBe(
                        CountryIDContentType.GERMANY
                    )
                })
            })
            test('BT-31-00 - Seller VAT identifier', () => {
                expect(testCases['factur-x_basicwl']?.seller.taxIdentification.localTaxId).toBeUndefined()
                expect(testCases['factur-x_basicwl']?.seller.taxIdentification.vatId).toBe('DE123456789')
            })
        })
        describe('BG-5 - BUYER', () => {
            test('BT-44 - Buyer name', () => {
                expect(testCases['factur-x_basicwl']?.buyer.name).toBe('Taxi-Gast AG Mitte')
            })
            test('BT-47-00 - Buyer legal registration', () => {
                expect(testCases['factur-x_basicwl']?.buyer.specifiedLegalOrganization?.id).toBeUndefined()
                expect(testCases['factur-x_basicwl']?.buyer.specifiedLegalOrganization?.schemeId).toBeUndefined()
            })
        })
        test('BT-13-00 - BuyerOrderReferencedDocument', () => {
            expect(testCases['factur-x_basicwl']?.referencedDocuments?.orderReference).toBeUndefined()
        })
    })
    describe('BG-19 ApplicableHeaderTradeSettlement', () => {
        test('BT-5 - InvoiceCurrencyCode', () => {
            expect(testCases['factur-x_basicwl']?.monetarySummary.currency).toBe(CURRENCY_ID.Euro)
        })

        describe('7.3.3.3 - ApplicableHeaderTradeSettlement', () => {
            describe('BG-22 SpecifiedTradeSettlementHeaderMonetarySummation', () => {
                test('BT-109 - TaxBasisTotalAmount', () => {
                    expect(testCases['factur-x_basicwl']?.monetarySummary.sumWithoutTax).toBe(16.9)
                })
                test('BT-110 - TaxTotalAmount', () => {
                    expect(testCases['factur-x_basicwl']?.monetarySummary.taxTotal).toBe(1.18)
                })
                test('BT-111 - TaxTotalAmountInTaxCurrency', () => {
                    expect(testCases['factur-x_basicwl']?.monetarySummary.taxTotalInTaxCurrency).toBeUndefined()
                })
                test('BT-110-0 - TaxCurrencyCode', () => {
                    expect(testCases['factur-x_basicwl']?.monetarySummary.taxCurrency).toBeUndefined()
                })
                test('BT-112 - GrandTotalAmount', () => {
                    expect(testCases['factur-x_basicwl']?.monetarySummary.grandTotal).toBe(18.08)
                })
                test('BT-115 - DuePayableAmount', () => {
                    expect(testCases['factur-x_basicwl']?.monetarySummary.openAmount).toBe(18.08)
                })
            })
        })
    })
})
