/* eslint-disable @typescript-eslint/no-explicit-any */

import * as fs from 'fs'
import fontkit from '@pdf-lib/fontkit'
import { XMLParser } from 'fast-xml-parser'
import path from 'node:path'
import {
    PDFArray,
    PDFDict,
    PDFDocument,
    PDFHexString,
    PDFName,
    PDFNumber,
    PDFRawStream,
    PDFRef,
    PDFStream,
    PDFString,
    decodePDFRawStream,
    rgb
} from 'pdf-lib'

import FacturXPdf from '../src/core/pdf'
import { MinimumProfile, Token } from '../src/profiles/minimum/minimum'
import { CountryIDContentType, DOCUMENT_CODES } from '../src/types/qdt/types'
import { CURRENCY_ID } from '../src/types/udt/types'

export const testObj: MinimumProfile = {
    meta: {
        businessProcessType: 'A1' as Token,
        guidelineSpecifiedDocumentContextParameter: 'urn:factur-x.eu:1p0:minimum'
    },
    document: {
        id: 'RE20248731' as Token,
        type: DOCUMENT_CODES.COMMERCIAL_INVOICE,
        dateOfIssue: new Date(2024, 10, 20)
    },
    seller: {
        name: 'ZUGFeRD AG',
        specifiedLegalOrganization: {
            id: 'ZUGFERDAG' as Token,
            schemeId: '0002' as Token
        },
        postalAddress: {
            country: CountryIDContentType.GERMANY
        },
        taxIdentification: {
            localTaxId: '93815/08152' as Token,
            vatId: 'DE124356789' as Token
        }
    },
    buyer: {
        reference: '991-1234512345-06',
        name: 'FACTURX AG',
        specifiedLegalOrganization: {
            id: 'FACTURXAG' as Token,
            schemeId: '0003' as Token
        },
        orderReference: 'ORD123456' as Token
    },
    monetarySummary: {
        currency: CURRENCY_ID.Euro,
        taxCurrency: CURRENCY_ID.Euro,
        sumWithoutTax: 200,
        tax: 38,
        grandTotal: 238,
        openAmount: 238
    }
}

const TESTXML =
    '<?xml version="1.0" encoding="UTF-8"?><rsm:CrossIndustryInvoice xmlns:rsm="urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100" xmlns:qdt="urn:un:unece:uncefact:data:standard:QualifiedDataType:100" xmlns:ram="urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:udt="urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100"><rsm:ExchangedDocumentContext><ram:BusinessProcessSpecifiedDocumentContextParameter><ram:ID>A1</ram:ID></ram:BusinessProcessSpecifiedDocumentContextParameter><ram:GuidelineSpecifiedDocumentContextParameter><ram:ID>urn:factur-x.eu:1p0:minimum</ram:ID></ram:GuidelineSpecifiedDocumentContextParameter></rsm:ExchangedDocumentContext><rsm:ExchangedDocument><ram:ID>RE20248731</ram:ID><ram:TypeCode>380</ram:TypeCode><ram:IssueDateTime><udt:DateTimeString format="102">20241120</udt:DateTimeString></ram:IssueDateTime></rsm:ExchangedDocument><rsm:SupplyChainTradeTransaction><ram:ApplicableHeaderTradeAgreement><ram:BuyerReference>991-1234512345-06</ram:BuyerReference><ram:SellerTradeParty><ram:Name>ZUGFeRD AG</ram:Name><ram:SpecifiedLegalOrganization><ram:ID schemeID="0002">ZUGFERDAG</ram:ID></ram:SpecifiedLegalOrganization><ram:PostalTradeAddress><ram:CountryID>DE</ram:CountryID></ram:PostalTradeAddress><ram:SpecifiedTaxRegistration><ram:ID schemeID="VA">DE124356789</ram:ID></ram:SpecifiedTaxRegistration><ram:SpecifiedTaxRegistration><ram:ID schemeID="FC">93815/08152</ram:ID></ram:SpecifiedTaxRegistration></ram:SellerTradeParty><ram:BuyerTradeParty><ram:Name>FACTURX AG</ram:Name><ram:SpecifiedLegalOrganization><ram:ID schemeID="0003">FACTURXAG</ram:ID></ram:SpecifiedLegalOrganization></ram:BuyerTradeParty><ram:BuyerOrderReferencedDocument><ram:IssuerAssignedID>ORD123456</ram:IssuerAssignedID></ram:BuyerOrderReferencedDocument></ram:ApplicableHeaderTradeAgreement><ram:ApplicableHeaderTradeDelivery/><ram:ApplicableHeaderTradeSettlement><ram:InvoiceCurrencyCode>EUR</ram:InvoiceCurrencyCode><ram:SpecifiedTradeSettlementHeaderMonetarySummation><ram:TaxBasisTotalAmount>200.00</ram:TaxBasisTotalAmount><ram:TaxTotalAmount currencyID="EUR">38.00</ram:TaxTotalAmount><ram:GrandTotalAmount>238.00</ram:GrandTotalAmount><ram:DuePayableAmount>238.00</ram:DuePayableAmount></ram:SpecifiedTradeSettlementHeaderMonetarySummation></ram:ApplicableHeaderTradeSettlement></rsm:SupplyChainTradeTransaction></rsm:CrossIndustryInvoice>'

