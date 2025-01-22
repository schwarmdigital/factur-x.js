import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { ZIdType } from './IdTypeConverter'

// Helper function to create Zod enum schema with proper type inference
function createScheme<T extends string = string>(enumObj?: Record<string, T>) {
    return enumObj ? z.nativeEnum(enumObj) : z.string()
}

// Generic type and schema creator with explicit type casting
export function ZIdTypeWithRequiredScheme<T extends string = string>(enumObj?: Record<string, T>) {
    return z.object({
        id: ZIdType,
        scheme: createScheme<T>(enumObj)
    }) as z.ZodType<IdTypeWithRequiredScheme<T>>
}

export interface IdTypeWithRequiredScheme<T extends string = string> {
    id: string
    scheme: T
}

export const ZIdTypeWithRequiredSchemeXml = z.object({
    '#text': z.string(),
    '@schemeID': z.string()
})

export type IdTypeWithRequiredSchemeXml = z.infer<typeof ZIdTypeWithRequiredSchemeXml>

export class IdTypeWithRequiredSchemeConverter<T extends string = string> extends BaseTypeConverter<
    IdTypeWithRequiredScheme<T>,
    IdTypeWithRequiredSchemeXml
> {
    private readonly schema: z.ZodType<IdTypeWithRequiredScheme<T>>

    constructor(enumObj?: Record<string, T>) {
        super()
        this.schema = ZIdTypeWithRequiredScheme<T>(enumObj)
    }

    toValue(xml: IdTypeWithRequiredSchemeXml): IdTypeWithRequiredScheme<T> {
        const { success: successXML, data: dataXML } = ZIdTypeWithRequiredSchemeXml.safeParse(xml)
        if (!successXML) {
            throw new TypeConverterError('INVALID_XML')
        }

        const value = {
            id: dataXML['#text'],
            scheme: dataXML['@schemeID'] as T
        }

        const { success, data } = this.schema.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return data
    }

    toXML(value: IdTypeWithRequiredScheme<T>): IdTypeWithRequiredSchemeXml {
        const { success, data } = this.schema.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            '#text': data.id,
            '@schemeID': data.scheme
        }
    }
}
