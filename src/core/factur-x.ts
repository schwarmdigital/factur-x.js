import objectPath from 'object-path'
import { PDFDocument } from 'pdf-lib'

import { BasicProfile } from '../profiles/basic/basic.js'
import { SchemeNames, XMLSchemeNames } from '../profiles/index.js'
import { isMinimumProfile } from '../profiles/minimum/minimum.guard.js'
import MinimumProfileConverter, { MinimumProfile } from '../profiles/minimum/minimum.js'
import FacturXPdf from './pdf.js'
import { buildXML, parseXML } from './xml.js'

export class FacturX {
    private _data: MinimumProfileConverter //| BasicProfileConverter

    private _fromPDF: string | Uint8Array | ArrayBuffer | undefined
    private _fromXML: string | Buffer | undefined

    private _pdf: FacturXPdf | undefined

    constructor(data: MinimumProfile, profileName: 'MINIMUM')
    constructor(data: BasicProfile, profileName: 'BASIC')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(data: any, profileName: XMLSchemeNames)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(data: any, profileName: SchemeNames | XMLSchemeNames) {
        const profileOnly: SchemeNames = profileName.split('_')[0] as SchemeNames
        switch (profileOnly) {
            case 'MINIMUM':
                this._data = new MinimumProfileConverter(data)
                break
            /*case 'BASIC':
                this._data = new BasicProfileConverter(data)
                break*/
            default:
                throw new Error('Unknown Profile given')
        }
    }

    get pdf() {
        return this._pdf
    }

    /**
     * Returns the current Factur-X data
     *
     * @returns An object with the current Factur-X data
     */
    public getObject(): MinimumProfile {
        // TODO: should we deep-clone this here to prevent editing?
        return this._data.invoice
    }

    /**
     * Returns a PDF with Embedded Factur-X XML
     *
     * @param pdfBytes - The PDF the Factur-X XML should be embedded into
     * @returns The given PDF with embedded Factur-X XML
     */
    public async getPDF(replaceXML: false, pdfBytes: string | Uint8Array | ArrayBuffer): Promise<Uint8Array>
    public async getPDF(replaceXML: boolean): Promise<Uint8Array>
    public async getPDF(replaceXML: false, pdfBytes: null, pdfDoc: PDFDocument): Promise<Uint8Array>
    public async getPDF(): Promise<Uint8Array>
    public async getPDF(
        replaceXML?: boolean,
        pdfBytes?: string | Uint8Array | ArrayBuffer | null,
        pdfDoc?: PDFDocument | null
    ): Promise<Uint8Array> {
        if (pdfBytes) {
            this._pdf = await FacturXPdf.createFromNonCompliantPDF(pdfBytes)
        } else if (pdfDoc) {
            this._pdf = await FacturXPdf.createFromPDFDocument(pdfDoc)
        } else if (!replaceXML || !this._pdf) {
            this._pdf = await FacturXPdf.create()
            await this._pdf.createPDFContent(this.getObject())
        }
        return this._pdf.createFacturXPDF(await this.getXML(), this.getObject())
    }

    /**
     * Returns a Factur-X XML with the current data
     *
     * @returns The data of this Factur-X instace as XML
     */
    public async getXML(): Promise<string> {
        return buildXML(this._data.xml)
    }

    public static async fromObject(data: object): Promise<FacturX> {
        // order is important here - most extensive profiles first
        if (isMinimumProfile(data)) {
            return new FacturX(data, 'MINIMUM')
        }

        throw new Error('Unknown or Not Implemented Profile given')
    }

    public static async fromPDF(bytes: string | Uint8Array | ArrayBuffer): Promise<FacturX> {
        const pdf = await FacturXPdf.createFromFacturXPDF(bytes)
        const xml = pdf.extractEmbeddedXML()

        if (!xml) throw new Error('No Embedded Factur-X XML found in PDF')

        const instance = await this.fromXML(Buffer.from(xml))
        instance._fromPDF = bytes
        instance._pdf = pdf

        return instance
    }

    public static async fromXML(xml: string | Buffer): Promise<FacturX> {
        const obj = parseXML(xml)

        let instance: FacturX | undefined

        const profileId = objectPath.get(
            obj,
            'rsm:CrossIndustryInvoice.rsm:ExchangedDocumentContext.ram:GuidelineSpecifiedDocumentContextParameter.ram:ID.#text'
        )

        switch (profileId) {
            case 'urn:factur-x.eu:1p0:minimum':
                instance = new FacturX(obj, 'MINIMUM_XML')
                break
            case 'urn:factur-x.eu:1p0:basicwl':
            case 'urn:cen.eu:en16931:2017#compliant#urn:factur-x.eu:1p0:basic':
            case 'urn:cen.eu:en16931:2017':
            case 'urn:cen.eu:en16931:2017#conformant#urn:factur-x.eu:1p0:extended':
            case 'urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0':
                throw new Error(`Profile not yet implemented: ${profileId}`)
            default:
                throw new Error(`Unknown Profile: ${profileId}`)
        }

        instance._fromXML = xml

        return instance
    }
}