/**Tests whether the created pdf is compliant to PDF/A-3 and Factur-X Specification
 * when using a Factur-X PDF as basis and just replace the XML
 * --> Expected Preconditions: A proper PDF/A-3 is used as basis
 */
async function prepareReplaceXML() {
    const pdfBuff = fs.readFileSync(path.join(__dirname, 'pdfs', `MINIMUM_Rechnung.pdf`))
    const facturX = await FacturXPdf.createFromFacturXPDF(pdfBuff)
    return facturX.createFacturXPDF(TESTXML, testObj)
}
runPDFA3ComplianceTests(prepareReplaceXML, 'XML Replacement in existing Factur-X PDF')
checkCorrectXmlAttached(prepareReplaceXML, 'XML Replacement in existing Factur-X PDF')

/**Tests whether the created pdf is compliant to PDF/A-3 and Factur-X Specification
 * when creating a completely new pdf-invoice via this library
 */
async function prepareCreateNewFacturX() {
    const facturX = await FacturXPdf.create()
    return facturX.createFacturXPDF(TESTXML, testObj)
}
runPDFA3ComplianceTests(prepareCreateNewFacturX, 'Completely new PDF')
checkCorrectXmlAttached(prepareCreateNewFacturX, 'Completely new PDF')

/**Tests whether the created pdf is compliant to PDF/A-3 and Factur-X Specification
 * when using a non-compliant PDF as basis for PDF-cration
 * --> Expected Preconditions: All used fonts are properly embedded in pdf and no 'Standard 14 Font' is used
 */
async function prepareCreateFromNonCompliantPDF() {
    const pdfBuff = fs.readFileSync(path.join(__dirname, 'pdfs', `non_compliant_pdf.pdf`))
    const facturX = await FacturXPdf.createFromNonCompliantPDF(pdfBuff)
    return facturX.createFacturXPDF(TESTXML, testObj)
}
runPDFA3ComplianceTests(prepareCreateFromNonCompliantPDF, 'Create from non-compliant PDF')
checkCorrectXmlAttached(prepareCreateFromNonCompliantPDF, 'Create from non-compliant PDF')

/**Tests whether the created pdf is compliant to PDF/A-3 and Factur-X Specification
 * when using a PDFDocument from pdf-lib as basis for PDF-cration
 * --> Expected Preconditions: All used fonts are properly embedded in pdf and no 'Standard 14 Font' is used
 */
async function prepareCreateFromPdfLibDocument() {
    const pdfDoc = await PDFDocument.create()
    pdfDoc.registerFontkit(fontkit)
    const openSansRegularBytes = fs.readFileSync('./assets/fonts/OpenSans/OpenSans-Regular.ttf')

    const page = pdfDoc.addPage([600, 400])
    const openSansRegular = await pdfDoc.embedFont(openSansRegularBytes)
    page.drawText(`Hello hello, here's your invoice!`, {
        x: 50,
        y: 350,
        size: 30,
        color: rgb(0, 0, 0),
        font: openSansRegular
    })

    const facturX = await FacturXPdf.createFromPDFDocument(pdfDoc)
    return facturX.createFacturXPDF(TESTXML, testObj)
}
runPDFA3ComplianceTests(prepareCreateFromPdfLibDocument, 'Create from pdf-lib PDFDocument')
checkCorrectXmlAttached(prepareCreateFromPdfLibDocument, 'Create from pdf-lib PDFDocument')

