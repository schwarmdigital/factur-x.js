import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { ZTokenType } from '../xs/TokenConverter'

export const ZIdType = ZTokenType

export type IdType = z.infer<typeof ZIdType>

export const ZIdTypeXml = z.object({
    '#text': z.string()
})

export type IdTypeXml = z.infer<typeof ZIdTypeXml>

export class IdTypeConverter extends BaseTypeConverter<IdType, IdTypeXml> {
    toValue(xml: IdTypeXml) {
        const { success, data } = ZIdTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        return data['#text']
    }

    toXML(value: IdType): IdTypeXml {
        const { success, data } = ZIdType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            '#text': data
        }
    }
}
