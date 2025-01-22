import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZIndicatorType = z.boolean()

export type IndicatorType = z.infer<typeof ZIndicatorType>

export const ZIndicatorTypeXml = z.object({
    Indicator: z.object({
        '#text': z.enum(['true', 'false'])
    })
})

export type IndicatorTypeXml = z.infer<typeof ZIndicatorTypeXml>

export class IndicatorTypeConverter extends BaseTypeConverter<IndicatorType, IndicatorTypeXml> {
    toValue(xml: IndicatorTypeXml) {
        const { success, data } = ZIndicatorTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        return data.Indicator['#text'] === 'true'
    }

    toXML(value: IndicatorType): IndicatorTypeXml {
        const { success, data } = ZIndicatorType.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            Indicator: {
                '#text': data ? 'true' : 'false'
            }
        }
    }
}