function checkCorrectXmlAttached(preparePDFData: () => Promise<Uint8Array>, testname: string) {
    let pdfDoc: PDFDocument

    beforeAll(async () => {
        const pdfData = await preparePDFData()
        pdfDoc = await PDFDocument.load(pdfData)
    })
    describe(`${testname}: XML was properly added`, () => {
        test('XML is listed in Names Array', () => {
            const Names = pdfDoc.catalog.lookupMaybe(PDFName.of('Names'), PDFDict)
            expect(Names).toBeDefined()
            const EmbeddedFiles = Names?.lookupMaybe(PDFName.of('EmbeddedFiles'), PDFDict)
            expect(EmbeddedFiles).toBeDefined()
            const EFNames = EmbeddedFiles?.lookupMaybe(PDFName.of('Names'), PDFArray)
            expect(EFNames).toBeDefined()
            if (!EFNames) throw new Error('EFNames Array was not found')

            let EFNamesContainsFacturX = false
            for (let i = 0; i < EFNames.asArray().length; i++) {
                if (EFNames.get(i) instanceof PDFHexString || EFNames.get(i) instanceof PDFString) {
                    const name = EFNames.get(i) as PDFString
                    if (name.decodeText() === 'factur-x.xml') {
                        EFNamesContainsFacturX = true
                    }
                }
            }
            expect(EFNamesContainsFacturX).toBeTruthy()
        })

        let xmlStream: PDFRawStream
        test('XML is properly described in File Specification Dictionary', () => {
            const AF = pdfDoc.catalog.lookupMaybe(PDFName.of('AF'), PDFArray)?.asArray()
            expect(AF).toBeDefined()
            if (!AF) throw new Error('AF Array is not defined')
            const fileSpecDictRef = AF[0] as PDFRef

            const xmlFileSpecDict = pdfDoc.context.lookup(fileSpecDictRef) as PDFDict
            expect(xmlFileSpecDict).toBeDefined()

            const f = xmlFileSpecDict.lookupMaybe(PDFName.of('F'), PDFString)?.decodeText()
            expect(f).toBe('factur-x.xml')

            const objectType = xmlFileSpecDict.lookupMaybe(PDFName.of('Type'), PDFName)?.decodeText()
            expect(objectType).toBe('Filespec')

            const uf = xmlFileSpecDict.lookupMaybe(PDFName.of('UF'), PDFHexString)?.decodeText()
            expect(uf).toBe('factur-x.xml')

            const desc = xmlFileSpecDict.lookupMaybe(PDFName.of('Desc'), PDFHexString)?.decodeText()
            expect(desc).toBe('Factur-x Invoice')

            const afRel = xmlFileSpecDict.lookupMaybe(PDFName.of('AFRelationship'), PDFName)?.decodeText()
            expect(afRel).toBe('Data')

            xmlStream = xmlFileSpecDict
                .lookup(PDFName.of('EF'), PDFDict)
                .lookup(PDFName.of('F'), PDFStream) as PDFRawStream

            expect(xmlStream).toBeDefined()

            const xmlStreamUF = xmlFileSpecDict
                .lookup(PDFName.of('EF'), PDFDict)
                .lookup(PDFName.of('UF'), PDFStream) as PDFRawStream

            expect(xmlStream).toEqual(xmlStreamUF)
        })

        test('XML Filestream is well formed', () => {
            if (!xmlStream) throw new Error('XML stream not found')

            const type = xmlStream.dict.lookupMaybe(PDFName.of('Type'), PDFName)?.decodeText()
            expect(type).toBe('EmbeddedFile')

            const subtype = xmlStream.dict.lookupMaybe(PDFName.of('Subtype'), PDFName)?.decodeText()
            expect(subtype).toBe('text/xml')

            const params = xmlStream.dict.lookupMaybe(PDFName.of('Params'), PDFDict)
            expect(params).toBeDefined()

            const size = params?.lookupMaybe(PDFName.of('Size'), PDFNumber)?.asNumber()
            expect(size).toBe(TESTXML.length)

            const creationDate = params?.lookupMaybe(PDFName.of('CreationDate'), PDFString)?.decodeDate()
            expect(creationDate?.getTime()).toBe(testObj.document.dateOfIssue.getTime())

            const modDate = params?.lookupMaybe(PDFName.of('ModDate'), PDFString)?.decodeDate()
            expect(modDate?.getTime()).toBe(testObj.document.dateOfIssue.getTime())

            const xmlInPDF = decodePDFRawStream(xmlStream).decode()
            expect(xmlInPDF.length).toBe(TESTXML.length)
            expect(new TextDecoder().decode(xmlInPDF)).toBe(TESTXML)
        })
    })
}

