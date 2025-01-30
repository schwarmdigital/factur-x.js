import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZTextType = z.string()

export type TextType = z.infer<typeof ZTextType>

export const ZTextTypeXml = z.object({
    '#text': z.string()
})

export type TextTypeXml = z.infer<typeof ZTextTypeXml>

export class TextTypeConverter extends BaseTypeConverter<TextType, TextTypeXml> {
    _toValue(xml: TextTypeXml) {
        const { success, data } = ZTextTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        return data['#text']
    }

    _toXML(value: TextType): TextTypeXml {
        const { success, data } = ZTextType.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            '#text': data
        }
    }
}
