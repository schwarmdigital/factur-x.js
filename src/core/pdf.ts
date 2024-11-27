import * as fs from 'fs'
import fontkit from '@pdf-lib/fontkit'
import {
    PDFArray,
    PDFContext,
    PDFDict,
    PDFDocument,
    PDFHexString,
    PDFName,
    PDFRawStream,
    PDFRef,
    PDFStream,
    PDFString,
    decodePDFRawStream,
    rgb
} from 'pdf-lib'
import { AFRelationship, EmbeddedFileOptions } from 'pdf-lib/cjs/core/embedders/FileEmbedder'

import { MinimumProfile } from '../profiles/minimum/minimum'

const FACTUR_X_FILENAME = PDFString.of('factur-x.xml').decodeText()

export default class FacturXPdf {
    private pdfDoc: PDFDocument

    private constructor(pdf: PDFDocument) {
        this.pdfDoc = pdf
    }

    /**Create instance by passing an existing PDF/A-3 with FacturX XML */
    public static async createFromFacturXPDF(bytes: string | Uint8Array | ArrayBuffer): Promise<FacturXPdf> {
        const pdf: PDFDocument = await PDFDocument.load(bytes)
        const instance = new FacturXPdf(pdf)
        return instance
    }

    /**Create instance by passing an existing non PDF/A-3 Compliant pdf.
     * Please make sure that all fonts are properly embedded! */
    public static async createFromNonCompliantPDF(bytes: string | Uint8Array | ArrayBuffer): Promise<FacturXPdf> {
        const pdfDoc: PDFDocument = await PDFDocument.load(bytes)
        const pdfDocWithICCProfile = FacturXPdf.addsRGB2014ColorProfile(pdfDoc)
        return new FacturXPdf(pdfDocWithICCProfile)
    }

    /**Create instance by creating a completely new PDFDocument */
    public static async create(): Promise<FacturXPdf> {
        const pdfDoc = await PDFDocument.create()
        //fontkit is needed to properly embed fonts in pdf (as needed in PDF/A-3)
        pdfDoc.registerFontkit(fontkit)
        const pdfDocWithICCProfile = FacturXPdf.addsRGB2014ColorProfile(pdfDoc)
        return new FacturXPdf(pdfDocWithICCProfile)
    }

    /**Create instance by using your own pdf-lib PDFDocument
     * Please make sure that all fonts are properly embedded! */
    public static async createFromPDFDocument(pdfDoc: PDFDocument): Promise<FacturXPdf> {
        const pdfDocWithICCProfile = FacturXPdf.addsRGB2014ColorProfile(pdfDoc)
        return new FacturXPdf(pdfDocWithICCProfile)
    }

    public extractEmbeddedXML(): Buffer | null {
        // Search for factur-x.xml in embedded files
        for (const [_, object] of this.pdfDoc.context.enumerateIndirectObjects()) {
            if (
                object instanceof PDFDict &&
                object.lookupMaybe(PDFName.of('F'), PDFString)?.decodeText() === FACTUR_X_FILENAME
            ) {
                const stream = object
                    .lookup(PDFName.of('EF'), PDFDict)
                    .lookup(PDFName.of('F'), PDFStream) as PDFRawStream
                const data = decodePDFRawStream(stream).decode()

                return Buffer.from(data)
            }
        }

        return null
    }

    public async createPDFContent(data: MinimumProfile) {
        //TODO: Correct implementation of PDF Invoice
        const openSansRegularBytes = fs.readFileSync('./assets/fonts/OpenSans/OpenSans-Regular.ttf')

        const page = this.pdfDoc.addPage([600, 400])
        const openSansRegular = await this.pdfDoc.embedFont(openSansRegularBytes)
        console.log(data.document.id)
        page.drawText(
            `Invoice-ID: ${data.document.id}, Total: ${data.monetarySummary.grandTotal} ${data.monetarySummary.currency}`,
            {
                x: 50,
                y: 350,
                size: 30,
                color: rgb(0, 0, 0),
                font: openSansRegular
            }
        )
    }

