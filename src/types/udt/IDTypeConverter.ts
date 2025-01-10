import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export const ZIDType = z.string()

export type IDType = z.infer<typeof ZIDType>

export const ZIDTypeXml = z.object({
    '#text': z.string()
})

export type IDTypeXml = z.infer<typeof ZIDTypeXml>

export class IDTypeConverter extends BaseTypeConverter<IDType> {
    fromXML(xml: IDTypeXml) {
        const id = xml['#text']
        if (!id) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new IDTypeConverter(id) as this // cast to this
    }

    toXML(): IDTypeXml {
        if (!this.value) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            '#text': this.value
        }
    }
}
