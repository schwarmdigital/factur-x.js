import { BasicWithoutLinesProfile } from '../../src/profiles/basicwithoutlines'
import {
    ALLOWANCE_REASONS_CODES,
    CHARGE_REASONS_CODES,
    COUNTRY_ID_CODES,
    CURRENCY_CODES,
    DOCUMENT_TYPE_CODES,
    EAS_SCHEME_CODES,
    ISO6523_CODES,
    PAYMENT_MEANS_CODES,
    SUBJECT_CODES,
    TAX_CATEGORY_CODES,
    TAX_TYPE_CODE
} from '../../src/types/codes'

const testBasicWLProfile: BasicWithoutLinesProfile = {
    meta: {
        businessProcessType: 'BP-12345',
        guidelineSpecifiedDocumentContextParameter: 'urn:factur-x.eu:1p0:basicwl'
    },
    document: {
        id: 'DOC-12345',
        type: DOCUMENT_TYPE_CODES.COMMERCIAL_INVOICE,
        dateOfIssue: new Date('2023-10-01'),
        notes: [
            { content: 'Note 1', subject: SUBJECT_CODES.ADDITIONAL_CONDITIONS },
            { content: 'Note 2', subject: SUBJECT_CODES.CARGO_REMARKS }
        ],
        currency: CURRENCY_CODES.Euro
    },
    seller: {
        id: ['SELLER-1', 'SELLER-2'],
        globalId: [
            { id: 'GLOBAL-1', scheme: ISO6523_CODES.Leitweg_ID },
            {
                id: 'GLOBAL-2',
                scheme: ISO6523_CODES.Code_for_the_Identification_of_National_Organizations
            }
        ],
        name: 'Seller Company',
        specifiedLegalOrganization: {
            id: { id: 'LEGAL-1', scheme: ISO6523_CODES.Data_Universal_Numbering_System_DUNS_Number },
            tradingBusinessName: 'Seller Trading Name'
        },
        postalAddress: {
            postcode: '12345',
            addressLineOne: '123 Seller St',
            addressLineTwo: 'Suite 100',
            addressLineThree: 'Building A',
            city: 'Seller City',
            country: COUNTRY_ID_CODES.GERMANY,
            countrySubDivision: 'Seller State'
        },
        universalCommunicationAddressURI: {
            id: 'seller@example.com',
            scheme: EAS_SCHEME_CODES.EAN_Location_Code
        },
        taxIdentification: {
            vatId: 'DE123456789'
        }
    },
    buyer: {
        reference: 'Buyer Reference',
        id: 'BUYER-1',
        globalId: {
            id: 'GLOBAL-BUYER-1',
            scheme: ISO6523_CODES.Leitweg_ID
        },
        name: 'Buyer Company',
        specifiedLegalOrganization: {
            id: 'LEGAL-BUYER-1',
            scheme: ISO6523_CODES.Data_Universal_Numbering_System_DUNS_Number
        },
        postalAddress: {
            postcode: '67890',
            addressLineOne: '456 Buyer St',
            addressLineTwo: 'Suite 200',
            addressLineThree: 'Building B',
            city: 'Buyer City',
            country: COUNTRY_ID_CODES.GERMANY,
            countrySubDivision: 'Buyer State'
        },
        universalCommunicationAddressURI: {
            id: 'buyer@example.com',
            scheme: EAS_SCHEME_CODES.EAN_Location_Code
        },
        taxIdentification: {
            vatId: 'DE987654321'
        }
    },
    sellerTaxRepresentative: {
        name: 'Seller Tax Representative',
        postalAddress: {
            postcode: '54321',
            addressLineOne: '789 Tax St',
            addressLineTwo: 'Suite 300',
            addressLineThree: 'Building C',
            city: 'Tax City',
            country: COUNTRY_ID_CODES.GERMANY,
            countrySubDivision: 'Tax State'
        },
        taxIdentification: {
            vatId: 'DE111111111'
        }
    },
    referencedDocuments: {
        orderReference: 'ORDER-12345',
        contractReference: 'CONTRACT-12345',
        advanceShippingNotice: 'ASN-12345',
        referencedInvoice: [
            { documentId: 'INV-12345', issueDate: new Date('2023-09-01') },
            { documentId: 'INV-67890', issueDate: new Date('2023-09-15') }
        ]
    },
    delivery: {
        recipient: {
            id: 'RECIPIENT-1',
            globalId: {
                id: 'GLOBAL-RECIPIENT-1',
                scheme: ISO6523_CODES.Leitweg_ID
            },
            name: 'Recipient Company',
            postalAddress: {
                postcode: '98765',
                addressLineOne: '123 Recipient St',
                addressLineTwo: 'Suite 400',
                addressLineThree: 'Building D',
                city: 'Recipient City',
                country: COUNTRY_ID_CODES.UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND,
                countrySubDivision: 'Recipient State'
            }
        },
        deliveryDate: new Date('2023-10-05')
    },
    paymentInformation: {
        creditorReference: 'CREDITOR-12345',
        paymentReference: 'PAYMENT-12345',
        payee: {
            id: 'PAYEE-1',
            globalId: {
                id: 'GLOBAL-PAYEE-1',
                scheme: ISO6523_CODES.UK_National_Health_Service_Scheme_EDIRA_compliant
            },
            name: 'Payee Company',
            specifiedLegalOrganization: {
                id: 'LEGAL-PAYEE-1',
                scheme: ISO6523_CODES.Data_Universal_Numbering_System_DUNS_Number
            }
        },
        paymentMeans: [
            {
                paymentType: PAYMENT_MEANS_CODES.SEPA_direct_debit,
                payerIBAN: 'DE89370400440532013000',
                payeeIBAN: 'DE89370400440532013001',
                payeeProprietaryID: 'PAYEE-PROP-1'
            },
            {
                paymentType: PAYMENT_MEANS_CODES.SEPA_direct_debit,
                payerIBAN: 'DE89370400440532013002',
                payeeIBAN: 'DE89370400440532013003',
                payeeProprietaryID: 'PAYEE-PROP-2'
            }
        ],
        paymentPeriod: {
            startDate: new Date('2023-10-01'),
            endDate: new Date('2023-10-31')
        },
        paymentTerms: {
            description: 'Payment due in 30 days',
            dueDate: new Date('2023-11-01'),
            directDebitMandateID: 'DDM-12345'
        },
        specifiedTradeAccountingAccount: 'ACCOUNT-12345'
    },
    totals: {
        sumWithoutAllowancesAndCharges: 1000,
        documentLevelAllowancesAndCharges: {
            allowances: [
                {
                    calculationPercent: 10,
                    basisAmount: 100,
                    actualAmount: 10,
                    reasonCode: ALLOWANCE_REASONS_CODES.Discount,
                    reason: 'Discount',
                    categoryTradeTax: {
                        typeCode: TAX_TYPE_CODE.VALUE_ADDED_TAX_VAT,
                        categoryCode: TAX_CATEGORY_CODES.EXEMPT_FROM_TAX,
                        rateApplicablePercent: 0
                    }
                },
                {
                    calculationPercent: 5,
                    basisAmount: 50,
                    actualAmount: 2.5,
                    reasonCode: ALLOWANCE_REASONS_CODES.Production_error_discount,
                    reason: 'Special Discount',
                    categoryTradeTax: {
                        typeCode: TAX_TYPE_CODE.VALUE_ADDED_TAX_VAT,
                        categoryCode: TAX_CATEGORY_CODES.EXEMPT_FROM_TAX,
                        rateApplicablePercent: 0
                    }
                }
            ],
            charges: [
                {
                    calculationPercent: 3,
                    basisAmount: 50,
                    actualAmount: 1.5,
                    reasonCode: CHARGE_REASONS_CODES.Handling_of_hazardous_cargo,
                    reason: 'Surcharge',
                    categoryTradeTax: {
                        typeCode: TAX_TYPE_CODE.VALUE_ADDED_TAX_VAT,
                        categoryCode: TAX_CATEGORY_CODES.EXEMPT_FROM_TAX,
                        rateApplicablePercent: 0
                    }
                },
                {
                    calculationPercent: 3.33,
                    basisAmount: 30,
                    actualAmount: 1,
                    reasonCode: CHARGE_REASONS_CODES.Additional_packaging,
                    reason: 'Additional Charge',
                    categoryTradeTax: {
                        typeCode: TAX_TYPE_CODE.VALUE_ADDED_TAX_VAT,
                        categoryCode: TAX_CATEGORY_CODES.EXEMPT_FROM_TAX,
                        rateApplicablePercent: 0
                    }
                }
            ]
        },
        allowanceTotalAmount: 12.5,
        chargeTotalAmount: 2.5,
        netTotal: 990,
        taxBreakdown: [
            {
                calculatedAmount: 0,
                typeCode: TAX_TYPE_CODE.VALUE_ADDED_TAX_VAT,
                basisAmount: 990,
                exemptionReason: 'Kein Ausweis von Umsatzsteuer, da Kleinunternehmer gemäß § 19 UStG',
                categoryCode: TAX_CATEGORY_CODES.EXEMPT_FROM_TAX,
                rateApplicablePercent: 0
            }
        ],
        taxTotal: [
            {
                amount: 0,
                currency: CURRENCY_CODES.Euro
            }
        ],
        grossTotal: 990,
        prepaidAmount: 0,
        openAmount: 990
    }
}

export default testBasicWLProfile
