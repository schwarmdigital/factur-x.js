import { DOCUMENT_TYPES } from "./documentTypes"

export default interface ProfileBasic {
    meta: {
        businessProcessType: string // BT-23
        specificationProfile: string // BT-24
    }
    documentId: string // BT-1
    documentDate: Date // BT-2
    documentType: DOCUMENT_TYPES // BT-3
    notes?: { text: string, code?: string }[] // BG-1
    buyerReference?: string
    seller: {
        sellerId?: string // BT-29
        sellerName: string // BT-27
        postalAddress: {
            address?: (string | undefined)[], // BT-35 BT-36 BT-162
            postCode?: string // BT-38
            city?: string // BT-37
            countryCode: string // BT-40
            countrySubdivision?: string // BT-39
        }
        taxRegistrations: {
            type: string // BT-31-0
            value?: string // BT-31
        }[]
    }
    buyer: {
        buyerId?: string // BT-46
        buyerName: string // BT-44
        postalAddress: {
            address?: (string | undefined)[], // BT-50 BT-51 BT-163
            postCode?: string // BT-53
            city?: string // BT-52
            countryCode: string // BT-55
            countrySubdivision?: string // BT-54
        }
        taxRegistrations: {
            type: string // BT-48-0
            value?: string // BT-48
        }[]
    }
    shipTo?: {
        shipToId?: string // BT-71
        shipToName?: string // BT-70
        postalAddress?: {
            address?: (string | undefined)[], // BT-75 BT-76 BT-165
            postCode?: string // BT-78
            city?: string // BT-77
            countryCode: string // BT-80
            countrySubdivision?: string // BT-79
        }
    }
    shippingDate?: Date // BT-72
}
