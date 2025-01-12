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
        const value = xml['Indicator']?.['#text']?.toLowerCase()
        if (!value || !['true', 'false'].includes(value)) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new IndicatorTypeConverter(value === 'true') as this // cast to this
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
