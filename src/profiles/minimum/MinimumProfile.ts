import { z } from 'zod'

import { ZSpecifiedTaxRegistrationsType } from '../../types/ram/SpecifiedTaxRegistrationsTypeConverter'
import { ZAmountType } from '../../types/udt/AmountTypeConverter'
import { ZDateTimeType } from '../../types/udt/DateTimeTypeConverter'
import { ZIdType } from '../../types/udt/IdTypeConverter'
import { ZIdTypeWithScheme } from '../../types/udt/IdTypeWithSchemeConverter'
import { ZTextType } from '../../types/udt/TextTypeConverter'

export const ZMinimumProfile = z.object({
    meta: z.object({
        businessProcessType: ZIdType.optional(),
        guidelineSpecifiedDocumentContextParameter: z.literal('urn:factur-x.eu:1p0:minimum')
    }),
    document: z.object({
        id: ZIdType,
        type: ZTextType, // TODO: specific DocumentTypeType
        currency: ZTextType, // TODO: specific CurrencyType
        dateOfIssue: ZDateTimeType
    }),
    seller: z.object({
        name: ZTextType,
        specifiedLegalOrganization: ZIdTypeWithScheme.optional(),
        postalAddress: z.object({
            country: ZTextType
        }),
        taxIdentification: ZSpecifiedTaxRegistrationsType
    }),
    buyer: z.object({
        reference: ZTextType.optional(), // Explanation @https://www.e-rechnung-bund.de/faq/leitweg-id/
        name: ZTextType,
        specifiedLegalOrganization: ZIdTypeWithScheme.optional(),
        orderReference: ZTextType.optional()
    }),
    totals: z.object({
        netTotal: ZAmountType,
        taxTotal: ZAmountType,
        grossTotal: ZAmountType,
        dueTotal: ZAmountType
    })
})

export type MinimumProfile = z.infer<typeof ZMinimumProfile>

export function isMinimumProfile(data: unknown): data is MinimumProfile {
    return ZMinimumProfile.safeParse(data).success
}
