import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { ZIdType } from './IdTypeConverter'

// Helper function to create Zod enum schema with proper type inference
function createScheme<T extends string = string>(enumObj?: Record<string, T>) {
    return enumObj ? z.nativeEnum(enumObj) : z.string()
}

// Generic type and schema creator with explicit type casting
export function ZIdTypeWithOptionalScheme<T extends string = string>(enumObj?: Record<string, T>) {
    return z.object({
        id: ZIdType,
        scheme: createScheme<T>(enumObj).optional()
    }) as z.ZodType<IdTypeWithOptionalScheme<T>>
}

export interface IdTypeWithOptionalScheme<T extends string = string> {
    id: string
    scheme?: T
}

export const ZIdTypeWithOptionalSchemeXml = z.object({
    '#text': z.string(),
    '@schemeID': z.string().optional()
})

export type IdTypeWithOptionalSchemeXml = z.infer<typeof ZIdTypeWithOptionalSchemeXml>

export class IdTypeWithOptionalSchemeConverter<T extends string = string> extends BaseTypeConverter<
    IdTypeWithOptionalScheme<T>,
    IdTypeWithOptionalSchemeXml
> {
    private readonly schema: z.ZodType<IdTypeWithOptionalScheme<T>>

    constructor(enumObj?: Record<string, T>) {
        super()
        this.schema = ZIdTypeWithOptionalScheme<T>(enumObj)
    }

    _toValue(xml: IdTypeWithOptionalSchemeXml): IdTypeWithOptionalScheme<T> {
        const { success: successXML, data: dataXML } = ZIdTypeWithOptionalSchemeXml.safeParse(xml)
        if (!successXML) {
            throw new TypeConverterError('INVALID_XML')
        }

        const value = {
            id: dataXML['#text'],
            scheme: dataXML['@schemeID'] as T | undefined
        }

        const { success, data } = this.schema.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return data
    }

    _toXML(value: IdTypeWithOptionalScheme<T>): IdTypeWithOptionalSchemeXml {
        const { success, data, error } = this.schema.safeParse(value)
        if (!success) {
            console.log(error.issues)
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            '#text': data.id,
            '@schemeID': data.scheme
        }
    }
}
