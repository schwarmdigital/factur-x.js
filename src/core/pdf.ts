import { PDFDict, PDFDocument, PDFName, PDFRawStream, PDFStream, PDFString, decodePDFRawStream } from 'pdf-lib'

const FACTUR_X_FILENAME = PDFString.of('factur-x.xml').decodeText()

export async function extractEmbeddedXML(bytes: string | Uint8Array | ArrayBuffer): Promise<Buffer> {
    const pdf = await PDFDocument.load(bytes)

    // Search for factur-x.xml in embedded files
    for (const [_, object] of pdf.context.enumerateIndirectObjects()) {
        if (
            object instanceof PDFDict &&
            object.lookupMaybe(PDFName.of('F'), PDFString)?.decodeText() === FACTUR_X_FILENAME
        ) {
            const stream = object.lookup(PDFName.of('EF'), PDFDict).lookup(PDFName.of('F'), PDFStream) as PDFRawStream
            const data = decodePDFRawStream(stream).decode()

            return Buffer.from(data)
        }
    }

    throw new Error('No Embedded Factur-X XML found in PDF')
}
