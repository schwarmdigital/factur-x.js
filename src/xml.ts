import { DateTime } from 'luxon'
import { XMLParser, XMLBuilder, XMLValidator, X2jOptions } from "fast-xml-parser";
import { DateTimeString } from './types/udt/types';


export class XMLDocument {
    public data: string | Buffer
    public dom: any
    private parser: XMLParser
    private builder: XMLBuilder

    constructor(xml: string | Buffer) {
        this.data = xml

        const options = {
            ignoreAttributes: false,
            attributeNamePrefix: "@",
            allowBooleanAttributes: true,
            suppressEmptyNode: true,
            parseTagValue: false
        };

        this.parser = new XMLParser(options);
        this.builder = new XMLBuilder(options);
        this.dom = this.parser.parse(xml);
    }

    public getDate(dateTimeString: DateTimeString): Date | undefined {
        const regex = /^(20|21)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
        if (!(regex.test(dateTimeString))) {
            return
        }
        const dt = DateTime.fromFormat(dateTimeString.toString(), 'yyyyMMdd')
        if (!dt.isValid) {
            return
        }
        return dt.toJSDate()
    }

    public getRequiredDate(dateTimeString: DateTimeString): Date {
        const d = this.getDate(dateTimeString)
        if (!d) {
            throw new Error(dateTimeString + ' is not a valid Date-Time-String')
        }
        return d
    }


    /*public getCode(xpath: string): string | undefined {
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
    }*/
}
