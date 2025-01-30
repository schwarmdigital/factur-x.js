import { DateTime } from 'luxon'
import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

const DATE_FORMATS = {
    '102': 'yyyyMMdd'
}

export const ZDateTimeType = z.date()
export type DateTimeType = z.infer<typeof ZDateTimeType>

export const ZDateTimeTypeXml = z.object({
    'udt:DateTimeString': z.object({
        '#text': z.string(),
        '@format': z.literal('102')
    })
})

export type DateTimeTypeXml = z.infer<typeof ZDateTimeTypeXml>

export class DateTimeTypeConverter extends BaseTypeConverter<DateTimeType, DateTimeTypeXml> {
    _toValue(xml: DateTimeTypeXml) {
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

        return dt.toJSDate()
    }

    _toXML(value: DateTimeType): DateTimeTypeXml {
        const { success, data } = ZDateTimeType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const dt = DateTime.fromJSDate(data)

        return {
            'udt:DateTimeString': {
                '#text': dt.toFormat(DATE_FORMATS['102']),
                '@format': '102'
            }
        }
    }
}
