import { DateTime } from 'luxon'
import xpath from 'xpath'
import { isArrayOfNodes } from 'xpath'
import { DOMParser, XMLSerializer } from "@xmldom/xmldom"

const namespaces = {
    xsi: 'http://www.w3.org/2001/XMLSchema-instance',
    qdt: 'urn:un:unece:uncefact:data:standard:QualifiedDataType:100',
    udt: 'urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100',
    rsm: 'urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100',
    ram: 'urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100'
}
const select = xpath.useNamespaces(namespaces)

export class XMLDocument {
    public data: string | Buffer
    private dom: Document

    constructor(xml: string | Buffer) {
        this.data = xml

        const parser = new DOMParser()
        this.dom = parser.parseFromString(xml.toString(), 'text/xml')
    }

    public getCode(xpath: string): string | undefined {
        const code = select(xpath, this.dom)?.toString()
        return code && code !== '' ? code : undefined
    }

    public getRequiredCode(xpath: string): string {
        const code = this.getCode(xpath)
        if (!code) {
            throw new Error('XML does not contain Code at ' + xpath)
        }
        return code
    }

    public getDate(xpath: string): Date | undefined {
        const str = select(xpath, this.dom)?.toString()
        if (!str) {
            return
        }
        const dt = DateTime.fromFormat(str, 'yyyyMMdd')
        if (!dt.isValid) {
            return
        }
        return dt.toJSDate()
    }

    public getRequiredDate(xpath: string): Date {
        const d = this.getDate(xpath)
        if (!d) {
            throw new Error('XML does not contain Date at ' + xpath)
        }
        return d
    }

    public getIdentifier(xpath: string): string | undefined {
        const identifier = select(xpath, this.dom)?.toString()
        return identifier && identifier !== '' ? identifier : undefined
    }

    public getRequiredIdentifier(xpath: string): string {
        const identifier = this.getIdentifier(xpath)
        if (!identifier) {
            throw new Error('XML does not contain Identifier at ' + xpath)
        }
        return identifier
    }

    public getNodes(xpath: string): XMLDocument[] {
        const result = select(xpath, this.dom)
        return isArrayOfNodes(result) ? result.map(node => new XMLDocument(new XMLSerializer().serializeToString(node))) : []
    }

    public getText(xpath: string): string | undefined {
        const text = select(xpath, this.dom)?.toString()
        return text && text !== '' ? text : undefined
    }

    public getRequiredText(xpath: string): string {
        const text = this.getText(xpath)
        if (!text) {
            throw new Error('XML does not contain Text at ' + xpath)
        }
        return text
    }
}
