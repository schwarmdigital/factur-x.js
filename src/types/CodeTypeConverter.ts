import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from './BaseTypeConverter'

// Helper function to create Zod enum schema with proper type inference
export function ZCodeType<T extends string = string>(enumObj?: Record<string, T>) {
    return (enumObj ? z.nativeEnum(enumObj) : z.string()) as z.ZodType<T>
}

export type CodeType<T extends string = string> = T

export const ZCodeTypeXml = z.object({
    '#text': z.string()
})

export type CodeTypeXml = z.infer<typeof ZCodeTypeXml>

export class CodeTypeConverter<T extends string = string> extends BaseTypeConverter<CodeType<T>, CodeTypeXml> {
    private readonly codes: z.ZodType<CodeType<T>>

    constructor(enumObj?: Record<string, T>) {
        super()
        this.codes = ZCodeType<T>(enumObj)
    }

    toValue(xml: CodeTypeXml): CodeType<T> {
        const { success: successXML, data: dataXML } = ZCodeTypeXml.safeParse(xml)
        if (!successXML) {
            throw new TypeConverterError('INVALID_XML')
        }

        const value = dataXML['#text'] as T

        const { success, data } = this.codes.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return data
    }

    toXML(value: CodeType<T>): CodeTypeXml {
        const { success, data } = this.codes.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            '#text': data
        }
    }
}
