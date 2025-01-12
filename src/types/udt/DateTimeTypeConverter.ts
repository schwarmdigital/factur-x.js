import { DateTime } from 'luxon'
import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

const DATE_FORMATS = {
    '102': 'yyyyMMdd'
}

export const ZDateTimeType = z.object({
    date: z.date(),
    format: z.literal('102')
})

export type DateTimeType = z.infer<typeof ZDateTimeType>

export const ZDateTimeTypeXml = z.object({
    'udt:DateTimeString': z.object({
        '#text': z.string(),
        '@format': z.literal('102').optional().default('102')
    })
})

export type DateTimeTypeXml = z.infer<typeof ZDateTimeTypeXml>

export class DateTimeTypeConverter extends BaseTypeConverter<DateTimeType> {
    fromXML(xml: DateTimeTypeXml) {
        const { success, data } = ZDateTimeTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        const dt = DateTime.fromFormat(
            data['udt:DateTimeString']['#text'],
            DATE_FORMATS[data['udt:DateTimeString']['@format']]
        )
        if (!dt || !dt.isValid) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new DateTimeTypeConverter({
            date: dt.toJSDate(),
            format: data['udt:DateTimeString']['@format']
        }) as this // cast to this
    }

    toXML(): DateTimeTypeXml {
        if (!this.value?.date) {
            throw new TypeConverterError('NO_VALUE')
        }

        const dt = DateTime.fromJSDate(this.value.date)

        return {
            'udt:DateTimeString': {
                '#text': dt.toFormat(DATE_FORMATS[this.value.format]),
                '@format': this.value.format
            }
        }
    }
}
