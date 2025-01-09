import { z } from 'zod'

import {
    AllowanceReasonCodes,
    ChargeReasonCodes,
    CountryIDContentType,
    DOCUMENT_CODES,
    ExemptionReasonCodeContentType,
    PaymentMeansCodes,
    TaxCategoryCodeContentType,
    TaxTypeCode,
    TimeReferenceCodeContentType
} from '../../types/qdt/types'
import { CURRENCY_ID, EAS_Scheme, ISO6523_CODELIST, SubjectCodes } from '../../types/udt/types'
import { SellerTaxIdentifierTypeSchema, TaxIdentifierTypeSchema, TokenScheme } from '../minimum/minimum'

const NotesTypeSchema = z.object({
    content: z.string(),
    subjectCode: z.nativeEnum(SubjectCodes).optional()
})

const GlobalIDTypeSchema = z.object({
    id: TokenScheme,
    identificationScheme: z.nativeEnum(ISO6523_CODELIST)
})

const UniversalCommunicationURISchema = z.object({
    URIID: TokenScheme,
    ElectronicAddressScheme: z.nativeEnum(EAS_Scheme)
})

const PaymentMeansTypeSchema = z.object({
    paymentType: z.nativeEnum(PaymentMeansCodes),
    payerIBAN: TokenScheme.optional(),
    payeeIBAN: TokenScheme.optional(),
    payeeProprietaryID: TokenScheme.optional()
})

const TaxBreakdownTypeSchema = z.object({
    calculatedAmount: z.number(),
    typeCode: z.literal(TaxTypeCode),
    exemptionReason: z.string().optional(),
    basisAmount: z.number(),
    categoryCode: z.nativeEnum(TaxCategoryCodeContentType),
    exemptionReasonCode: z.nativeEnum(ExemptionReasonCodeContentType).optional(),
    dueDateTypeCode: z.nativeEnum(TimeReferenceCodeContentType).optional(),
    rateApplicablePercent: z.number().optional()
})

const DocumentLevelAllowanceTypeSchema = z.object({
    calculationPercent: z.number().optional(),
    basisAmount: z.number().optional(),
    actualAmount: z.number(),
    reasonCode: z.nativeEnum(AllowanceReasonCodes).optional(),
    reason: z.string().optional(),
    categoryTradeTax: z.object({
        typeCode: z.literal(TaxTypeCode),
        categoryCode: z.nativeEnum(TaxCategoryCodeContentType),
        rateApplicablePercent: z.number().optional()
    })
})

const DocumentLevelChargeTypeSchema = DocumentLevelAllowanceTypeSchema.extend({
    reasonCode: z.nativeEnum(ChargeReasonCodes).optional()
})