function runPDFA3ComplianceTests(preparePDFData: () => Promise<Uint8Array>, testname: string) {
    describe(`${testname}: PDF/A-3 Compliance Tests`, () => {
        let pdfDoc: PDFDocument

        beforeAll(async () => {
            const pdfData = await preparePDFData()
            pdfDoc = await PDFDocument.load(pdfData)
        })

        test(`Should have all fonts embedded`, async () => {
            const allFontsEmbedded = await checkFontsEmbedded(pdfDoc)
            expect(allFontsEmbedded).toBe(true)
        })

        test(`Should have color profile embedded`, () => {
            checkColorProfileEmbedded(pdfDoc)
        })

        test(`Should have correct metadata`, async () => {
            checkMetadata(pdfDoc)
        })
    })
}

function checkMetadata(pdfDoc: any) {
    expect(pdfDoc.getTitle()).toBe(`Invoice ${testObj.document.id} from ${testObj.seller.name}`)
    expect(pdfDoc.getAuthor()).toBe(testObj.seller.name)
    expect(pdfDoc.getProducer()).toBe('pdf-lib (https://github.com/Hopding/pdf-lib)')
    expect(pdfDoc.getCreator()).toBe('factur-x.js')
    expect(pdfDoc.getCreationDate()?.getTime()).toBeDefined()
    expect(pdfDoc.getModificationDate()?.getTime()).toBeDefined()

    const documentID = (pdfDoc.context.trailerInfo.ID as PDFArray).asArray()
    expect(documentID.length).toBe(2)
    expect((documentID[0] as PDFString).decodeText()).toBe(testObj.document.id)
    expect((documentID[1] as PDFString).decodeText()).toBe(testObj.document.id)

    const xmpMetadataRef = pdfDoc.catalog.get(PDFName.of('Metadata')) as PDFRef
    const xmpMetadataStream = pdfDoc.context.lookupMaybe(xmpMetadataRef, PDFStream) as PDFRawStream
    const xmpMetadataDict = xmpMetadataStream?.dict
    const xmpMetadata = xmpMetadataStream ? decodePDFRawStream(xmpMetadataStream).decode() : undefined
    const parser = new XMLParser()

    const interpretedMetadata = xmpMetadata && parser.parse(Buffer.from(xmpMetadata))
    const rdfDescription = interpretedMetadata['x:xmpmeta']?.['rdf:RDF']?.['rdf:Description']
    expect(xmpMetadata).toBeDefined()
    expect(xmpMetadataDict).toBeDefined()
    expect(xmpMetadataDict?.lookupMaybe(PDFName.of('Type'), PDFName)?.decodeText()).toBe('Metadata')
    expect(xmpMetadataDict?.lookupMaybe(PDFName.of('Subtype'), PDFName)?.decodeText()).toBe('XML')
    expect(xmpMetadataDict?.lookupMaybe(PDFName.of('Length'), PDFNumber)?.asNumber()).toBe(xmpMetadata?.length)
    expect(rdfDescription).toBeDefined()
    const basicInfo = findObjectByKey(rdfDescription, 'dc:format')
    expect(basicInfo).toBeDefined()
    expect(basicInfo && basicInfo['dc:format']).toBe('application/pdf')
    expect(basicInfo && basicInfo['dc:creator']?.['rdf:Seq']?.['rdf:li']).toBe(testObj.seller.name)
    expect(basicInfo && basicInfo['dc:title']?.['rdf:Alt']?.['rdf:li']).toBe(
        `Invoice ${testObj.document.id} from ${testObj.seller.name}`
    )
    const toolInfo = findObjectByKey(rdfDescription, 'xmp:CreatorTool')
    expect(toolInfo).toBeDefined()
    expect(toolInfo && toolInfo['xmp:CreatorTool']).toBe('factur-x.js')
    expect(toolInfo && toolInfo['xmp:CreateDate']).toBe(testObj.document.dateOfIssue.toISOString().split('.')[0] + 'Z')
    expect(toolInfo && toolInfo['xmp:ModifyDate']).toBe(testObj.document.dateOfIssue.toISOString().split('.')[0] + 'Z')
    expect(toolInfo && toolInfo['xmp:MetadataDate']).toBe(
        testObj.document.dateOfIssue.toISOString().split('.')[0] + 'Z'
    )
    const producerInfo = findObjectByKey(rdfDescription, 'pdf:Producer')
    expect(producerInfo && producerInfo['pdf:Producer']).toBe('pdf-lib')
    const pdfStandard = findObjectByKey(rdfDescription, 'pdfaid:part')
    expect(pdfStandard).toBeDefined()
    expect(pdfStandard && pdfStandard['pdfaid:part']).toBe(3)
    expect(pdfStandard && pdfStandard['pdfaid:conformance']).toBe('B')
    const facturX = findObjectByKey(rdfDescription, 'fx:DocumentType')
    expect(facturX).toBeDefined()
    expect(facturX && facturX['fx:DocumentType']).toBe('INVOICE')
    expect(facturX && facturX['fx:DocumentFileName']).toBe('factur-x.xml')
    expect(facturX && facturX['fx:Version']).toBe(1)
    expect(facturX && facturX['fx:ConformanceLevel']).toBe('MINIMUM')
    const extensions = findObjectByKey(rdfDescription, 'pdfaExtension:schemas')
    const fxExtension = extensions && extensions['pdfaExtension:schemas']?.['rdf:Bag']?.['rdf:li']
    const fxProperties: any[] = fxExtension && fxExtension['pdfaSchema:property']?.['rdf:Seq']?.['rdf:li']
    expect(fxExtension).toBeDefined()
    expect(fxExtension && fxExtension['pdfaSchema:schema']).toBe('Factur-X PDFA Extension Schema')
    expect(fxExtension && fxExtension['pdfaSchema:namespaceURI']).toBe(
        'urn:factur-x:pdfa:CrossIndustryDocument:invoice:1p0#'
    )
    expect(fxExtension && fxExtension['pdfaSchema:prefix']).toBe('fx')
    expect(fxProperties).toBeDefined()
    const propertyFileName = fxProperties.find(prop => prop['pdfaProperty:name'] === 'DocumentFileName')
    expect(propertyFileName).toBeDefined()
    expect(propertyFileName && propertyFileName['pdfaProperty:valueType']).toBe('Text')
    expect(propertyFileName && propertyFileName['pdfaProperty:category']).toBe('external')
    expect(propertyFileName && propertyFileName['pdfaProperty:description']).toBe(
        'name of the embedded XML invoice file'
    )

    const propertyDocType = fxProperties.find(prop => prop['pdfaProperty:name'] === 'DocumentType')
    expect(propertyDocType).toBeDefined()
    expect(propertyDocType && propertyDocType['pdfaProperty:valueType']).toBe('Text')
    expect(propertyDocType && propertyDocType['pdfaProperty:category']).toBe('external')
    expect(propertyDocType && propertyDocType['pdfaProperty:description']).toBe('INVOICE')

    const propertyVersion = fxProperties.find(prop => prop['pdfaProperty:name'] === 'Version')
    expect(propertyVersion).toBeDefined()
    expect(propertyVersion && propertyVersion['pdfaProperty:valueType']).toBe('Text')
    expect(propertyVersion && propertyVersion['pdfaProperty:category']).toBe('external')
    expect(propertyVersion && propertyVersion['pdfaProperty:description']).toBe(
        'The actual version of the ZUGFeRD data'
    )

    const propertyConformanceLevel = fxProperties.find(prop => prop['pdfaProperty:name'] === 'ConformanceLevel')
    expect(propertyConformanceLevel).toBeDefined()
    expect(propertyConformanceLevel && propertyConformanceLevel['pdfaProperty:valueType']).toBe('Text')
    expect(propertyConformanceLevel && propertyConformanceLevel['pdfaProperty:category']).toBe('external')
    expect(propertyConformanceLevel && propertyConformanceLevel['pdfaProperty:description']).toBe(
        'The conformance level of the ZUGFeRD data'
    )
}

