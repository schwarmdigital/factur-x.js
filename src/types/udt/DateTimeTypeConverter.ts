import { DateTime } from 'luxon'

// import { parseXML } from '../../core/xml'
import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export interface DateTimeType {
    date: Date
    format: '102'
}

export interface DateTimeTypeXML {
    '#text': string
    '@format': '102'
}

const DATE_FORMATS = {
    '102': 'yyyyMMdd'
}

export class DateTimeTypeConverter extends BaseTypeConverter<DateTimeType> {
    fromXML(xml: DateTimeTypeXML) {
        // const result = typeof xml === 'string' ? parseXML(xml) : xml

        // console.log(result)

        // const keys = Object.keys(result)
        // if (keys.length !== 1) {
        //     throw new TypeConverterError('INVALID_XML')
        // }

        // const key = keys[0] as keyof typeof result

        const format = xml['@format']

        const dt = DateTime.fromFormat(xml['#text'], DATE_FORMATS[format])
        if (!dt || !dt.isValid) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new DateTimeTypeConverter({
            date: dt.toJSDate(),
            format
        }) as this // cast to this
    }

    toXML(): DateTimeTypeXML {
        if (!this.value?.date) {
            throw new TypeConverterError('NO_VALUE')
        }

        const dt = DateTime.fromJSDate(this.value.date)

        return {
            '#text': dt.toFormat(DATE_FORMATS[this.value.format]),
            '@format': this.value.format
        }
    }
}
