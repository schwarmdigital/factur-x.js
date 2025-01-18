describe('Basic Tests', () => {
    it.todo('To be implemented') // This will show up as a todo in our test suite! Woohoo!
})

// Tests to Validate the Basic Profile gets Parsed According to Factur-X Spec
/*import { DateTime } from 'luxon'
import fs from 'node:fs'
import path from 'node:path'

import { FacturX } from '../../src/index.js'
import { isBasicProfile } from '../../src/profiles/basic/basic.guard.js'
import { BasicProfile } from '../../src/profiles/basic/basic.js'
import { CountryIDContentType, DOCUMENT_CODES } from '../../src/types/qdt.js'
import { CURRENCY_ID } from '../../src/types/udt.js'

type TestCases = Record<string, BasicProfile | undefined>

const testCases: TestCases = Object.fromEntries(['BASIC_Einfach', 'BASIC_Taxifahrt'].map(name => [name, undefined]))

beforeAll(async () => {
    for (const name of Object.keys(testCases)) {
        const facturX = await FacturX.fromPDF(fs.readFileSync(path.join(__dirname, 'pdf', `${name}.pdf`)))

        const result = await facturX.getObject()

        if (!isBasicProfile(result)) throw new Error('The profile was not properly chosen')

        testCases[name] = result
    }
})

describe('7.2.2 - ExchangedDocumentContext - Page 43/85 f.', () => {
    describe('BG-2 - PROCESS CONTROL', () => {
        test('BT-23 - Business process type', () => {
            expect(testCases['BASIC_Einfach']?.meta.businessProcessType).toBe(undefined)
        })
        test('BT-24 - Specification identifier', () => {
            expect(testCases['BASIC_Einfach']?.meta.guidelineSpecifiedDocumentContextParameter).toBe(
                'urn:factur-x.eu:1p0:minimum'
            )
        })
    })
})

describe('7.2.2 - ExchangedDocument - Page 44/85.', () => {
    test('BT-1 - Invoice number', () => {
        expect(testCases['BASIC_Einfach']?.document.id).toBe('471102')
    })

    test('BT-3 - Type Code', () => {
        expect(testCases['BASIC_Einfach']?.document.type).toBe('380')
        expect(testCases['BASIC_Einfach']?.document.type).toBe(DOCUMENT_CODES.COMMERCIAL_INVOICE)
    })
    test('BT-2 - Invoice issue date', () => {
        if (!testCases['BASIC_Einfach']?.document.dateOfIssue) {
            throw new Error('PDF or Document Date undefined')
        }
        expect(DateTime.fromJSDate(testCases['BASIC_Einfach'].document.dateOfIssue).toISODate()).toBe('2024-11-15')
    })
})

describe('7.3.3 - SupplyChainTradeTransaction - Page 44/85 ff.', () => {
    describe('7.3.3.1 - ApplicableHeaderTradeAgreement', () => {
        test('BT-10-00 - Buyer reference', () => {
            expect(testCases['BASIC_Einfach']?.buyer.reference).toBeUndefined()
        })
        describe('BG-4 - SELLER', () => {
            test('BT-27 - Seller name', () => {
                expect(testCases['BASIC_Einfach']?.seller.name).toBe('Lieferant GmbH')
            })
            test('BT-30-00 - Seller legal registration', () => {
                expect(testCases['BASIC_Einfach']?.seller.specifiedLegalOrganization?.id).toBeUndefined()
                expect(testCases['BASIC_Einfach']?.seller.specifiedLegalOrganization?.schemeId).toBeUndefined()
            })
            describe('BG-5 - SELLER POSTAL ADDRESS', () => {
                test('BT-40 - Seller country code', () => {
                    expect(testCases['BASIC_Einfach']?.seller.postalAddress.country).toBe(CountryIDContentType.GERMANY)
                })
            })
            test('BT-31-00 - Seller VAT identifier', () => {
                expect(testCases['BASIC_Einfach']?.seller.taxIdentification.localTaxId).toBe('201/113/40209')
                expect(testCases['BASIC_Einfach']?.seller.taxIdentification.vatId).toBe('DE123456789')
            })
        })
        describe('BG-5 - BUYER', () => {
            test('BT-44 - Buyer name', () => {
                expect(testCases['BASIC_Einfach']?.buyer.name).toBe('Kunden AG Frankreich')
            })
            test('BT-47-00 - Buyer legal registration', () => {
                expect(testCases['BASIC_Einfach']?.buyer.specifiedLegalOrganization?.id).toBeUndefined()
                expect(testCases['BASIC_Einfach']?.buyer.specifiedLegalOrganization?.schemeId).toBeUndefined()
            })
        })
        test('BT-13-00 - BuyerOrderReferencedDocument', () => {
            expect(testCases['BASIC_Einfach']?.buyer.orderReference).toBeUndefined()
        })
    })
    describe('BG-19 ApplicableHeaderTradeSettlement', () => {
        test('BT-5 - InvoiceCurrencyCode', () => {
            expect(testCases['BASIC_Einfach']?.monetarySummary.currency).toBe(CURRENCY_ID.Euro)
        })

        describe('7.3.3.3 - ApplicableHeaderTradeSettlement', () => {
            describe('BG-22 SpecifiedTradeSettlementHeaderMonetarySummation', () => {
                test('BT-109 - TaxBasisTotalAmount', () => {
                    expect(testCases['BASIC_Einfach']?.monetarySummary.sumWithoutTax).toBe(198)
                })
                test('BT-110 - TaxTotalAmount', () => {
                    expect(testCases['BASIC_Einfach']?.monetarySummary.tax).toBe(37.62)
                })
                test('BT-110-0 - TaxCurrencyCode', () => {
                    expect(testCases['BASIC_Einfach']?.monetarySummary.taxCurrency).toBe(CURRENCY_ID.Euro)
                })
                test('BT-112 - GrandTotalAmount', () => {
                    expect(testCases['BASIC_Einfach']?.monetarySummary.grandTotal).toBe(235.62)
                })
                test('BT-115 - DuePayableAmount', () => {
                    expect(testCases['BASIC_Einfach']?.monetarySummary.openAmount).toBe(235.62)
                })
            })
        })
    })
})
*/
