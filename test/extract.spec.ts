import fs from 'node:fs'
import path from 'node:path'
import { DateTime } from 'luxon'
import { FacturX } from '../src'
import { DOCUMENT_TYPES } from '../src/types/documentTypes'

type TestCases = {
    [k: string]: FacturX | undefined
}

const testCases: TestCases = Object.fromEntries([
    'BASIC_Einfach',
    'BASIC_Taxifahrt'
].map(name => ([name, undefined])))

beforeAll(async () => {
    for (const name of Object.keys(testCases)) {
        testCases[name] = await FacturX.fromPDF(fs.readFileSync(path.join(__dirname, 'pdfs', `${name}.pdf`)))
    }
})

describe('7.3.1 - ExchangedDocumentContext - Page 46/129 ff.', () => {
    describe('BG-2 - PROCESS CONTROL', () => {
        test('BT-23-00 - Business process type', () => {
            expect(testCases['BASIC_Einfach']?.data.meta.businessProcessType).toBe('A1')
        })
        test('BT-24-00 - Specification identifier', () => {
            expect(testCases['BASIC_Einfach']?.data.meta.specificationProfile).toBe('urn:cen.eu:en16931:2017#compliant#urn:factur-x.eu:1p0:basic')
        })
    })
})

describe('7.3.2 - ExchangedDocument - Page 48/129 ff.', () => {
    test('BT-1-00 - Invoice number', () => {
        expect(testCases['BASIC_Einfach']?.data.documentId).toBe('471102')

        expect(testCases['BASIC_Einfach']?.data.documentType).toBe('380')
        expect(testCases['BASIC_Einfach']?.data.documentType).toBe(DOCUMENT_TYPES.COMMERCIAL_INVOICE)
    })
    test('BT-2-00 - Invoice issue date', () => {
        if (!testCases['BASIC_Einfach']?.data.documentDate) {
            throw new Error('PDF or Document Date undefined')
        }
        expect(DateTime.fromJSDate(testCases['BASIC_Einfach'].data.documentDate).toISODate()).toBe('2020-03-05')
    })
    describe('BG-1 - INVOICE NOTE', () => {
        test.todo('BT-22 - Invoice note')
        test.todo('BT-21 - Invoice note subject code')
    })
})

