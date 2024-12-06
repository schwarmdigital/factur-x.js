export abstract class BaseTypeConverter<ValueType> {
    protected readonly value: ValueType | undefined

    constructor(val?: ValueType) {
        this.value = val
    }

    toValue(): ValueType {
        if (!this.value) {
            throw new TypeConverterError('NO_VALUE')
        }
        return this.value
    }

    abstract fromXML(xml: object): this
    abstract toXML(): object
}

export class TypeConverterError extends Error {
    constructor(code?: 'INVALID_XML' | 'NO_VALUE') {
        switch (code) {
            case 'INVALID_XML':
                super(`Received Invalid XML Input`)
                break
            case 'NO_VALUE':
                super('TypeConverter Instance holds no value - forgot to initialize?')
                break
            default:
                super()
        }
    }
}
