// Tests to Validate the Minimum Profile gets Parsed According to Factur-X Spec
import { DateTime } from 'luxon'
import fs from 'node:fs'
import path from 'node:path'

import { FacturX } from '../../src/index.js'
import { MinimumProfile, isMinimumProfile } from '../../src/profiles/minimum/index.js'
import { COUNTRY_ID_CODES, CURRENCY_CODES, DOCUMENT_TYPE_CODES } from '../../src/types/codes.js'

type TestCases = Record<string, MinimumProfile | undefined>

const testCases: TestCases = Object.fromEntries(['MINIMUM_Rechnung'].map(name => [name, undefined]))

beforeAll(async () => {
    for (const name of Object.keys(testCases)) {
        const facturX = await FacturX.fromPDF(fs.readFileSync(path.join(__dirname, 'pdf', `${name}.pdf`)))

        const result = await facturX.getObject()

        if (!isMinimumProfile(result)) throw new Error('The profile was not properly chosen')

        testCases[name] = result
    }
})

describe('7.2.2 - ExchangedDocumentContext - Page 43/85 f.', () => {
    describe('BG-2 - PROCESS CONTROL', () => {
        test('BT-23 - Business process type', () => {
            expect(testCases['MINIMUM_Rechnung']?.meta.businessProcessType).toBe(undefined)
        })
        test('BT-24 - Specification identifier', () => {
            expect(testCases['MINIMUM_Rechnung']?.meta.guidelineSpecifiedDocumentContextParameter).toBe(
                'urn:factur-x.eu:1p0:minimum'
            )
        })
    })
})

describe('7.2.2 - ExchangedDocument - Page 44/85.', () => {
    test('BT-1 - Invoice number', () => {
        expect(testCases['MINIMUM_Rechnung']?.document.id).toBe('471102')
    })

    test('BT-3 - Type Code', () => {
        expect(testCases['MINIMUM_Rechnung']?.document.type).toBe('380')
        expect(testCases['MINIMUM_Rechnung']?.document.type).toBe(DOCUMENT_TYPE_CODES.COMMERCIAL_INVOICE)
    })
    test('BT-2 - Invoice issue date', () => {
        if (!testCases['MINIMUM_Rechnung']?.document.dateOfIssue) {
            throw new Error('PDF or Document Date undefined')
        }
        // expect(testCases['MINIMUM_Rechnung'].document.dateOfIssue.format).toBe('102') // I would leave that out, as it is not user-friendly to force them to type that 103 everytime
        expect(DateTime.fromJSDate(testCases['MINIMUM_Rechnung'].document.dateOfIssue).toISODate()).toBe('2024-11-15')
    })
})

describe('7.3.3 - SupplyChainTradeTransaction - Page 44/85 ff.', () => {
    describe('7.3.3.1 - ApplicableHeaderTradeAgreement', () => {
        test('BT-10-00 - Buyer reference', () => {
            expect(testCases['MINIMUM_Rechnung']?.buyer.reference).toBeUndefined()
        })
        describe('BG-4 - SELLER', () => {
            test('BT-27 - Seller name', () => {
                expect(testCases['MINIMUM_Rechnung']?.seller.name).toBe('Lieferant GmbH')
            })
            test('BT-30-00 - Seller legal registration', () => {
                expect(testCases['MINIMUM_Rechnung']?.seller.specifiedLegalOrganization?.id).toBeUndefined()
                expect(testCases['MINIMUM_Rechnung']?.seller.specifiedLegalOrganization?.scheme).toBeUndefined()
            })
            describe('BG-5 - SELLER POSTAL ADDRESS', () => {
                test('BT-40 - Seller country code', () => {
                    expect(testCases['MINIMUM_Rechnung']?.seller.postalAddress.country).toBe(COUNTRY_ID_CODES.GERMANY)
                })
            })
            test('BT-31-00 - Seller VAT identifier', () => {
                expect(testCases['MINIMUM_Rechnung']?.seller.taxIdentification.localTaxId).toBe('201/113/40209')
                expect(testCases['MINIMUM_Rechnung']?.seller.taxIdentification.vatId).toBe('DE123456789')
            })
        })
        describe('BG-5 - BUYER', () => {
            test('BT-44 - Buyer name', () => {
                expect(testCases['MINIMUM_Rechnung']?.buyer.name).toBe('Kunden AG Frankreich')
            })
            test('BT-47-00 - Buyer legal registration', () => {
                expect(testCases['MINIMUM_Rechnung']?.buyer.specifiedLegalOrganization?.id).toBeUndefined()
                expect(testCases['MINIMUM_Rechnung']?.buyer.specifiedLegalOrganization?.scheme).toBeUndefined()
            })
        })
        test('BT-13-00 - BuyerOrderReferencedDocument', () => {
            expect(testCases['MINIMUM_Rechnung']?.referencedDocuments?.orderReference).toBeUndefined()
        })
    })
    describe('BG-19 ApplicableHeaderTradeSettlement', () => {
        test('BT-5 - InvoiceCurrencyCode', () => {
            expect(testCases['MINIMUM_Rechnung']?.document.currency).toBe(CURRENCY_CODES.Euro)
        })

        describe('7.3.3.3 - ApplicableHeaderTradeSettlement', () => {
            describe('BG-22 SpecifiedTradeSettlementHeaderMonetarySummation', () => {
                test('BT-109 - TaxBasisTotalAmount', () => {
                    expect(testCases['MINIMUM_Rechnung']?.totals.netTotal.amount).toBe(198)
                })
                test('BT-110 - TaxTotalAmount', () => {
                    expect(testCases['MINIMUM_Rechnung']?.totals.taxTotal.amount).toBe(37.62)
                })
                test('BT-110-0 - TaxCurrencyCode', () => {
                    expect(testCases['MINIMUM_Rechnung']?.totals.taxTotal.currency).toBe(CURRENCY_CODES.Euro)
                })
                test('BT-112 - GrandTotalAmount', () => {
                    expect(testCases['MINIMUM_Rechnung']?.totals.grossTotal.amount).toBe(235.62)
                })
                test('BT-115 - DuePayableAmount', () => {
                    expect(testCases['MINIMUM_Rechnung']?.totals.dueTotal.amount).toBe(235.62)
                })
            })
        })
    })
})
