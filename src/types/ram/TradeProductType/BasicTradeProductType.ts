import { z } from 'zod'

import { ZIdType, ZIdTypeXml } from '../../udt/IdTypeConverter'
import { ZIdTypeWithRequiredSchemeXml } from '../../udt/IdTypeWithRequiredlSchemeConverter'
import { ZTextType } from '../../udt/TextTypeConverter'
import { ZNoteType, ZNoteTypeXml } from '../NoteTypeConverter'

export const ZBasicTradeProductType = z.object({})

export type BasicTradeProductType = z.infer<typeof ZBasicTradeProductType>

export const ZBasicTradeProductTypeXml = z.object({
    'ram:AssociatedDocumentLineDocument': z.object({
        'ram:LineID': ZIdTypeXml,
        'ram:IncludedNote': ZNoteTypeXml
    }),
    'ram:SpecifiedTradeProduct': z.object({
        'ram:GlobalID': ZIdTypeWithRequiredSchemeXml,
        'ram:Name': ZTextType
    })
    //'ram:SpecifiedLineTradeAgreement':
})

export type BasicTradeProductTypeXml = z.infer<typeof ZBasicTradeProductTypeXml>