const BasicWLProfileSchema = z.object({
    meta: z.object({
        businessProcessType: TokenScheme.optional(),
        guidelineSpecifiedDocumentContextParameter: z.literal('urn:factur-x.eu:1p0:basicwl')
    }),
    document: z.object({
        id: TokenScheme,
        type: z.nativeEnum(DOCUMENT_CODES),
        dateOfIssue: z.date(),
        notes: z.array(NotesTypeSchema).optional()
    }),
    seller: z.object({
        id: z.array(TokenScheme).optional(),
        globalId: z.array(GlobalIDTypeSchema).optional(),
        name: z.string(),
        specifiedLegalOrganization: z
            .object({
                id: TokenScheme.optional(),
                schemeId: z.nativeEnum(ISO6523_CODELIST).optional(),
                tradingBusinessName: z.string().optional()
            })
            .optional(),
        postalAddress: z.object({
            postcode: TokenScheme.optional(),
            addressLineOne: z.string().optional(),
            addressLineTwo: z.string().optional(),
            addressLineThree: z.string().optional(),
            city: z.string().optional(),
            country: z.nativeEnum(CountryIDContentType),
            countrySubDivision: z.string().optional()
        }),
        UniversalCommunicationAddress: UniversalCommunicationURISchema.optional(),
        taxIdentification: SellerTaxIdentifierTypeSchema
    }),
    buyer: z.object({
        reference: z.string().optional(),
        id: TokenScheme.optional(),
        globalId: GlobalIDTypeSchema.optional(),
        name: z.string(),
        specifiedLegalOrganization: z
            .object({
                id: TokenScheme.optional(),
                schemeId: z.nativeEnum(ISO6523_CODELIST).optional()
            })
            .optional(),
        postalAddress: z.object({
            postcode: TokenScheme.optional(),
            addressLineOne: z.string().optional(),
            addressLineTwo: z.string().optional(),
            addressLineThree: z.string().optional(),
            city: z.string().optional(),
            country: z.nativeEnum(CountryIDContentType),
            countrySubDivision: z.string().optional()
        }),
        UniversalCommunicationAddress: UniversalCommunicationURISchema.optional(),
        taxIdentification: TaxIdentifierTypeSchema.optional()
    }),
    sellerTaxRepresentative: z
        .object({
            name: z.string(),
            postalAddress: z.object({
                postcode: TokenScheme.optional(),
                addressLineOne: z.string().optional(),
                addressLineTwo: z.string().optional(),
                addressLineThree: z.string().optional(),
                city: z.string().optional(),
                country: z.nativeEnum(CountryIDContentType),
                countrySubDivision: z.string().optional()
            }),
            taxIdentification: TaxIdentifierTypeSchema.optional()
        })
        .optional(),
    referencedDocuments: z
        .object({
            orderReference: TokenScheme.optional(),
            contractReference: TokenScheme.optional(),
            advanceShippingNotice: TokenScheme.optional(),
            referencedInvoice: z
                .array(
                    z.object({
                        documentId: TokenScheme,
                        issueDate: z.date().optional()
                    })
                )
                .optional()
        })
        .optional(),
    delivery: z.object({
        recipient: z
            .object({
                id: TokenScheme.optional(),
                globalId: GlobalIDTypeSchema.optional(),
                name: z.string(),
                postalAddress: z.object({
                    postcode: TokenScheme.optional(),
                    addressLineOne: z.string().optional(),
                    addressLineTwo: z.string().optional(),
                    addressLineThree: z.string().optional(),
                    city: z.string().optional(),
                    country: z.nativeEnum(CountryIDContentType),
                    countrySubDivision: z.string().optional()
                })
            })
            .optional(),
        deliveryDate: z.date()
    }),
    paymentInformation: z.object({
        creditorReference: TokenScheme.optional(),
        paymentReference: z.string().optional(),
        payee: z
            .object({
                id: TokenScheme.optional(),
                globalId: GlobalIDTypeSchema.optional(),
                name: z.string(),
                specifiedLegalOrganization: z
                    .object({
                        id: TokenScheme.optional(),
                        schemeId: z.nativeEnum(ISO6523_CODELIST).optional()
                    })
                    .optional()
            })
            .optional(),
        paymentMeans: z.array(PaymentMeansTypeSchema).optional(),
        paymentPeriod: z
            .object({
                startDate: z.date().optional(),
                endDate: z.date().optional()
            })
            .optional(),
        paymentTerms: z
            .object({
                description: z.string().optional(),
                dueDate: z.date().optional(),
                directDebitMandateID: TokenScheme.optional()
            })
            .optional(),
        SpecifiedTradeAccountingAccount: TokenScheme.optional()
    }),
    monetarySummary: z
        .object({
            currency: z.nativeEnum(CURRENCY_ID),
            sumWithoutAllwancesAndCharges: z.number(),
            documentLevelAllowances: z.array(DocumentLevelAllowanceTypeSchema).optional(),
            allowanceTotalAmount: z.number().optional(),
            documentLevelCharges: z.array(DocumentLevelChargeTypeSchema).optional(),
            chargeTotalAmount: z.number().optional(),
            sumWithoutTax: z.number(),
            taxBreakdown: z.array(TaxBreakdownTypeSchema),
            taxTotal: z.number().optional(),
            taxCurrency: z.nativeEnum(CURRENCY_ID).optional(),
            taxTotalInTaxCurrency: z.number().optional(),
            grandTotal: z.number(),
            prepaidAmount: z.number().optional(),
            openAmount: z.number()
        })
        .refine(
            data => {
                // If taxTotalInTaxCurrency is defined, taxCurrency must also be defined
                if (data.taxTotalInTaxCurrency) {
                    return data.taxCurrency !== undefined
                }
                return true
            },
            {
                message: 'taxCurrency must be set when taxTotalInTaxCurrency is set',
                path: ['taxCurrency']
            }
        )
})

// Typen ableiten
export type BasicWLProfile = z.infer<typeof BasicWLProfileSchema>

export const isBasicWLProfile = (data: unknown): data is BasicWLProfile => {
    const result = BasicWLProfileSchema.safeParse(data)

    if (!result.success) {
        console.log(result.error.errors)
    }
    return result.success
}

