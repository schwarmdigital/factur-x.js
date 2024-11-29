import * as fs from 'fs'
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
import { AFRelationship } from 'pdf-lib/cjs/core/embedders/FileEmbedder'

import FacturXPdf from '../src/core/pdf'

describe('Unit Tests for pdf functions', () => {
    describe('getProfile Function returns proper profile names for PDF Metadata', () => {
        const getProfileValue = (FacturXPdf as any)['getProfile']

        it('should return "MINIMUM" for urn:factur-x.eu:1p0:minimum', () => {
            const guidelineSpecifiedDocumentContextParameter = 'urn:factur-x.eu:1p0:minimum'
            const result = getProfileValue(guidelineSpecifiedDocumentContextParameter)
            expect(result).toBe('MINIMUM')
        })

        it('should return "BASIC WL" for urn:factur-x.eu:1p0:basicwl', () => {
            const guidelineSpecifiedDocumentContextParameter = 'urn:factur-x.eu:1p0:basicwl'
            const result = getProfileValue(guidelineSpecifiedDocumentContextParameter)
            expect(result).toBe('BASIC WL')
        })

        it('should return "BASIC" for urn:cen.eu:EN16931:2017#compliant#urn:factur-x.eu:1p0:basic', () => {
            const guidelineSpecifiedDocumentContextParameter =
                'urn:cen.eu:EN16931:2017#compliant#urn:factur-x.eu:1p0:basic'
            const result = getProfileValue(guidelineSpecifiedDocumentContextParameter)
            expect(result).toBe('BASIC')
        })

        it('should return "EN 16931" for urn:cen.eu:en16931:2017', () => {
            const guidelineSpecifiedDocumentContextParameter = 'urn:cen.eu:en16931:2017'
            const result = getProfileValue(guidelineSpecifiedDocumentContextParameter)
            expect(result).toBe('EN 16931')
        })

        it('should return "EXTENDED" for urn:cen.eu:en16931:2017#conformant#urn:factur-x.eu:1p0:extended', () => {
            const guidelineSpecifiedDocumentContextParameter =
                'urn:cen.eu:en16931:2017#conformant#urn:factur-x.eu:1p0:extended'
            const result = getProfileValue(guidelineSpecifiedDocumentContextParameter)
            expect(result).toBe('EXTENDED')
        })

        it('should return "XRECHNUNG" for urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0', () => {
            const guidelineSpecifiedDocumentContextParameter =
                'urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0'
            const result = getProfileValue(guidelineSpecifiedDocumentContextParameter)
            expect(result).toBe('XRECHNUNG')
        })

        it('should throw an error for unknown profile', () => {
            const guidelineSpecifiedDocumentContextParameter = 'unknown-profile'
            expect(() => getProfileValue(guidelineSpecifiedDocumentContextParameter)).toThrow(
                'Unknown Profile received'
            )
        })
    })

    describe('Color Profile gets added correctly', () => {
        let pdfDocWithProfile: any
        beforeAll(async () => {
            const testPDFDoc = await PDFDocument.create()
            pdfDocWithProfile = (FacturXPdf as any)['addsRGB2014ColorProfile'](testPDFDoc)
        })
        let referenceArray: any
        test('OutputIntents can be found in pdf catalog', () => {
            referenceArray = pdfDocWithProfile.catalog.get(PDFName.of('OutputIntents')).asArray()
            expect(referenceArray.length).toBe(1)
        })
        let profileAttachment: any
        test('OutputIntent is well formed: Output Intent Type is OutputIntent', () => {
            const profileReference = referenceArray[0] as PDFRef
            profileAttachment = pdfDocWithProfile.context.lookup(profileReference, PDFDict)
            expect(profileAttachment.lookupMaybe(PDFName.of('Type'), PDFName).decodeText()).toBe('OutputIntent')
        })
        test('OutputIntent is well formed: Profile id is sRGB2014', () => {
            expect(profileAttachment.lookupMaybe(PDFName.of('OutputConditionIdentifier'), PDFString).decodeText()).toBe(
                'sRGB2014'
            )
        })
        test('OutputIntent is well formed: Profile Subtype is GTS_PDFA1', () => {
            expect(profileAttachment.lookupMaybe(PDFName.of('S'), PDFName).decodeText()).toBe('GTS_PDFA1')
        })
        let profileStream: any
        test('OutputIntent is well formed: Reference to Stream is available', () => {
            profileStream = profileAttachment.lookupMaybe(PDFName.of('DestOutputProfile'), PDFRawStream)
            expect(profileStream).toBeDefined()
        })
        let iccProfileData: any
        test('Profile Stream is well formed: Length is correct', () => {
            iccProfileData = decodePDFRawStream(profileStream).decode()
            expect(profileStream.dict.lookupMaybe(PDFName.of('Length'), PDFNumber).numberValue).toBe(
                iccProfileData.length
            )
        })
        test('Profile Stream is well formed: Data is in Stream', () => {
            expect(iccProfileData.length).toBeGreaterThan(1000)
        })
        test('Profile Stream is well formed: Color Space is set to RGB', () => {
            expect(profileStream.dict.lookupMaybe(PDFName.of('N'), PDFNumber).numberValue).toBe(3)
        })
    })
    describe('Check XML adding and removing', () => {
        let pdfDocWithXML: PDFDocument
        let xmlSize: number
        let testFacturXPDF: FacturXPdf
        let xmlFilestreamRef: PDFRef

        const xmlCreationDate = new Date(2024, 10, 1)
        const xmlEditDate = new Date(2024, 10, 10)

        beforeAll(async () => {
            const xml = fs.readFileSync(path.join(__dirname, 'xmls', 'factur-x.xml'))
            xmlSize = xml.length
            const testPDFDoc = await PDFDocument.create()
            testFacturXPDF = new FacturXPdf(testPDFDoc)
            const nothing = (testFacturXPDF as any)['embedXML'](xml, {
                mimeType: 'text/xml',
                description: 'Factur-x Invoice',
                creationDate: xmlCreationDate,
                modificationDate: xmlEditDate,
                afRelationship: AFRelationship.Data
            })

            pdfDocWithXML = (testFacturXPDF as any)['pdfDoc']
        })
        describe('XML was properly added when calling embedXML()', () => {
            test('XML is listed in Names Array', () => {
                const Names = pdfDocWithXML.catalog.lookupMaybe(PDFName.of('Names'), PDFDict)
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
                const AF = pdfDocWithXML.catalog.lookupMaybe(PDFName.of('AF'), PDFArray)?.asArray()
                expect(AF).toBeDefined()
                if (!AF) throw new Error('AF Array is not defined')
                const fileSpecDictRef = AF[0] as PDFRef

                const xmlFileSpecDict = pdfDocWithXML.context.lookup(fileSpecDictRef) as PDFDict
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
                expect(size).toBe(xmlSize)

                const creationDate = params?.lookupMaybe(PDFName.of('CreationDate'), PDFString)?.decodeDate()
                expect(creationDate?.getTime()).toBe(xmlCreationDate.getTime())

                const modDate = params?.lookupMaybe(PDFName.of('ModDate'), PDFString)?.decodeDate()
                expect(modDate?.getTime()).toBe(xmlEditDate.getTime())

                const xmlInPDF = decodePDFRawStream(xmlStream).decode()
                expect(xmlInPDF.length).toBe(xmlSize)

                for (const [ref, object] of pdfDocWithXML.context.enumerateIndirectObjects()) {
                    if (object instanceof PDFStream && object === xmlStream) {
                        xmlFilestreamRef = ref
                    }
                }

                /* The following check is in preparation for delation 
                --> We use this ref to check whether the stream gone therefore we first 
                need to check whether the Ref works properly*/
                expect(xmlFilestreamRef).toBeDefined()
                expect(pdfDocWithXML.context.lookup(xmlFilestreamRef)).toBe(xmlStream)
            })
        })

        describe('XML gets properly deleted when calling removeAttachment()', () => {
            let pdfDocWithRemovedAttachments: PDFDocument
            beforeAll(async () => {
                const nothing = (testFacturXPDF as any)['removeAttachment']('factur-x.xml')
                pdfDocWithRemovedAttachments = (testFacturXPDF as any)['pdfDoc']
            })

            test('XML is not listed anymore in Names Array', () => {
                const Names = pdfDocWithRemovedAttachments.catalog.lookupMaybe(PDFName.of('Names'), PDFDict)
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
                expect(EFNamesContainsFacturX).toBeFalsy()
            })

            test('XML is not listed anymore in File Specification Dictionary', () => {
                const AF = pdfDocWithRemovedAttachments.catalog.lookupMaybe(PDFName.of('AF'), PDFArray)?.asArray()
                expect(AF).toBeDefined()
                if (!AF) throw new Error('AF Array is not defined')

                expect(AF[0]).not.toBeDefined()
            })

            test('XML Stream is not available anymore', () => {
                expect(pdfDocWithRemovedAttachments.context.lookup(xmlFilestreamRef)).toBe(undefined)
            })
        })
    })
    describe('Metadata gets added properly', () => {
        let testFacturXPDF: any
        let pdfDocWithMetadata: PDFDocument
        beforeAll(async () => {
            const testPDFDoc = await PDFDocument.create()
            testFacturXPDF = new FacturXPdf(testPDFDoc)
            const nothing = (testFacturXPDF as any)['addMetadata'](
                new Date(2024, 10, 1),
                'RE12345',
                'Test Invoice',
                'Factur X Tester',
                'MINIMUM'
            )
            pdfDocWithMetadata = (testFacturXPDF as any)['pdfDoc']
            console.log(pdfDocWithMetadata.getAuthor())
        })

        test('Check Standard Metadata to be correct', () => {
            expect(pdfDocWithMetadata.getTitle()).toBe('Test Invoice')
            expect(pdfDocWithMetadata.getAuthor()).toBe('Factur X Tester')
            expect(pdfDocWithMetadata.getProducer()).toBe('pdf-lib')
            expect(pdfDocWithMetadata.getCreator()).toBe('factur-x.js')
            expect(pdfDocWithMetadata.getCreationDate()?.getTime()).toBe(new Date(2024, 10, 1).getTime())
            expect(pdfDocWithMetadata.getModificationDate()?.getTime()).toBe(new Date(2024, 10, 1).getTime())
        })

        test('Check DocumentID to be correct', () => {
            const documentID = (pdfDocWithMetadata.context.trailerInfo.ID as PDFArray).asArray()
            expect(documentID.length).toBe(2)
            expect((documentID[0] as PDFString).decodeText()).toBe('RE12345')
            expect((documentID[1] as PDFString).decodeText()).toBe('RE12345')
        })

        describe('XMP scheme is correctly embedded', () => {
            let xmpMetadata: Uint8Array | undefined
            let xmpMetadataDict: PDFDict | undefined
            let interpretedMetadata: any
            let rdfDescription: any
            beforeAll(() => {
                const xmpMetadataRef = pdfDocWithMetadata.catalog.get(PDFName.of('Metadata')) as PDFRef
                const xmpMetadataStream = pdfDocWithMetadata.context.lookupMaybe(
                    xmpMetadataRef,
                    PDFStream
                ) as PDFRawStream
                xmpMetadataDict = xmpMetadataStream?.dict
                console.log(xmpMetadataStream)
                xmpMetadata = xmpMetadataStream ? decodePDFRawStream(xmpMetadataStream).decode() : undefined
                const parser = new XMLParser()

                interpretedMetadata = xmpMetadata && parser.parse(Buffer.from(xmpMetadata))
                rdfDescription = interpretedMetadata['x:xmpmeta']?.['rdf:RDF']?.['rdf:Description']
            })
            test('XMP Metadata is correctly embedded', () => {
                expect(xmpMetadata).toBeDefined()
                expect(xmpMetadataDict).toBeDefined()
                expect(xmpMetadataDict?.lookupMaybe(PDFName.of('Type'), PDFName)?.decodeText()).toBe('Metadata')
                expect(xmpMetadataDict?.lookupMaybe(PDFName.of('Subtype'), PDFName)?.decodeText()).toBe('XML')
                expect(xmpMetadataDict?.lookupMaybe(PDFName.of('Length'), PDFNumber)?.asNumber()).toBe(
                    xmpMetadata?.length
                )
                expect(rdfDescription).toBeDefined()
            })
            describe('Standard part of XMP is correct', () => {
                test('Basic Info to be correct', () => {
                    const basicInfo = findObjectByKey(rdfDescription, 'dc:format')
                    expect(basicInfo).toBeDefined()
                    expect(basicInfo && basicInfo['dc:format']).toBe('application/pdf')
                    expect(basicInfo && basicInfo['dc:creator']?.['rdf:Seq']?.['rdf:li']).toBe('Factur X Tester')
                    expect(basicInfo && basicInfo['dc:title']?.['rdf:Alt']?.['rdf:li']).toBe('Test Invoice')
                })
                test('Tool Info to be correct', () => {
                    const toolInfo = findObjectByKey(rdfDescription, 'xmp:CreatorTool')
                    expect(toolInfo).toBeDefined()
                    expect(toolInfo && toolInfo['xmp:CreatorTool']).toBe('factur-x.js')
                    expect(toolInfo && toolInfo['xmp:CreateDate']).toBe('2024-10-31T23:00:00Z')
                    expect(toolInfo && toolInfo['xmp:ModifyDate']).toBe('2024-10-31T23:00:00Z')
                    expect(toolInfo && toolInfo['xmp:MetadataDate']).toBe('2024-10-31T23:00:00Z')
                    const producerInfo = findObjectByKey(rdfDescription, 'pdf:Producer')
                    expect(producerInfo && producerInfo['pdf:Producer']).toBe('pdf-lib')
                })
                test('PDF Standard is set to PDF/A-3', () => {
                    const pdfStandard = findObjectByKey(rdfDescription, 'pdfaid:part')
                    expect(pdfStandard).toBeDefined()
                    expect(pdfStandard && pdfStandard['pdfaid:part']).toBe(3)
                    expect(pdfStandard && pdfStandard['pdfaid:conformance']).toBe('B')
                })
            })
            describe('Factur-X part of XMP is correct', () => {
                test('All Data is according to specification', () => {
                    const facturX = findObjectByKey(rdfDescription, 'fx:DocumentType')
                    expect(facturX).toBeDefined()
                    expect(facturX && facturX['fx:DocumentType']).toBe('INVOICE')
                    expect(facturX && facturX['fx:DocumentFileName']).toBe('factur-x.xml')
                    expect(facturX && facturX['fx:Version']).toBe(1)
                    expect(facturX && facturX['fx:ConformanceLevel']).toBe('MINIMUM')
                })
            })
            describe('RDF extention scheme for Factur-X is well formed', () => {
                let fxExtension: any
                let fxProperties: any[]
                beforeAll(() => {
                    const extensions = findObjectByKey(rdfDescription, 'pdfaExtension:schemas')
                    fxExtension = extensions && extensions['pdfaExtension:schemas']?.['rdf:Bag']?.['rdf:li']
                    fxProperties = fxExtension && fxExtension['pdfaSchema:property']?.['rdf:Seq']?.['rdf:li']
                })
                test('Properties of scheme are in correct framing', () => {
                    expect(fxExtension).toBeDefined()
                    expect(fxExtension && fxExtension['pdfaSchema:schema']).toBe('Factur-X PDFA Extension Schema')
                    expect(fxExtension && fxExtension['pdfaSchema:namespaceURI']).toBe(
                        'urn:factur-x:pdfa:CrossIndustryDocument:invoice:1p0#'
                    )
                    expect(fxExtension && fxExtension['pdfaSchema:prefix']).toBe('fx')
                    console.log(fxProperties)
                    expect(fxProperties).toBeDefined()
                })
                test('Property "DocumentFileName" is correctly described', () => {
                    const property = fxProperties.find(prop => prop['pdfaProperty:name'] === 'DocumentFileName')
                    expect(property).toBeDefined()
                    expect(property && property['pdfaProperty:valueType']).toBe('Text')
                    expect(property && property['pdfaProperty:category']).toBe('external')
                    expect(property && property['pdfaProperty:description']).toBe(
                        'name of the embedded XML invoice file'
                    )
                })

                test('Property "DocumentType" is correctly described', () => {
                    const property = fxProperties.find(prop => prop['pdfaProperty:name'] === 'DocumentType')
                    expect(property).toBeDefined()
                    expect(property && property['pdfaProperty:valueType']).toBe('Text')
                    expect(property && property['pdfaProperty:category']).toBe('external')
                    expect(property && property['pdfaProperty:description']).toBe('INVOICE')
                })

                test('Property "Version" is correctly described', () => {
                    const property = fxProperties.find(prop => prop['pdfaProperty:name'] === 'Version')
                    expect(property).toBeDefined()
                    expect(property && property['pdfaProperty:valueType']).toBe('Text')
                    expect(property && property['pdfaProperty:category']).toBe('external')
                    expect(property && property['pdfaProperty:description']).toBe(
                        'The actual version of the ZUGFeRD data'
                    )
                })

                test('Property "ConformanceLevel" is correctly described', () => {
                    const property = fxProperties.find(prop => prop['pdfaProperty:name'] === 'ConformanceLevel')
                    expect(property).toBeDefined()
                    expect(property && property['pdfaProperty:valueType']).toBe('Text')
                    expect(property && property['pdfaProperty:category']).toBe('external')
                    expect(property && property['pdfaProperty:description']).toBe(
                        'The conformance level of the ZUGFeRD data'
                    )
                })
            })
        })
    })
})

function findObjectByKey(array: Record<string, any>[], key: string): Record<string, any> | undefined {
    return array.find(obj => key in obj)
}
