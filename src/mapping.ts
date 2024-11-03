import { XMLBuilder } from 'fast-xml-parser'
import { XMLDocument } from './xml'
import objectPath from 'object-path'

interface MiniProfile {
    documentId: string,
    meta: {
        businessProcessType: string
    }
    seller: {
        name: string
        postalAddress: {
            address: (string | null)[]
        }
    }
    buyer: {
        name: string
        postalAddress: {
            address: (string | null)[]
        }
    }
}

type ArrayDotNotation<T, Prefix extends string> = T extends (infer U)[]
    ? `${Prefix}.${number}` | (U extends object ? DotNotation<U, `${Prefix}.${number}.`> : never)
    : never;

// Main DotNotation type that delegates to ArrayDotNotation for arrays
type DotNotation<T, Prefix extends string = ''> = {
    [K in keyof T & string]:
        T[K] extends any[]
            ? `${Prefix}${K}` | ArrayDotNotation<T[K], `${Prefix}${K}`>
            : T[K] extends object
                ? `${Prefix}${K}` | DotNotation<T[K], `${Prefix}${K}.`>
                : `${Prefix}${K}`
}[keyof T & string]

interface MappingItem {
    obj: DotNotation<MiniProfile>
    xml: string
    default?: string
}

const mapping: MappingItem[] = [
    { obj: 'documentId', xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:ID' },
    { obj: 'meta.businessProcessType', xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:BusinessProcessSpecifiedDocumentContext.ram:ID', default: 'A1' },
    { obj: 'seller.name', xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:Name' },
    { obj: 'seller.postalAddress.address.0', xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineOne' },
    { obj: 'seller.postalAddress.address.1', xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineTwo' },
    { obj: 'seller.postalAddress.address.2', xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:PostalTradeAddress.ram:LineThree' },
    { obj: 'buyer.name', xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:Name' },
    { obj: 'buyer.postalAddress.address.0', xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineOne' },
    { obj: 'buyer.postalAddress.address.1', xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineTwo' },
    { obj: 'buyer.postalAddress.address.2', xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:PostalTradeAddress.ram:LineThree' },
]

export function xml2obj(xml: XMLDocument): MiniProfile {
    const out: MiniProfile = {} as MiniProfile

    for (const item of mapping) {
        const value = objectPath.get(xml.dom, item.xml, item.default)
        objectPath.set(out, item.obj, value)
    }

    return out
}

export function obj2xml(obj: MiniProfile): XMLDocument {
    const tmp = {}

    for (const item of mapping) {
        const value = objectPath.get(obj, item.obj)
        objectPath.set(tmp, item.xml, value)
    }

    const builder = new XMLBuilder()
    return builder.build(tmp)
}

export default mapping
