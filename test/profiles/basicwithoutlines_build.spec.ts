import { Schema } from 'node-schematron'
import fs from 'node:fs/promises'
import path from 'node:path'
import objectPath from 'object-path'
import { validateXML } from 'xmllint-wasm'

import { parseXML } from '../../src/core/xml.js'
import { FacturX } from '../../src/index.js'
import {
    BasicWithoutLinesProfileXml,
    isBasicWithoutLinesProfileXml
} from '../../src/profiles/basicwithoutlines/BasicWithoutLinesProfileXml.js'
import testBasicWLProfile from './basicwithoutlines_test_objects.js'
import './codeDb/xPathDocumentFunction'

let xmlObject: BasicWithoutLinesProfileXml
let instance: FacturX

beforeAll(async () => {
    instance = await FacturX.fromObject(testBasicWLProfile)
    const xml = await instance.getXML()
    const obj = parseXML(xml)

    if (!isBasicWithoutLinesProfileXml(obj)) throw new Error('Conversion to XML Obj failed')

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
            ).toBe('BP-12345')
        })
        test('BT-24 - Specification identifier', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID.#text'
                )
            ).toBe('urn:factur-x.eu:1p0:basicwl')
        })
    })
})

describe('7.2.2 - ExchangedDocument - Page 44/85.', () => {
    test('BT-1 - Invoice number', () => {
        expect(objectPath.get(xmlObject, 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:ID.#text')).toBe(
            'DOC-12345'
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
        ).toBe('20231001')
        expect(
            objectPath.get(
                xmlObject,
                'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IssueDateTime.udt:DateTimeString.@format'
            )
        ).toBe('102')
    })
    test('BT-X - Notes', () => {
        const notesArray = objectPath.get(xmlObject, 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IncludedNote')
        expect(Array.isArray(notesArray)).toBeTruthy()
        expect(notesArray.length).toBe(2)
        expect(notesArray[0]['ram:Content']['#text']).toBe('Note 1')
        expect(notesArray[0]['ram:SubjectCode']['#text']).toBe('ABS')
        expect(notesArray[1]['ram:Content']['#text']).toBe('Note 2')
        expect(notesArray[1]['ram:SubjectCode']['#text']).toBe('AEA')
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
            ).toBe('Buyer Reference')
        })
        describe('BG-4 - SELLER', () => {
            test('BT-27 - Seller name', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name.#text'
                    )
                ).toBe('Seller Company')
            })
            test('BT-30-00 - Seller legal registration', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text'
                    )
                ).toBe('LEGAL-1')
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID'
                    )
                ).toBe('0060')
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
                test('BT-X - Seller postcode', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:PostcodeCode.#text'
                        )
                    ).toBe('12345')
                })
                test('BT-X - Seller address line one', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineOne.#text'
                        )
                    ).toBe('123 Seller St')
                })
                test('BT-X - Seller address line two', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineTwo.#text'
                        )
                    ).toBe('Suite 100')
                })
                test('BT-X - Seller address line three', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineThree.#text'
                        )
                    ).toBe('Building A')
                })
                test('BT-X - Seller city', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CityName.#text'
                        )
                    ).toBe('Seller City')
                })
                test('BT-X - Seller country subdivision', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName.#text'
                        )
                    ).toBe('Seller State')
                })
            })
            test('BT-31-00 - Seller VAT identifier', () => {
                const sellerTaxArray = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:SpecifiedTaxRegistration'
                )
                expect(Array.isArray(sellerTaxArray)).toBeFalsy()
                expect(sellerTaxArray['ram:ID']?.['#text']).toBe('DE123456789')
                expect(sellerTaxArray['ram:ID']?.['@schemeID']).toBe('VA')
            })
        })
        describe('BG-5 - BUYER', () => {
            test('BT-44 - Buyer name', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:Name.#text'
                    )
                ).toBe('Buyer Company')
            })
            test('BT-47-00 - Buyer legal registration', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.#text'
                    )
                ).toBe('LEGAL-BUYER-1')
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:SpecifiedLegalOrganization.ram:ID.@schemeID'
                    )
                ).toBe('0060')
            })
            describe('BG-X - BUYER POSTAL ADDRESS', () => {
                test('BT-X - Buyer country code', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CountryID.#text'
                        )
                    ).toBe('DE')
                })
                test('BT-X - Buyer postcode', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:PostcodeCode.#text'
                        )
                    ).toBe('67890')
                })
                test('BT-X - Buyer address line one', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineOne.#text'
                        )
                    ).toBe('456 Buyer St')
                })
                test('BT-X - Buyer address line two', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineTwo.#text'
                        )
                    ).toBe('Suite 200')
                })
                test('BT-X - Buyer address line three', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineThree.#text'
                        )
                    ).toBe('Building B')
                })
                test('BT-X - Buyer city', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CityName.#text'
                        )
                    ).toBe('Buyer City')
                })
                test('BT-X - Buyer country subdivision', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName.#text'
                        )
                    ).toBe('Buyer State')
                })
            })
        })
        test('BT-13-00 - BuyerOrderReferencedDocument', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerOrderReferencedDocument.ram:IssuerAssignedID.#text'
                )
            ).toBe('ORDER-12345')
        })
        test('BT-XX-XX - ContractReferencedDocument', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:ContractReferencedDocument.ram:IssuerAssignedID.#text'
                )
            ).toBe('CONTRACT-12345')
        })
    })
    describe('BG-13-00 ApplicableHeaderTradeDelivery', () => {
        test('BT-X - Delivery recipient id', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:ID.#text'
                )
            ).toBe('RECIPIENT-1')
        })
        test('BT-X - Delivery recipient global id', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:GlobalID.#text'
                )
            ).toBe('GLOBAL-RECIPIENT-1')
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:GlobalID.@schemeID'
                )
            ).toBe('0204')
        })
        test('BT-X - Delivery recipient name', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:Name.#text'
                )
            ).toBe('Recipient Company')
        })
        test('BT-X - Delivery recipient postal address postcode', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:PostcodeCode.#text'
                )
            ).toBe('98765')
        })
        test('BT-X - Delivery recipient postal address line one', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineOne.#text'
                )
            ).toBe('123 Recipient St')
        })
        test('BT-X - Delivery recipient postal address line two', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineTwo.#text'
                )
            ).toBe('Suite 400')
        })
        test('BT-X - Delivery recipient postal address line three', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:LineThree.#text'
                )
            ).toBe('Building D')
        })
        test('BT-X - Delivery recipient postal address city', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CityName.#text'
                )
            ).toBe('Recipient City')
        })
        test('BT-X - Delivery recipient postal address country', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CountryID.#text'
                )
            ).toBe('GB')
        })
        test('BT-X - Delivery recipient postal address country subdivision', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ShipToTradeParty.ram:PostalTradeAddress.ram:CountrySubDivisionName.#text'
                )
            ).toBe('Recipient State')
        })
        test('BT-X - Delivery date', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:ActualDeliverySupplyChainEvent.ram:OccurrenceDateTime.udt:DateTimeString.#text'
                )
            ).toBe('20231005')
        })
        test('BT-X - Advance shipping notice', () => {
            expect(
                objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeDelivery.ram:DespatchAdviceReferencedDocument.ram:IssuerAssignedID.#text'
                )
            ).toBe('ASN-12345')
        })
    })

    describe('BG-19 ApplicableHeaderTradeSettlement', () => {
        describe('Payment Information', () => {
            test('BT-X Creditor Reference', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:CreditorReferenceID.#text'
                    )
                ).toBe('CREDITOR-12345')
            })

            test('Payment Means', () => {
                const paymentMeans = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementPaymentMeans'
                )
                expect(Array.isArray(paymentMeans)).toBeTruthy()
                expect(paymentMeans.length).toBe(2)
                expect(paymentMeans[0]['ram:TypeCode']['#text']).toBe('59')
                expect(paymentMeans[0]['ram:PayerPartyDebtorFinancialAccount']['ram:IBANID']['#text']).toBe(
                    'DE89370400440532013000'
                )
                expect(paymentMeans[0]['ram:PayeePartyCreditorFinancialAccount']['ram:IBANID']['#text']).toBe(
                    'DE89370400440532013001'
                )
            })

            test('Payment Terms', () => {
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradePaymentTerms.ram:Description.#text'
                    )
                ).toBe('Payment due in 30 days')
                expect(
                    objectPath.get(
                        xmlObject,
                        'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradePaymentTerms.ram:DirectDebitMandateID.#text'
                    )
                ).toBe('DDM-12345')
            })
        })

        describe('Seller Additional Information', () => {
            test('Seller IDs', () => {
                const sellerIds = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:ID'
                )
                expect(Array.isArray(sellerIds)).toBeTruthy()
                expect(sellerIds.length).toBe(2)
                expect(sellerIds[0]['#text']).toBe('SELLER-1')
                expect(sellerIds[1]['#text']).toBe('SELLER-2')
            })

            test('Seller Global IDs', () => {
                const globalIds = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:GlobalID'
                )
                expect(Array.isArray(globalIds)).toBeTruthy()
                expect(globalIds.length).toBe(2)
                expect(globalIds[0]['#text']).toBe('GLOBAL-1')
                expect(globalIds[0]['@schemeID']).toBe('0204')
                expect(globalIds[1]['#text']).toBe('GLOBAL-2')
                expect(globalIds[1]['@schemeID']).toBe('0131')
            })
        })

        describe('Document Level Charges and Allowances', () => {
            test('Document Level Allowances', () => {
                const allowances = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeAllowanceCharge'
                )
                const filteredAllowances = allowances.filter(
                    (a: Record<string, Record<string, Record<string, string>>>) =>
                        a['ram:ChargeIndicator']['udt:Indicator']['#text'] === 'false'
                )
                expect(filteredAllowances.length).toBe(2)
                expect(filteredAllowances[0]['ram:ActualAmount']['#text']).toBe('10.00')
                expect(filteredAllowances[0]['ram:ReasonCode']['#text']).toBe('95')
            })

            test('Document Level Charges', () => {
                const charges = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeAllowanceCharge'
                )
                const filteredCharges = charges.filter(
                    (c: Record<string, Record<string, Record<string, string>>>) =>
                        c['ram:ChargeIndicator']['udt:Indicator']['#text'] === 'true'
                )
                expect(filteredCharges.length).toBe(2)
                expect(filteredCharges[0]['ram:ActualAmount']['#text']).toBe('1.50')
                expect(filteredCharges[0]['ram:ReasonCode']['#text']).toBe('AED')
            })
        })

        describe('Tax Breakdown', () => {
            test('Tax Breakdown Details', () => {
                const taxBreakdown = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:ApplicableTradeTax'
                )
                expect(Array.isArray(taxBreakdown)).toBeFalsy()
                expect(taxBreakdown['ram:CalculatedAmount']['#text']).toBe('0.00')
                expect(taxBreakdown['ram:CategoryCode']['#text']).toBe('E')
                expect(taxBreakdown['ram:RateApplicablePercent']['#text']).toBe('0.00')
            })
        })

        describe('Referenced Documents', () => {
            test('Referenced Invoices', () => {
                const referencedInvoices = objectPath.get(
                    xmlObject,
                    'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:InvoiceReferencedDocument'
                )
                expect(Array.isArray(referencedInvoices)).toBeTruthy()
                expect(referencedInvoices.length).toBe(2)
                expect(referencedInvoices[0]['ram:IssuerAssignedID']['#text']).toBe('INV-12345')
                expect(referencedInvoices[0]['ram:FormattedIssueDateTime']['qdt:DateTimeString']['#text']).toBe(
                    '20230901'
                )
                expect(referencedInvoices[1]['ram:IssuerAssignedID']['#text']).toBe('INV-67890')
                expect(referencedInvoices[1]['ram:FormattedIssueDateTime']['qdt:DateTimeString']['#text']).toBe(
                    '20230915'
                )
            })
        })

        describe('7.3.3.3 - ApplicableHeaderTradeSettlement', () => {
            describe('BG-22 SpecifiedTradeSettlementHeaderMonetarySummation', () => {
                test('BT-109 - TaxBasisTotalAmount', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxBasisTotalAmount.#text'
                        )
                    ).toBe('990.00')
                })
                test('BT-110 - TaxTotalAmount', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:TaxTotalAmount.#text'
                        )
                    ).toBe('0.00')
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
                    ).toBe('990.00')
                })
                test('BT-115 - DuePayableAmount', () => {
                    expect(
                        objectPath.get(
                            xmlObject,
                            'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeSettlement.ram:SpecifiedTradeSettlementHeaderMonetarySummation.ram:DuePayableAmount.#text'
                        )
                    ).toBe('990.00')
                })
            })
        })
    })
})

