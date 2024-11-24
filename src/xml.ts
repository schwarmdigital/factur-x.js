import { XMLBuilder, XMLParser } from 'fast-xml-parser'

export class XMLDocument {
    public data: string
    public dom: any
    private parser: XMLParser
    private builder: XMLBuilder

    constructor(xmlData: string | Buffer)
    constructor(xmlData: object)
    constructor(xmlData: string | Buffer | object) {
        const options = {
            ignoreAttributes: false,
            attributeNamePrefix: '@',
            allowBooleanAttributes: true,
            suppressEmptyNode: true,
            parseTagValue: false,
            alwaysCreateTextNode: true
        }

        this.parser = new XMLParser(options)
        this.builder = new XMLBuilder(options)

        if (xmlData instanceof Buffer || typeof xmlData === 'string') {
            this.data = xmlData.toString()
            this.dom = this.parse(xmlData)
            return
        }

        if (typeof xmlData === 'object') {
            this.dom = xmlData
            this.data = this.build(xmlData)
            return
        }

        throw new Error('XMLDocument can not be constructed as there is no proper data provided')
    }

    public parse(xml: string | Buffer): object | undefined {
        this.data = xml.toString()
        this.dom = this.parser.parse(xml)
        return this.dom
    }

    public build(xml: object): string {
        this.dom = xml
        this.data = this.builder.build(xml)
        return this.data
    }
}
