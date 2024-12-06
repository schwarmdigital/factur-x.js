import type { TaxIdentifierType } from '../../types/additionalTypes'
import type { CountryIDType, CurrencyCodeType, DocumentCodeType } from '../../types/qdt'
import type { AmountType, DateTimeType, IDType, IDTypeWithScheme } from '../../types/udt/index.js'

/** @see {isMinimumProfile} ts-auto-guard:type-guard */
export interface MinimumProfile {
    meta: {
        businessProcessType?: IDType
        guidelineSpecifiedDocumentContextParameter: 'urn:factur-x.eu:1p0:minimum'
    }
    document: {
        id: IDType
        type: DocumentCodeType
        currency: CurrencyCodeType
        dateOfIssue: DateTimeType
    }
    seller: {
        name: string
        specifiedLegalOrganization?: IDTypeWithScheme
        postalAddress: {
            country: CountryIDType
        }
        taxIdentification: TaxIdentifierType
    }
    buyer: {
        reference?: string // Explanation @https://www.e-rechnung-bund.de/faq/leitweg-id/
        name: string
        specifiedLegalOrganization?: IDTypeWithScheme
        orderReference?: IDType
    }
    totals: {
        netTotal: AmountType
        taxTotal: AmountType
        grossTotal: AmountType
        dueTotal: AmountType
    }
}