describe('7.3.3 - SupplyChainTradeTransaction - Page 50/129 ff.', () => {
    describe('7.3.3.1 - ApplicableHeaderTradeAgreement - Page 51/129 ff.', () => {
        test('BT-10-00 - Buyer reference', () => {
            expect(testCases['BASIC_Einfach']?.data.buyerReference).toBeUndefined()
        })
        describe('BG-4 - SELLER', () => {
            test.todo('BT-29 - Seller identifier')
            test('BT-27 - Seller name', () => {
                expect(testCases['BASIC_Einfach']?.data.seller.sellerName).toBe('Lieferant GmbH')
            })
            test.todo('BT-30-00 - Seller legal registration')
            test.todo('BT-28 - Seller trading name')
            describe('BG-5 - SELLER POSTAL ADDRESS', () => {
                test('BT-38 - Seller post code', () => {
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.postCode).toBe('80333')
                })
                test('BT-35 - Seller address line 1', () => {
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.address).toHaveLength(3)
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.address?.at(0)).toBe('Lieferantenstraße 20')
                })
                test('BT-36 - Seller address line 2', () => {
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.address).toHaveLength(3)
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.address?.at(1)).toBeUndefined()
                })
                test('BT-162 - Seller address line 3', () => {
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.address).toHaveLength(3)
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.address?.at(2)).toBeUndefined()
                })
                test('BT-37 - Seller city', () => {
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.city).toBe('München')
                })
                test('BT-40 - Seller country code', () => {
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.countryCode).toBe('DE')
                })
                test('BT-39 - Seller country subdivision', () => {
                    expect(testCases['BASIC_Einfach']?.data.seller.postalAddress.countrySubdivision).toBeUndefined()
                })
            })
            test.todo('BT-34-00 - Seller electronic address')
            test('BT-31-00 - Seller VAT identifier', () => {
                expect(testCases['BASIC_Einfach']?.data.seller.taxRegistrations).toHaveLength(2)
                expect(testCases['BASIC_Einfach']?.data.seller.taxRegistrations.at(0)?.type).toBe('FC')
                expect(testCases['BASIC_Einfach']?.data.seller.taxRegistrations.at(0)?.value).toBe('201/113/40209')
                expect(testCases['BASIC_Einfach']?.data.seller.taxRegistrations.at(1)?.type).toBe('VA')
                expect(testCases['BASIC_Einfach']?.data.seller.taxRegistrations.at(1)?.value).toBe('DE123456789')
            })
        })
        describe('BG-5 - BUYER', () => {
            test.todo('BT-46 - Buyer identifier')
            test('BT-44 - Buyer name', () => {
                expect(testCases['BASIC_Einfach']?.data.buyer.buyerName).toBe('Kunden AG Mitte')
            })
            test.todo('BT-47-00 - Buyer legal registration')
            describe('BG-8 - BUYER POSTAL ADDRESS', () => {
                test('BT-53 - Buyer post code', () => {
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.postCode).toBe('69876')
                })
                test('BT-50 - Buyer address line 1', () => {
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.address).toHaveLength(3)
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.address?.at(0)).toBe('Hans Muster')
                })
                test('BT-51 - Buyer address line 2', () => {
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.address).toHaveLength(3)
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.address?.at(1)).toBe('Kundenstraße 15')
                })
                test('BT-163 - Buyer address line 3', () => {
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.address).toHaveLength(3)
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.address?.at(2)).toBeUndefined()
                })
                test('BT-52 - Buyer city', () => {
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.city).toBe('Frankfurt')
                })
                test('BT-55 - Buyer country code', () => {
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.countryCode).toBe('DE')
                })
                test('BT-54 - Buyer country subdivision', () => {
                    expect(testCases['BASIC_Einfach']?.data.buyer.postalAddress.countrySubdivision).toBeUndefined()
                })
            })
            test.todo('BT-49-00 - Buyer electronic address')
            test('BT-48-00 - Buyer VAT identifier', () => {
                expect(testCases['BASIC_Einfach']?.data.buyer.taxRegistrations).toHaveLength(0)
            })
        })
        describe('BG-11 - SELLER TAX REPRESENTATIVE PARTY', () => {
            test.todo('BT-62 - Seller tax representative name')
            describe('BG-12 - SELLER TAX REPRESENTATIVE PARTY POSTAL ADDRESS', () => {
                test.todo('BT-67 - Tax representative post code')
                test.todo('BT-64 - Tax representative address line 1')
                test.todo('BT-65 - Tax representative address line 2')
                test.todo('BT-164 - Tax representative address line 3')
                test.todo('BT-66 - Tax representative city')
                test.todo('BT-69 - Tax representative country code')
                test.todo('BT-68 - Tax representative country subdivision')
            })
            test.todo('BT-63-00 - Seller tax representative VAT identifier')
        })
        test.todo('BT-13-00 - Purchase order reference')
        test.todo('BT-12-00 - Contract reference')
    })
    describe('7.3.3.3 - ApplicableHeaderTradeDelivery - Page 65/129 ff.', () => {
        describe('BG-13-00 - (DELIVERY INFORMATION)', () => {
            describe('BG-13 - DELIVERY INFORMATION', () => {
                test.todo('BT-71 - Deliver to location identifier')
                test('BT-70 - Deliver to party name', () => {
                    expect(testCases['BASIC_Einfach']?.data.shipTo?.shipToName).toBeUndefined()
                })
            })
            describe('BG-15 - DELIVER TO ADDRESS', () => {
            })
            test('BT-72-00 - Actual delivery date', () => {
                if (!testCases['BASIC_Einfach']?.data.shippingDate) {
                    throw new Error('PDF or Shipping Date undefined')
                }
                expect(DateTime.fromJSDate(testCases['BASIC_Einfach'].data.shippingDate).toISODate()).toBe('2020-03-05')
            })
        })
    })
})
