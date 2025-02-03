import { BaseTypeConverter, TypeConverterError } from './BaseTypeConverter'

export class ArrayConverter<ValueType, XmlType> extends BaseTypeConverter<ValueType[], XmlType[] | XmlType> {
    private converter: BaseTypeConverter<ValueType, XmlType>

    constructor(converter: BaseTypeConverter<ValueType, XmlType>) {
        super()
        this.converter = converter
    }

    _toValue(xmlArray: XmlType[] | XmlType): ValueType[] {
        if (!Array.isArray(xmlArray)) {
            xmlArray = [xmlArray]
        }
        return xmlArray.map(xml => this.converter.toValue(xml))
    }

    _toXML(valueArray: ValueType[]): XmlType[] {
        if (!Array.isArray(valueArray)) {
            throw new TypeConverterError('INVALID_VALUE')
        }
        return valueArray.map(value => this.converter.toXML(value))
    }
}
