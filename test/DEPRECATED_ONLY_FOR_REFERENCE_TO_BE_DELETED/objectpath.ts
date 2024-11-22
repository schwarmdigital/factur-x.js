// DEPRECATED

/*import fs from 'node:fs'
import path from 'node:path'
import { FacturX } from '../src'
import { xml2obj, obj2xml } from '../src/profiles'

type TestCases = {
    [k: string]: FacturX | undefined
}

const testCases: TestCases = Object.fromEntries([
    'BASIC_Einfach',
    'BASIC_Taxifahrt'
].map(name => ([name, undefined])))

beforeAll(async () => {
    for (const name of Object.keys(testCases)) {
        testCases[name] = await FacturX.fromPDF(fs.readFileSync(path.join(__dirname, 'pdfs', `${name}.pdf`)))
    }
})

test('xml2obj', () => {
    const t = xml2obj(testCases['BASIC_Einfach']?._raw)
    console.log(JSON.stringify(t, null, 4))
})

test('obj2xml', () => {
    const obj = {
        "documentId": "471102",
        "meta": {
            "businessProcessType": "A1"
        },
        "seller": {
            "name": "Lieferant GmbH",
            "postalAddress": {
                "address": [
                    "Lieferantenstraße 20",
                    null,
                    null
                ]
            }
        },
        "buyer": {
            "name": "Kunden AG Mitte",
            "postalAddress": {
                "address": [
                    "Hans Muster",
                    "Kundenstraße 15",
                    null
                ]
            }
        }
    }

    const t = obj2xml(obj)
    console.log(JSON.stringify(t, null, 4))
})*/