    public async createFacturXPDF(xml: string, obj: MinimumProfile): Promise<Uint8Array> {
        this.removeAttachment('factur-x.xml')
        const encoder = new TextEncoder()

        this.embedXML(encoder.encode(xml), {
            mimeType: 'text/xml',
            description: 'Factur-x Invoice',
            creationDate: obj.document.dateOfIssue,
            modificationDate: obj.document.dateOfIssue,
            afRelationship:
                obj.meta.guidelineSpecifiedDocumentContextParameter === 'urn:factur-x.eu:1p0:minimum' ||
                obj.meta.guidelineSpecifiedDocumentContextParameter === 'urn:factur-x.eu:1p0:basicwl'
                    ? AFRelationship.Data
                    : AFRelationship.Alternative
        })
        this.addMetadata(
            obj.document.dateOfIssue,
            obj.document.id,
            `Invoice ${obj.document.id} from ${obj.seller.name}`,
            obj.seller.name,
            FacturXPdf.getProfile(obj.meta.guidelineSpecifiedDocumentContextParameter)
        )

        return this.pdfDoc.save({ useObjectStreams: false })
    }

    private static getProfile(guidelineSpecifiedDocumentContextParameter: string): string {
        switch (guidelineSpecifiedDocumentContextParameter) {
            case 'urn:factur-x.eu:1p0:minimum':
                return 'MINIMUM'
            case 'urn:factur-x.eu:1p0:basicwl':
                return 'BASIC WL'
            case 'urn:cen.eu:EN16931:2017#compliant#urn:factur-x.eu:1p0:basic':
                return 'BASIC'
            case 'urn:cen.eu:en16931:2017':
                return 'EN 16931'
            case 'urn:cen.eu:en16931:2017#conformant#urn:factur-x.eu:1p0:extended':
                return 'EXTENDED'
            case 'urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0':
                return 'XRECHNUNG'
            default:
                throw new Error('Unknown Profile received')
        }
    }

    /**Color Profile is needed for PDF/A-3 compliance */
    private static addsRGB2014ColorProfile(pdfDoc: PDFDocument): PDFDocument {
        const iccBuffer = fs.readFileSync('./assets/iccprofile/sRGB2014.icc')

        const pdfDocWithICCProfile = this.setColorProfile({
            identifier: 'sRGB2014',
            info: 'sRGB v2 ICC',
            subType: 'GTS_PDFA1',
            iccBuffer,
            pdfDoc
        })
        return pdfDocWithICCProfile
    }

    private static setColorProfile({
        subType,
        iccBuffer,
        info,
        identifier,
        pdfDoc
    }: {
        identifier: string
        info?: string
        subType: string
        iccBuffer: Buffer
        pdfDoc: PDFDocument
    }): PDFDocument {
        const iccStream = pdfDoc.context.stream(iccBuffer, {
            Length: iccBuffer.length,
            N: 3
        })

        const outputIntent = pdfDoc.context.obj({
            Type: 'OutputIntent',
            S: subType,
            OutputConditionIdentifier: PDFString.of(identifier),
            Info: info ? PDFString.of(info) : PDFString.of(identifier),
            DestOutputProfile: pdfDoc.context.register(iccStream)
        })

        const outputIntentRef = pdfDoc.context.register(outputIntent)
        pdfDoc.catalog.set(PDFName.of('OutputIntents'), pdfDoc.context.obj([outputIntentRef]))
        return pdfDoc
    }