/*
// --- DEFINITION OF THE BASICWL PROFILE AS TS INTERFACE (TRANSLATED BY AI TO ZOD SCHEME) ---

export interface NotesType {
    content: string
    subjectCode?: SubjectCodes
}

export interface GlobalIDType {
    id: Token
    identificationScheme: ISO6523_CODELIST
}

export interface UniversalCommunicationURI {
    URIID: Token
    ElectronicAddressScheme: EAS_Scheme
}

export interface PaymentMeansType {
    paymentType: PaymentMeansCodes
    payerIBAN?: Token
    payeeIBAN?: Token
    payeeProprietaryID?: Token
}

export interface TaxBreakdownType {
    calculatedAmount: number
    typeCode: TaxTypeCodeContentType
    exemptionReason?: string
    basisAmount: number
    categoryCode: TaxCategoryCodeContentType
    exemptionReasonCode?: ExemptionReasonCodeContentType
    dueDateTypeCode?: TimeReferenceCodeContentType
    rateApplicablePercent?: number
}

export interface DocumentLevelAllowanceType {
    calculationPercent?: number
    basisAmount?: number
    actualAmount: number
    reasonCode?: AllowanceReasonCodes
    reason?: string
    categoryTradeTax: {
        typeCode: TaxTypeCodeContentType
        categoryCode: TaxCategoryCodeContentType
        rateApplicablePercent?: number
    }
}

export type DocumentLevelChargeType = Omit<DocumentLevelAllowanceType, 'reasonCode'> & {
    reasonCode?: ChargeReasonCodes
}


export interface BasicWLProfile {
    meta: {
        businessProcessType?: IDType
        guidelineSpecifiedDocumentContextParameter: 'urn:factur-x.eu:1p0:basicwl'
    }
    document: {
        id: IDType
        type: DocumentCodeType
        dateOfIssue: Date
        notes?: NotesType[]
    }
    seller: {
        id?: Token[]
        globalId?: GlobalIDType[]
        name: string
        specifiedLegalOrganization?: {
            id?: Token
            schemeId?: ISO6523_CODELIST
            tradingBusinessName?: string
        }
        postalAddress: {
            postcode?: Token
            addressLineOne?: string
            addressLineTwo?: string
            addressLineThree?: string
            city?: string
            country: CountryIDType
            countrySubDivision?: string
        }
        UniversalCommunicationAddress?: UniversalCommunicationURI
        taxIdentification: TaxIdentifierType
    }
    buyer: {
        reference?: string // Explanation @https://www.e-rechnung-bund.de/faq/leitweg-id/
        id?: Token
        globalId?: GlobalIDType
        name: string
        specifiedLegalOrganization?: {
            id?: Token
            schemeId?: ISO6523_CODELIST
        }
        postalAddress: {
            postcode?: Token
            addressLineOne?: string
            addressLineTwo?: string
            addressLineThree?: string
            city?: string
            country: CountryIDType
            countrySubDivision?: string
        }
        UniversalCommunicationAddress?: UniversalCommunicationURI
        taxIdentification?: {
            taxId: Token
        }
    }
    sellerTaxRepresentative?: {
        name: string
        postalAddress: {
            postcode?: Token
            addressLineOne?: string
            addressLineTwo?: string
            addressLineThree?: string
            city?: string
            country: CountryIDType
            countrySubDivision?: string
        }
        taxIdentification?: {
            taxId: Token
        }
    }
    referencedDocuments: {
        orderReference?: Token
        contractReference?: Token
        advanceShippingNotice?: Token
        referencedInvoice?: {
            documentId: Token
            issueDate?: Date
        }
    }
    delivery: {
        recipient?: {
            id?: Token
            globalId?: GlobalIDType
            name: string
            postalAddress: {
                postcode?: Token
                addressLineOne?: string
                addressLineTwo?: string
                addressLineThree?: string
                city?: string
                country: CountryIDType
                countrySubDivision?: string
            }
        }
        deliveryDate: Date
    }
    paymentInformation: {
        creditorReference?: Token
        paymentReference?: string
        payee?: {
            id?: Token
            globalId?: GlobalIDType
            name: string
            specifiedLegalOrganization?: {
                id?: Token
                schemeId?: ISO6523_CODELIST
            }
        }
        paymentMeans?: PaymentMeansType[] // SpecifiedTradeSettlementPaymentMeans
        paymentPeriod?: {
            // BillingSpecifiedPeriod
            startDate?: Date
            endDate?: Date
        }
        paymentTerms?: {
            // SpecifiedTradePaymentTerms
            description?: string
            dueDate?: Date
            directDebitMandateID?: Token
        }
        SpecifiedTradeAccountingAccount?: Token
    }
    monetarySummary: {
        sumWithoutAllwancesAndCharges: number
        documentLevelAllowances?: DocumentLevelAllowanceType[] // SpecifiedTradeAllowanceCharge
        allowanceTotalAmount?: number
        documentLevelCharges?: DocumentLevelChargeType[] // SpecifiedTradeAllowanceCharge
        chargeTotalAmount?: number
        currency: CurrencyCodeType
        sumWithoutTax: number
        taxBreakdown: TaxBreakdownType[]
        taxCurrency?: CurrencyCodeType
        taxTotal?: number
        taxTotalInTaxCurrency?: number
        grandTotal: number
        prepaidAmount?: number
        openAmount: number
    }
}
*/
