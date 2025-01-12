import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZIdType = z.string()

export type IdType = z.infer<typeof ZIdType>

export const ZIdTypeXml = z.object({
    '#text': z.string()
})

export type IdTypeXml = z.infer<typeof ZIdTypeXml>

export class IdTypeConverter extends BaseTypeConverter<IdType> {
    fromXML(xml: IdTypeXml) {
        const id = xml['#text']
        if (!id) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new IdTypeConverter(id) as this // cast to this
    }

    toXML(): IdTypeXml {
        if (this.value === undefined) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            '#text': this.value
        }
    }
}
