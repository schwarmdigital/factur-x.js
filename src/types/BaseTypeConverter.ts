export abstract class BaseTypeConverter<ValueType, XmlType> {
    abstract toValue(xml: any): ValueType
    abstract toXML(data: any): XmlType
}

export class TypeConverterError extends Error {
    constructor(code?: 'INVALID_XML' | 'INVALID_VALUE' | 'INVALID_SCHEME' | 'INVALID_STRUCTURE') {
        switch (code) {
            case 'INVALID_XML':
                super(`Received Invalid XML Input`)
                break
            case 'INVALID_VALUE':
                super('Received Invalid Data Value')
                break
            case 'INVALID_SCHEME':
                super('Received Invalid Scheme')
                break
            case 'INVALID_STRUCTURE':
                super('There is an issue in the structure of the parsed data')
                break
            default:
                super()
        }
    }
}
