import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export type IDType = string

export interface IDTypeXML {
    '#text': string
}

export class IDTypeConverter extends BaseTypeConverter<IDType> {
    fromXML(xml: IDTypeXML) {
        const id = xml['#text']
        if (!id) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new IDTypeConverter(id) as this // cast to this
    }

    toXML(): IDTypeXML {
        if (!this.value) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            '#text': this.value
        }
    }
}