describe('Build and check XML', () => {
    test('Build XML succeeds', async () => {
        const convertedXML = await instance.getXML()
        expect(convertedXML).toBeDefined()
    })
    test('Check XML against XSD Schemes', async () => {
        const convertedXML = await instance.getXML()
        if (!convertedXML) {
            throw new Error('XSD Check could not be performed as XML conversion failed')
        }

        const xsd = await fs.readFile(
            path.join(__dirname, 'xsdSchemes', 'BASICWL', 'Factur-X_1.0.07_BASICWL.xsd'),
            'utf-8'
        )

        // xs:import references need to be loaded into wasm
        const xsdImports = [
            'Factur-X_1.0.07_BASICWL_urn_un_unece_uncefact_data_standard_QualifiedDataType_100.xsd',
            'Factur-X_1.0.07_BASICWL_urn_un_unece_uncefact_data_standard_ReusableAggregateBusinessInformationEntity_100.xsd',
            'Factur-X_1.0.07_BASICWL_urn_un_unece_uncefact_data_standard_UnqualifiedDataType_100.xsd'
        ]

        const preload = []

        for (const fileName of xsdImports) {
            const contents = await fs.readFile(path.join(__dirname, 'xsdSchemes', 'BASICWL', fileName), 'utf-8')
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

    test('Builds Valid XML According to SCHEMATRON Schema', async () => {
        const convertedXML = await instance.getXML()

        const schematron = (
            await fs.readFile(path.join(__dirname, 'schematronSchemes', 'Factur-X_1.0.07_BASICWL.sch'), 'utf-8')
        ).toString()

        const schema = Schema.fromString(schematron)

        const result = schema.validateString(convertedXML)

        if (result.length > 0) console.log(result.map(res => res.message?.trim()))

        expect(result.length).toBe(0)
    })
})

test('Build PDF', async () => {
    const pdfBytes = await instance.getPDF()
    expect(pdfBytes).toBeDefined()
    await fs.writeFile(path.join(__dirname, 'pdf', 'createdPDFs', 'FacturX_BASICWL_Test.pdf'), pdfBytes)
})
