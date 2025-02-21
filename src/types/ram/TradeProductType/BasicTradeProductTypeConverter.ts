/*
TODO
import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../../BaseTypeConverter'

export const ZBasicTradeProductType = z.object({})

export type BasicTradeProductType = z.infer<typeof ZBasicTradeProductType>

export const ZBasicTradeProductTypeXml = z.object({})

export type BasicTradeProductTypeXml = z.infer<typeof ZBasicTradeProductTypeXml>

export class BasicTradeProductTypeConverter extends BaseTypeConverter<BasicTradeProductType, BasicTradeProductTypeXml> {
    _toValue(xml: BasicTradeProductTypeXml) {
        const content = xml['']['']
        if (!content) {
            throw new TypeConverterError('INVALID_XML')
        }

        const value = {}

        const { success, data } = ZBasicTradeProductType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return data
    }

    _toXML(value: BasicTradeProductType): BasicTradeProductTypeXml {
        const { success, data } = ZBasicTradeProductType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const xml: BasicTradeProductTypeXml = {}

        return xml
    }
}*/