    /**This function is basically the same function which is used in pdf-lib for embedding files (see: pdf-lib\src\core\embedders\FileEmbedder.ts).
     * Reason for re-implementation: FacturX Specification requires a reference to the stream object in EF.F and EF.UF.
     * pdf-lib is only adding to EF.F */
    private static async embedXMLIntoContext(
        xml: Uint8Array,
        context: PDFContext,
        ref: PDFRef,
        options: EmbeddedFileOptions
    ): Promise<PDFRef> {
        const { mimeType, description, creationDate, modificationDate, afRelationship } = options

        const embeddedFileStream = context.flateStream(xml, {
            Type: 'EmbeddedFile',
            Subtype: mimeType ?? undefined,
            Params: {
                Size: xml.length,
                CreationDate: creationDate ? PDFString.fromDate(creationDate) : undefined,
                ModDate: modificationDate ? PDFString.fromDate(modificationDate) : undefined
            }
        })
        const embeddedFileStreamRef = context.register(embeddedFileStream)

        const fileSpecDict = context.obj({
            Type: 'Filespec',
            F: PDFString.of('factur-x.xml'), // TODO: Assert that this is plain ASCII
            UF: PDFHexString.fromText('factur-x.xml'),
            EF: { F: embeddedFileStreamRef, UF: embeddedFileStreamRef },
            Desc: description ? PDFHexString.fromText(description) : undefined,
            AFRelationship: afRelationship ?? undefined
        })
        context.assign(ref, fileSpecDict)
        return ref
    }

    /**This function is the same function which is used in pdf-lib for embedding files (see pdf-lib\src\api\PDFEmbeddedFile.ts).
     * This function is private in pdf-lib and can not be called from outside. As we needed
     * our own implementation of embedXMLIntoContext() we need to call this function. Therefore
     * the re-implementation
     */
    private async embedXML(xml: Uint8Array, options: EmbeddedFileOptions) {
        const ref = await FacturXPdf.embedXMLIntoContext(
            xml,
            this.pdfDoc.context,
            this.pdfDoc.context.nextRef(),
            options
        )

        if (!this.pdfDoc.catalog.has(PDFName.of('Names'))) {
            this.pdfDoc.catalog.set(PDFName.of('Names'), this.pdfDoc.context.obj({}))
        }
        const Names = this.pdfDoc.catalog.lookup(PDFName.of('Names'), PDFDict)

        if (!Names.has(PDFName.of('EmbeddedFiles'))) {
            Names.set(PDFName.of('EmbeddedFiles'), this.pdfDoc.context.obj({}))
        }
        const EmbeddedFiles = Names.lookup(PDFName.of('EmbeddedFiles'), PDFDict)

        if (!EmbeddedFiles.has(PDFName.of('Names'))) {
            EmbeddedFiles.set(PDFName.of('Names'), this.pdfDoc.context.obj([]))
        }
        const EFNames = EmbeddedFiles.lookup(PDFName.of('Names'), PDFArray)

        EFNames.push(PDFHexString.fromText('factur-x.xml'))
        EFNames.push(ref)

        /**
         * The AF-Tag is needed to achieve PDF-A3 compliance for embedded files
         *
         * The following document outlines the uses cases of the associated files (AF) tag.
         * See:
         * https://www.pdfa.org/wp-content/uploads/2018/10/PDF20_AN002-AF.pdf
         */

        if (!this.pdfDoc.catalog.has(PDFName.of('AF'))) {
            this.pdfDoc.catalog.set(PDFName.of('AF'), this.pdfDoc.context.obj([]))
        }
        const AF = this.pdfDoc.catalog.lookup(PDFName.of('AF'), PDFArray)
        AF.push(ref)
    }

    private static findAndDeleteAttachmentFromNamesArray(pdfDoc: PDFDocument, xmlName: string): PDFRef | undefined {
        const EFNamesArray = pdfDoc.catalog
            .lookupMaybe(PDFName.of('Names'), PDFDict)
            ?.lookupMaybe(PDFName.of('EmbeddedFiles'), PDFDict)
            ?.lookupMaybe(PDFName.of('Names'), PDFArray)

        // Search for Object in Names Array and delete it from there
        if (!EFNamesArray) return undefined
        let dictRef: PDFRef | undefined
        for (let i = 0; i < EFNamesArray?.asArray().length; i++) {
            if (EFNamesArray.get(i) instanceof PDFHexString || EFNamesArray.get(i) instanceof PDFString) {
                const name = EFNamesArray.get(i) as PDFString
                if (name.decodeText() === xmlName) {
                    dictRef = EFNamesArray.get(i + 1) as PDFRef
                    EFNamesArray.remove(i + 1)
                    EFNamesArray.remove(i)
                    return dictRef
                }
            }
        }
    }

