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

export class IndicatorTypeConverter extends BaseTypeConverter<IndicatorType> {
    fromXML(xml: IndicatorTypeXml) {
        const { success, data } = ZIndicatorTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new IndicatorTypeConverter(data.Indicator['#text'] === 'true') as this // cast to this
    }

    toXML(): IndicatorTypeXml {
        if (this.value === undefined) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            Indicator: {
                '#text': this.value ? 'true' : 'false'
            }
        }
    }
}
