import { DateTime } from 'luxon'
import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { DateTimeType, ZDateTimeType } from '../udt/DateTimeTypeConverter'

const DATE_FORMATS = {
    '102': 'yyyyMMdd'
}

export const ZDateTimeTypeXml_qdt = z.object({
    'qdt:DateTimeString': z.object({
        '#text': z.string(),
        '@format': z.literal('102')
    })
})

export type DateTimeTypeXml_qdt = z.infer<typeof ZDateTimeTypeXml_qdt>

export class DateTimeTypeConverter_qdt extends BaseTypeConverter<DateTimeType, DateTimeTypeXml_qdt> {
    _toValue(xml: DateTimeTypeXml_qdt) {
        const { success, data } = ZDateTimeTypeXml_qdt.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        const dt = DateTime.fromFormat(
            data['qdt:DateTimeString']['#text'],
            DATE_FORMATS[data['qdt:DateTimeString']['@format']]
        )
        if (!dt || !dt.isValid) {
            throw new TypeConverterError('INVALID_XML')
        }

        return dt.toJSDate()
    }

    _toXML(value: DateTimeType): DateTimeTypeXml_qdt {
        const { success, data } = ZDateTimeType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const dt = DateTime.fromJSDate(data)

        return {
            'qdt:DateTimeString': {
                '#text': dt.toFormat(DATE_FORMATS['102']),
                '@format': '102'
            }
        }
    }
}