    private static findAndDeleteAttachmentFromAFArray(pdfDoc: PDFDocument, ref: PDFRef | undefined) {
        if (!ref) return
        const AFArray = pdfDoc.catalog.lookupMaybe(PDFName.of('AF'), PDFArray)
        if (!AFArray) return
        for (let i = 0; i < AFArray.asArray().length; i++) {
            if (AFArray.get(i) === ref) {
                AFArray.remove(i)
                return
            }
        }
    }

    private static findAndDeleteAttachmentDict(
        pdfDoc: PDFDocument,
        dictRef: PDFRef | undefined
    ): PDFStream | undefined {
        if (!dictRef) return undefined
        const stream: PDFStream | undefined = pdfDoc.context
            .lookup(dictRef, PDFDict)
            .lookupMaybe(PDFName.of('EF'), PDFDict)
            ?.lookup(PDFName.of('F'), PDFStream)
        pdfDoc.context.delete(dictRef)
        return stream
    }

    private static findPdfStreamRef(pdfDoc: PDFDocument, targetStream: PDFStream): PDFRef | undefined {
        for (const [ref, object] of pdfDoc.context.enumerateIndirectObjects()) {
            if (object instanceof PDFStream && object === targetStream) {
                return ref
            }
        }
        return undefined
    }

    private static deleteStream(pdfDoc: PDFDocument, stream: PDFStream | undefined) {
        if (stream) {
            const streamRef = this.findPdfStreamRef(pdfDoc, stream)
            if (streamRef) pdfDoc.context.delete(streamRef)
        }
    }

    private async removeAttachment(attachmentName: string): Promise<void> {
        const dictRef = FacturXPdf.findAndDeleteAttachmentFromNamesArray(this.pdfDoc, attachmentName)
        const stream = FacturXPdf.findAndDeleteAttachmentDict(this.pdfDoc, dictRef)
        FacturXPdf.deleteStream(this.pdfDoc, stream)
        FacturXPdf.findAndDeleteAttachmentFromAFArray(this.pdfDoc, dictRef)
    }

