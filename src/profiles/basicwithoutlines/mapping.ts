import { IdTypeConverter } from '../../types/udt/IdTypeConverter.js'
// import type { MappingItem } from '../convert.js'
import type { SimplifiedMappingItem } from '../convert.js'
import MinimumProfileMapping from '../minimum/mapping.js'

// import type { BasicWithoutLinesProfile } from './BasicWithoutLinesProfile.js'

// const mapping: MappingItem<BasicWithoutLinesProfile, BasicWithoutLinesProfileXml>[] = [
const mapping: SimplifiedMappingItem[] = [
    ...MinimumProfileMapping
    // TODO:
    // {
    //     obj: 'notes',
    //     xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IncludedNote',
    //     arrayMap: [], // @deprecated
    //     converter: new NoteTypeConverter()
    // },
    // {
    //     obj: 'seller.id',
    //     xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:ID',
    //     converter: new IdTypeConverter()
    // },
    // {
    //     obj: 'seller.globalId',
    //     xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:GlobalID',
    //     type: 'string', // @deprecated
    //     converter: new IDTypeWithSchemeConverter()
    // },
    // {
    //     obj: 'buyer.id',
    //     xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:ID',
    //     type: 'string', // @deprecated
    //     converter: new IdTypeConverter()
    // },
    // {
    //     obj: 'buyer.globalId',
    //     xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:GlobalID',
    //     type: 'string', // @deprecated
    //     converter: new IDTypeWithSchemeConverter()
    // }
]

export default mapping
