import { PDFDict, PDFDocument, PDFName, PDFRawStream, PDFStream, PDFString, decodePDFRawStream } from 'pdf-lib'

import BasicProfileConverter, { BasicProfile } from './profiles/basic/basic.js'
import { SchemeNames, XMLSchemeNames } from './profiles/index.js'
import MinimumProfileConverter, { MinimumProfile } from './profiles/minimum/minimum.js'
import { XMLDocument } from './xml.js'

const FACTUR_X_FILENAME = PDFString.of('factur-x.xml').decodeText()

// TODO: add getVAT() helper on buyer and seller
// TODO: add getValueByBusinessTerm() function (doc.getValueByBusinessTerm('BT-23') === 'A1')

export class FacturX {
    private _data: MinimumProfileConverter | BasicProfileConverter
    private _sourceXml: XMLDocument | undefined

    private pdf: PDFDocument | undefined

    constructor(data: MinimumProfile, profileName: 'MINIMUM')
    constructor(data: BasicProfile, profileName: 'BASIC')
    constructor(data: any, profileName: XMLSchemeNames)
    constructor(data: any, profileName: SchemeNames | XMLSchemeNames) {
        const profileOnly: SchemeNames = profileName.split('_')[0] as SchemeNames
        switch (profileOnly) {
            case 'MINIMUM':
                this._data = new MinimumProfileConverter(data)
                break
            case 'BASIC':
                this._data = new BasicProfileConverter(data)
                break
            default:
                throw new Error('Unknown Profile given')
        }
    }

    get invoice() {
        return this._data.invoice
    }

    // set invoice(data: AnyProfile) {}

    get xml() {
        return this._data.xml
    }

    get profile() {
        return this._data
    }

    public buildXML(): string | undefined {
        const xmlConverter = new XMLDocument(this._data.xml)
        return xmlConverter.data.toString()
    }

    public static async fromPDF(bytes: string | Uint8Array | ArrayBuffer): Promise<FacturX> {
        const pdf = await PDFDocument.load(bytes)

        // Search for factur-x.xml in embedded files
        for (const [_, object] of pdf.context.enumerateIndirectObjects()) {
            if (
                object instanceof PDFDict &&
                object.lookupMaybe(PDFName.of('F'), PDFString)?.decodeText() === FACTUR_X_FILENAME
            ) {
                const stream = object
                    .lookup(PDFName.of('EF'), PDFDict)
                    .lookup(PDFName.of('F'), PDFStream) as PDFRawStream
                const data = decodePDFRawStream(stream).decode()

                const instance = this.fromXML(Buffer.from(data))
                instance.pdf = pdf

                return instance
            }
        }

        throw new Error('could not find factur-x.xml in pdf')
    }

    public static fromXML(xml: string | Buffer): FacturX {
        const doc = new XMLDocument(xml)
        const profile = this.checkProfileBeforeCreation(doc.dom)
        const instance = new FacturX(doc.dom, `${profile}_XML`)
        instance._sourceXml = doc
        return instance
    }

    private static checkProfileBeforeCreation(xmlData: any): SchemeNames {
        const profileId =
            xmlData?.['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocumentContext']?.[
                'ram:GuidelineSpecifiedDocumentContextParameter'
            ]?.['ram:ID']?.['#text']
        if (!profileId) {
            throw new Error('missing profile identifier')
        }

        switch (profileId) {
            case 'urn:factur-x.eu:1p0:minimum':
                return 'MINIMUM'
            case 'urn:factur-x.eu:1p0:basicwl':
                return 'BASICWL'
            case 'urn:cen.eu:en16931:2017#compliant#urn:factur-x.eu:1p0:basic':
                return 'BASIC'
            case 'urn:cen.eu:en16931:2017':
                return 'EN16931'
            case 'urn:cen.eu:en16931:2017#conformant#urn:factur-x.eu:1p0:extended':
                return 'EXTENDED'
            case 'urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0':
                return 'XRECHNUNG'
            default:
                throw new Error(`unknown profile: ${profileId}`)
        }
    }
}