    private addMetadata(date: Date, documentId: string, title: string, author: string, profile: string) {
        const id = PDFString.of(documentId)
        this.pdfDoc.context.trailerInfo.ID = this.pdfDoc.context.obj([id, id])

        const producer = 'pdf-lib'
        const creator = 'factur-x.js'
        this.pdfDoc.setTitle(title)
        this.pdfDoc.setAuthor(author)
        this.pdfDoc.setProducer(producer)
        this.pdfDoc.setCreator(creator)
        this.pdfDoc.setCreationDate(date)
        this.pdfDoc.setModificationDate(date)

        const metadataXML = `
            <?xpacket begin="" id="${documentId}"?>
              <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.2-c001 63.139439, 2010/09/27-13:37:26        ">
                <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
        
                  <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/">
                    <dc:format>application/pdf</dc:format>
                    <dc:creator>
                      <rdf:Seq>
                        <rdf:li>${author}</rdf:li>
                      </rdf:Seq>
                    </dc:creator>
                    <dc:title>
                       <rdf:Alt>
                          <rdf:li xml:lang="x-default">${title}</rdf:li>
                       </rdf:Alt>
                    </dc:title>
                  </rdf:Description>
        
                  <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/">
                    <xmp:CreatorTool>${creator}</xmp:CreatorTool>
                    <xmp:CreateDate>${FacturXPdf.formatDate(date)}</xmp:CreateDate>
                    <xmp:ModifyDate>${FacturXPdf.formatDate(date)}</xmp:ModifyDate>
                    <xmp:MetadataDate>${FacturXPdf.formatDate(date)}</xmp:MetadataDate>
                  </rdf:Description>
        
                  <rdf:Description rdf:about="" xmlns:pdf="http://ns.adobe.com/pdf/1.3/">
                    <pdf:Producer>${producer}</pdf:Producer>
                  </rdf:Description>
        
                  <rdf:Description rdf:about="" xmlns:pdfaid="http://www.aiim.org/pdfa/ns/id/">
                    <pdfaid:part>3</pdfaid:part>
                    <pdfaid:conformance>B</pdfaid:conformance>
                  </rdf:Description>
        
                  <rdf:Description rdf:about="" xmlns:fx="urn:factur-x:pdfa:CrossIndustryDocument:invoice:1p0#">
                    <fx:DocumentType>INVOICE</fx:DocumentType>
                    <fx:DocumentFileName>factur-x.xml</fx:DocumentFileName>
                    <fx:Version>1.0</fx:Version>
                    <fx:ConformanceLevel>${profile}</fx:ConformanceLevel>
                  </rdf:Description>
                  <rdf:Description xmlns:pdfaExtension="http://www.aiim.org/pdfa/ns/extension/"
                          xmlns:pdfaField="http://www.aiim.org/pdfa/ns/field#"
                          xmlns:pdfaProperty="http://www.aiim.org/pdfa/ns/property#"
                          xmlns:pdfaSchema="http://www.aiim.org/pdfa/ns/schema#"
                          xmlns:pdfaType="http://www.aiim.org/pdfa/ns/type#"
                          rdf:about="">
                      <pdfaExtension:schemas>
                         <rdf:Bag>
                            <rdf:li rdf:parseType="Resource">
                               <pdfaSchema:schema>Factur-X PDFA Extension Schema</pdfaSchema:schema>
                               <pdfaSchema:namespaceURI>urn:factur-x:pdfa:CrossIndustryDocument:invoice:1p0#</pdfaSchema:namespaceURI>
                               <pdfaSchema:prefix>fx</pdfaSchema:prefix>
                               <pdfaSchema:property>
                                  <rdf:Seq>
                                     <rdf:li rdf:parseType="Resource">
                                        <pdfaProperty:name>DocumentFileName</pdfaProperty:name>
                                        <pdfaProperty:valueType>Text</pdfaProperty:valueType>
                                        <pdfaProperty:category>external</pdfaProperty:category>
                                        <pdfaProperty:description>name of the embedded XML invoice file</pdfaProperty:description>
                                     </rdf:li>
                                     <rdf:li rdf:parseType="Resource">
                                        <pdfaProperty:name>DocumentType</pdfaProperty:name>
                                        <pdfaProperty:valueType>Text</pdfaProperty:valueType>
                                        <pdfaProperty:category>external</pdfaProperty:category>
                                        <pdfaProperty:description>INVOICE</pdfaProperty:description>
                                     </rdf:li>
                                     <rdf:li rdf:parseType="Resource">
                                        <pdfaProperty:name>Version</pdfaProperty:name>
                                        <pdfaProperty:valueType>Text</pdfaProperty:valueType>
                                        <pdfaProperty:category>external</pdfaProperty:category>
                                        <pdfaProperty:description>The actual version of the ZUGFeRD data</pdfaProperty:description>
                                     </rdf:li>
                                     <rdf:li rdf:parseType="Resource">
                                        <pdfaProperty:name>ConformanceLevel</pdfaProperty:name>
                                        <pdfaProperty:valueType>Text</pdfaProperty:valueType>
                                        <pdfaProperty:category>external</pdfaProperty:category>
                                        <pdfaProperty:description>The conformance level of the ZUGFeRD data</pdfaProperty:description>
                                     </rdf:li>
                                  </rdf:Seq>
                               </pdfaSchema:property>
                            </rdf:li>
                         </rdf:Bag>
                      </pdfaExtension:schemas>
                  </rdf:Description>
                </rdf:RDF>
              </x:xmpmeta>
            <?xpacket end="w"?>
        `.trim()

        const metadataStream = this.pdfDoc.context.stream(metadataXML, {
            Type: 'Metadata',
            Subtype: 'XML',
            Length: metadataXML.length
        })
        const metadataStreamRef = this.pdfDoc.context.register(metadataStream)
        this.pdfDoc.catalog.set(PDFName.of('Metadata'), metadataStreamRef)
    }

    // remove millisecond from date
    private static formatDate(date: Date) {
        return date.toISOString().split('.')[0] + 'Z'
    }
}
