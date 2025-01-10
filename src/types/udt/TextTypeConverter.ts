import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZTextType = z.string()

export type TextType = z.infer<typeof ZTextType>

export const ZTextTypeXml = z.object({
    '#text': z.string()
})

export type TextTypeXml = z.infer<typeof ZTextTypeXml>

export class TextTypeConverter extends BaseTypeConverter<TextType> {
    fromXML(xml: TextTypeXml) {
        const text = xml['#text']
        if (!text) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new TextTypeConverter(text) as this // cast to this
    }

    toXML(): TextTypeXml {
        if (!this.value) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            '#text': this.value
        }
    }
}
