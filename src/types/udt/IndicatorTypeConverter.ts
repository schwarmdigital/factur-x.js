import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZIndicatorType = z.boolean()

export type IndicatorType = z.infer<typeof ZIndicatorType>

export const ZIndicatorTypeXml = z.object({
    'udt:Indicator': z.object({
        '#text': z.enum(['true', 'false'])
    })
})

export type IndicatorTypeXml = z.infer<typeof ZIndicatorTypeXml>

export class IndicatorTypeConverter extends BaseTypeConverter<IndicatorType, IndicatorTypeXml> {
    _toValue(xml: IndicatorTypeXml) {
        const { success, data } = ZIndicatorTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        return data['udt:Indicator']['#text'] === 'true'
    }

    _toXML(value: IndicatorType): IndicatorTypeXml {
        const { success, data } = ZIndicatorType.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            'udt:Indicator': {
                '#text': data ? 'true' : 'false'
            }
        }
    }
}
