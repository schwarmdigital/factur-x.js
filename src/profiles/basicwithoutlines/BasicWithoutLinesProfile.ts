import { z } from 'zod'

import { ZCodeType } from '../../types/CodeTypeConverter.js'
import {
    COUNTRY_ID_CODES,
    CURRENCY_CODES,
    DOCUMENT_TYPE_CODES,
    EAS_SCHEME_CODES,
    ISO6523_CODES
} from '../../types/codes.js'
import { ZNoteType } from '../../types/ram/NoteTypeConverter.js'
import { ZReferencedDocumentType } from '../../types/ram/ReferencedDocumentConverter.js'
import { ZSpecifiedTaxRegistrationsForSellerType } from '../../types/ram/SpecifiedTaxRegistrationsForSellerTypeConverter.js'
import { ZSpecifiedTaxRegistrationsType } from '../../types/ram/SpecifiedTaxRegistrationsTypeConverter.js'
import { ZTradeAllowanceChargeBasicDocumentType } from '../../types/ram/TradeAllowanceChargeType/BasicDocumentLevelAllowanceChargeType.js'
import { ZPaymentMeansType } from '../../types/ram/TradeSettlementPaymentMeansTypeConverter.js'
import { ZTradeTaxType } from '../../types/ram/TradeTaxTypeConverter.js'
import { ZAmountType } from '../../types/udt/AmountTypeConverter.js'
import { ZAmountTypeWithRequiredCurrency } from '../../types/udt/AmountTypeWithRequiredCurrencyConverter.js'
import { ZDateTimeType } from '../../types/udt/DateTimeTypeConverter.js'
import { ZIdType } from '../../types/udt/IdTypeConverter.js'
import { ZIdTypeWithOptionalScheme } from '../../types/udt/IdTypeWithOptionalSchemeConverter.js'
import { ZIdTypeWithRequiredScheme } from '../../types/udt/IdTypeWithRequiredlSchemeConverter.js'
import { ZTextType } from '../../types/udt/TextTypeConverter.js'
import { ZTokenType } from '../../types/xs/TokenConverter.js'

const ZTradePartyType = z.object({
    id: ZIdType.optional(), // in seller this could be an array
    globalId: ZIdTypeWithRequiredScheme(ISO6523_CODES).optional(), // in seller this could be an array
    name: ZTextType, // may be optional on some specific trade parties
    specifiedLegalOrganization: ZIdTypeWithOptionalScheme(ISO6523_CODES).optional(),
    postalAddress: z.object({
        postcode: ZTokenType.optional(),
        addressLineOne: ZTextType.optional(),
        addressLineTwo: ZTextType.optional(),
        addressLineThree: ZTextType.optional(),
        city: ZTextType.optional(),
        country: ZCodeType(COUNTRY_ID_CODES),
        countrySubDivision: ZTextType.optional()
    }),
    universalCommunicationAddressURI: ZIdTypeWithRequiredScheme(EAS_SCHEME_CODES).optional(),
    taxIdentification: ZSpecifiedTaxRegistrationsType.optional()
})

export const ZBasicWithoutLinesProfile = z.object({
    meta: z.object({
        businessProcessType: ZIdType.optional(),
        guidelineSpecifiedDocumentContextParameter: z.literal('urn:factur-x.eu:1p0:basicwl')
    }),
    document: z.object({
        id: ZIdType,
        type: ZCodeType(DOCUMENT_TYPE_CODES),
        dateOfIssue: ZDateTimeType,
        currency: ZCodeType(CURRENCY_CODES),
        notes: ZNoteType.array()
    }),
    seller: ZTradePartyType.extend({
        id: ZIdType.array().optional(),
        globalId: ZIdTypeWithRequiredScheme(ISO6523_CODES).array().optional(),
        specifiedLegalOrganization: z
            .object({
                id: ZIdTypeWithOptionalScheme(ISO6523_CODES).optional(),
                tradingBusinessName: ZTextType.optional()
            })
            .optional(),
        taxIdentification: ZSpecifiedTaxRegistrationsForSellerType.optional()
    }),

    buyer: ZTradePartyType.extend({
        reference: ZTextType.optional()
    }),
    sellerTaxRepresentative: ZTradePartyType.omit({
        id: true,
        globalId: true,
        specifiedLegalOrganization: true,
        universalCommunicationAddressURI: true
    })
        .extend({
            taxIdentification: ZSpecifiedTaxRegistrationsType
        })
        .optional(),
    referencedDocuments: z
        .object({
            orderReference: ZIdType.optional(),
            contractReference: ZIdType.optional(),
            advanceShippingNotice: ZIdType.optional(),
            referencedInvoice: ZReferencedDocumentType.array().optional()
        })
        .optional(),
    delivery: z.object({
        recipient: ZTradePartyType.omit({
            specifiedLegalOrganization: true,
            universalCommunicationAddressURI: true,
            taxIdentification: true
        })
            .extend({ name: ZTextType.optional() })
            .optional(),
        deliveryDate: z.date()
    }),
    paymentInformation: z.object({
        creditorReference: ZIdType.optional(),
        paymentReference: ZTextType.optional(),
        payee: ZTradePartyType.pick({
            id: true,
            globalId: true,
            name: true,
            specifiedLegalOrganization: true
        }).optional(),
        paymentMeans: ZPaymentMeansType.array().optional(),
        paymentPeriod: z
            .object({
                startDate: ZDateTimeType.optional(),
                endDate: ZDateTimeType.optional()
            })
            .optional(),
        paymentTerms: z
            .object({
                description: ZTextType.optional(),
                dueDate: ZDateTimeType.optional(),
                directDebitMandateID: ZIdType.optional()
            })
            .optional(),
        specifiedTradeAccountingAccount: ZIdType.optional()
    }),
    totals: z.object({
        sumWithoutAllowancesAndCharges: ZAmountType,
        documentLevelAllowancesAndCharges: ZTradeAllowanceChargeBasicDocumentType.optional(),
        allowanceTotalAmount: ZAmountType.optional(),
        chargeTotalAmount: ZAmountType.optional(),
        netTotal: ZAmountType,
        taxBreakdown: ZTradeTaxType.array(),
        taxTotal: ZAmountTypeWithRequiredCurrency.array().max(2).optional(),
        taxCurrency: ZCodeType(CURRENCY_CODES).optional(),
        grossTotal: ZAmountType,
        prepaidAmount: ZAmountType.optional(),
        openAmount: ZAmountType
    })
})

export type BasicWithoutLinesProfile = z.infer<typeof ZBasicWithoutLinesProfile>

export function isBasicWithoutLinesProfile(data: unknown): data is BasicWithoutLinesProfile {
    return ZBasicWithoutLinesProfile.safeParse(data).success
}
