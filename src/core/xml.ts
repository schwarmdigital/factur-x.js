import { XMLBuilder, XMLParser } from 'fast-xml-parser'

const options = {
    ignoreAttributes: false,
    attributeNamePrefix: '@',
    allowBooleanAttributes: true,
    suppressEmptyNode: true,
    parseTagValue: false,
    alwaysCreateTextNode: true
}

const builder = new XMLBuilder(options)
const parser = new XMLParser(options)

export function buildXML(obj: object): string {
    const xml = builder.build(obj)
    if (!xml) {
        throw new Error('Failed to build XML')
    }

    return xml
}

export function parseXML(buf: string | Buffer): object {
    const xml = parser.parse(buf)
    if (!xml) {
        throw new Error('Failed to parse XML')
    }

    return xml
}