function findObjectByKey(array: Record<string, any>[], key: string): Record<string, any> | undefined {
    return array.find(obj => key in obj)
}

function checkColorProfileEmbedded(pdfDoc: any) {
    const referenceArray = pdfDoc.catalog.get(PDFName.of('OutputIntents')).asArray()
    expect(referenceArray.length).toBe(1)
    const profileReference = referenceArray[0] as PDFRef
    const profileAttachment = pdfDoc.context.lookup(profileReference, PDFDict)
    expect(profileAttachment.lookupMaybe(PDFName.of('Type'), PDFName).decodeText()).toBe('OutputIntent')
    expect(profileAttachment.lookupMaybe(PDFName.of('OutputConditionIdentifier'), PDFString).decodeText()).toBeDefined()
    const profileStream = profileAttachment.lookupMaybe(PDFName.of('DestOutputProfile'), PDFRawStream)
    expect(profileStream).toBeDefined()
    const iccProfileData = decodePDFRawStream(profileStream).decode()
    expect(profileStream.dict.lookupMaybe(PDFName.of('Length'), PDFNumber).numberValue).toBeDefined()
    expect(iccProfileData.length).toBeGreaterThan(1000)
    expect(profileStream.dict.lookupMaybe(PDFName.of('N'), PDFNumber).numberValue).toBe(3)
}

