import { DOMParser } from '@xmldom/xmldom'
import { registerCustomXPathFunction } from 'fontoxpath'
import { readFileSync } from 'fs'
import path from 'path'

registerCustomXPathFunction(
    { namespaceURI: 'http://www.w3.org/2005/xpath-functions', localName: 'document' },
    ['xs:string'],
    'node()*',
    (dynamicContext, filePath: string) => {
        // Resolve filePath relative to this module directory
        const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(__dirname, filePath)
        try {
            const xmlString = readFileSync(absolutePath, 'utf-8')
            const parser = new DOMParser()
            const doc = parser.parseFromString(xmlString, 'text/xml')
            return [doc.documentElement]
        } catch {
            return []
        }
    }
)
