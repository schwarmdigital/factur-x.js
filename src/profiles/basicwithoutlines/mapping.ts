import { NoteTypeConverter } from '../../types/ram/index.js'
import { IDTypeWithSchemeConverter, IdTypeConverter } from '../../types/udt/index.js'
import type { MappingItem } from '../convert.js'
import MinimumProfileMapping from '../minimum/mapping.js'
import type { BasicWithoutLinesProfile } from './BasicWithoutLinesProfile.js'

const mapping: MappingItem<BasicWithoutLinesProfile>[] = [
    ...MinimumProfileMapping,
    {
        obj: 'notes',
        xml: 'rsm:CrossIndustryInvoice.rsm:ExchangedDocument.ram:IncludedNote',
        type: 'array',
        arrayMap: [], // @deprecated
        converter: new NoteTypeConverter()
    },
    {
        obj: 'seller.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:ID',
        type: 'string', // @deprecated
        converter: new IdTypeConverter()
    },
    {
        obj: 'seller.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:SellerTradeParty.ram:GlobalID',
        type: 'string', // @deprecated
        converter: new IDTypeWithSchemeConverter()
    },
    {
        obj: 'buyer.id',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:ID',
        type: 'string', // @deprecated
        converter: new IdTypeConverter()
    },
    {
        obj: 'buyer.globalId',
        xml: 'rsm:CrossIndustryInvoice.rsm:SupplyChainTradeTransaction.ram:ApplicableHeaderTradeAgreement.ram:BuyerTradeParty.ram:GlobalID',
        type: 'string', // @deprecated
        converter: new IDTypeWithSchemeConverter()
    }
]

export default mapping
