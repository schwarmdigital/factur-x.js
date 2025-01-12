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
        const { success, data } = ZTextTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new TextTypeConverter(data['#text']) as this // cast to this
    }

    toXML(): TextTypeXml {
        if (this.value === undefined) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            '#text': this.value
        }
    }
}