async function checkFontsEmbedded(pdfDoc: PDFDocument): Promise<boolean> {
    let allFontsEmbedded = true
    const pages = pdfDoc.getPages()
    pages.forEach(page => {
        const { Font } = page.node.normalizedEntries()
        Font.entries().forEach(([fontName, fontRef]) => {
            const fontDict = pdfDoc.context.lookupMaybe(fontRef, PDFDict)
            if (fontDict) {
                let thisEntryIsEmbedded = true
                if (fontDict.lookupMaybe(PDFName.of('Subtype'), PDFName)?.decodeText() === 'Type0') {
                    const descandantFontsArray = fontDict
                        .lookupMaybe(PDFName.of('DescendantFonts'), PDFArray)
                        ?.asArray()
                    if (!descandantFontsArray) {
                        thisEntryIsEmbedded = checkDescriptorHasFontData(fontDict)
                    } else {
                        descandantFontsArray.forEach(descandantFont => {
                            const descandantFontDict = pdfDoc.context.lookupMaybe(descandantFont, PDFDict)
                            const descandantIsEmbedded = checkDescriptorHasFontData(descandantFontDict)
                            if (!descandantIsEmbedded) thisEntryIsEmbedded = false
                        })
                    }
                } else {
                    thisEntryIsEmbedded = checkDescriptorHasFontData(fontDict)
                }

                if (!thisEntryIsEmbedded) {
                    allFontsEmbedded = false
                    console.warn(
                        `Font "${fontName.decodeText()}" is not properly embedded! This is not according to PDF/A-3 Standard. Therefore your PDF won't be a proper Factur-X file. Make sure to embed every font and not to use pdf-lib standard fonts.`
                    )
                }
            }
        })
    })
    return allFontsEmbedded
}

function checkDescriptorHasFontData(fontDict: PDFDict | undefined): boolean {
    if (!fontDict) {
        return false
    }
    const descriptor = fontDict.lookupMaybe(PDFName.of('FontDescriptor'), PDFDict)

    const isEmbedded =
        descriptor &&
        (descriptor.has(PDFName.of('FontFile')) ||
            descriptor.has(PDFName.of('FontFile2')) ||
            descriptor.has(PDFName.of('FontFile3')))

    return isEmbedded ? true : false
}
