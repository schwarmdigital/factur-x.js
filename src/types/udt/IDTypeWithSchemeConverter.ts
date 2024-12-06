import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export interface IDTypeWithScheme {
    id: string
    scheme?: string
}

export interface IDTypeWithSchemeXML {
    '#text': string
    '@schemeID'?: string
}

export class IDTypeWithSchemeConverter extends BaseTypeConverter<IDTypeWithScheme> {
    fromXML(xml: IDTypeWithSchemeXML) {
        const id = xml['#text']
        if (!id) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new IDTypeWithSchemeConverter({
            id,
            scheme: xml['@schemeID']
        }) as this // cast to this
    }

    toXML(): IDTypeWithSchemeXML {
        if (!this.value) {
            throw new TypeConverterError('NO_VALUE')
        }

        return {
            '#text': this.value.id,
            '@schemeID': this.value.scheme
        }
    }

    // TODO: validate(validSchemes: string[]): boolean
}
