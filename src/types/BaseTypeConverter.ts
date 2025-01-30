export abstract class BaseTypeConverter<ValueType, XmlType> {
    abstract _toValue(xml: any): ValueType // changed this, to allow to enable easy logging for debugging to find out where problems occured
    abstract _toXML(data: any): XmlType // changed this, to allow to enable easy logging for debugging to find out where problems occured

    toValue(xml: any): ValueType {
        //enable the following line for better debugging
        //console.log(`Converting XML to Value in ${this.constructor.name}:`, { input: xml })
        const result = this._toValue(xml)
        return result
    }

    toXML(data: any): XmlType {
        //enable the following line for better debugging
        //console.log(`Converting Value to XML in ${this.constructor.name}:`, { input: data })
        const result = this._toXML(data)
        return result
    }
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
