import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZTokenType = z
    .string()
    .min(1)
    .transform(str => {
        // Apply all corrections in sequence:
        return str
            .trim() // Remove leading/trailing spaces
            .replace(/[\n\t]/g, ' ') // Replace newlines and tabs with spaces
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    })

export type TokenType = z.infer<typeof ZTokenType>

export const ZTokenTypeXml = z.object({
    '#text': z.string()
})

export type TokenTypeXml = z.infer<typeof ZTokenTypeXml>

export class TokenTypeConverter extends BaseTypeConverter<TokenType, TokenTypeXml> {
    toValue(xml: TokenTypeXml) {
        const { success, data } = ZTokenTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        return data['#text']
    }

    toXML(value: TokenType): TokenTypeXml {
        const { success, data } = ZTokenType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            '#text': data
        }
    }
}
