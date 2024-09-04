import { PDFDict, PDFDocument, PDFName, PDFString, PDFStream, PDFRawStream, decodePDFRawStream } from 'pdf-lib'
import ProfileBasic from './types/profileBasic'
import { DOCUMENT_TYPES } from './types/documentTypes'
import { XMLDocument } from './xml'
// import iso31661 from 'iso-3166-1'

const FACTUR_X_FILENAME = PDFString.of('factur-x.xml').toString()

// TODO: add getVAT() helper on buyer and seller
// TODO: add getValueByBusinessTerm() function (doc.getValueByBusinessTerm('BT-23') === 'A1')

export class FacturX {
    public data: ProfileBasic

    private _raw: any
    private pdf: PDFDocument | undefined

    constructor(data: ProfileBasic) {
        this.data = data
    }

    get profile () {
        const profileId = this._raw?.['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocumentContext']?.['ram:GuidelineSpecifiedDocumentContextParameter']?.['ram:ID']
        if (!profileId) {
            throw new Error('missing profile identifier')
        }

        switch (profileId) {
            case 'urn:factur-x.eu:1p0:minimum':
                return 'minimum'
            default:
                throw new Error(`unknown profile: ${profileId}`)
        }
    }

    public static async fromPDF(bytes: string | Uint8Array | ArrayBuffer): Promise<FacturX> {
        const pdf = await PDFDocument.load(bytes)

        // Search for factur-x.xml in embedded files
        for (const [_, object] of pdf.context.enumerateIndirectObjects()) {
            if (object instanceof PDFDict && object.lookupMaybe(PDFName.of('F'), PDFString)?.toString() === FACTUR_X_FILENAME) {
                const stream = object.lookup(PDFName.of('EF'), PDFDict).lookup(PDFName.of('F'), PDFStream) as PDFRawStream
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

        const meta = {
            businessProcessType: doc.getText('/rsm:CrossIndustryInvoice/rsm:ExchangedDocumentContext/ram:BusinessProcessSpecifiedDocumentContext/ram:ID/text()') ?? 'A1',
            specificationProfile: doc.getRequiredIdentifier('/rsm:CrossIndustryInvoice/rsm:ExchangedDocumentContext/ram:GuidelineSpecifiedDocumentContextParameter/ram:ID/text()')
        }
        
        const documentId = doc.getRequiredIdentifier('/rsm:CrossIndustryInvoice/rsm:ExchangedDocument/ram:ID/text()')
        const documentType = doc.getRequiredCode('/rsm:CrossIndustryInvoice/rsm:ExchangedDocument/ram:TypeCode/text()')
        const documentDate = doc.getRequiredDate('/rsm:CrossIndustryInvoice/rsm:ExchangedDocument/ram:IssueDateTime/udt:DateTimeString/text()')
        const notes = doc.getNodes('/rsm:CrossIndustryInvoice/rsm:ExchangedDocument/ram:IncludedNote').map(node => ({
            text: node.getRequiredText('/ram:IncludedNote/ram:Content/text()'),
            code: node.getText('/ram:IncludedNote/ram:SubjectCode/text()')
        }))
        const buyerReference = doc.getText('/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:BuyerReference/text()')

        const seller = doc.getNodes('/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:SellerTradeParty')?.map(node => {
            const postalAddress = node.getNodes('/ram:SellerTradeParty/ram:PostalTradeAddress')?.map(node => ({
                address: [
                    node.getText('/ram:PostalTradeAddress/ram:LineOne/text()'),
                    node.getText('/ram:PostalTradeAddress/ram:LineTwo/text()'),
                    node.getText('/ram:PostalTradeAddress/ram:LineThree/text()'),
                ],
                postCode: node.getText('/ram:PostalTradeAddress/ram:PostcodeCode/text()'),
                city: node.getText('/ram:PostalTradeAddress/ram:CityName/text()'),
                countryCode: node.getRequiredCode('/ram:PostalTradeAddress/ram:CountryID/text()'),
                countrySubdivision: node.getCode('/ram:PostalTradeAddress/ram:CountrySubDivisionName/text()')
            })).at(0)

            if (!postalAddress) {
                throw new Error('XML contains invalid Seller Postal Address')
            }

            const taxRegistrations = node.getNodes('/ram:SellerTradeParty/ram:SpecifiedTaxRegistration')?.map(node => ({
                type: node.getRequiredIdentifier('string(/ram:SpecifiedTaxRegistration/ram:ID/@schemeID)'),
                value: node.getIdentifier('/ram:SpecifiedTaxRegistration/ram:ID/text()')
            })) || []

            return {
                sellerId: node.getIdentifier('/ram:SellerTradeParty/ram:ID/text()'),
                sellerName: node.getRequiredText('/ram:SellerTradeParty/ram:Name/text()'),
                postalAddress,
                taxRegistrations
            }
        }).at(0)

        const buyer = doc.getNodes('/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:BuyerTradeParty')?.map(node => {
            const postalAddress = node.getNodes('/ram:BuyerTradeParty/ram:PostalTradeAddress')?.map(node => ({
                address: [
                    node.getText('/ram:PostalTradeAddress/ram:LineOne/text()'),
                    node.getText('/ram:PostalTradeAddress/ram:LineTwo/text()'),
                    node.getText('/ram:PostalTradeAddress/ram:LineThree/text()'),
                ],
                postCode: node.getText('/ram:PostalTradeAddress/ram:PostcodeCode/text()'),
                city: node.getText('/ram:PostalTradeAddress/ram:CityName/text()'),
                countryCode: node.getRequiredCode('/ram:PostalTradeAddress/ram:CountryID/text()'),
                countrySubdivision: node.getCode('/ram:PostalTradeAddress/ram:CountrySubDivisionName/text()')
            })).at(0)

            if (!postalAddress) {
                throw new Error('XML contains invalid Buyer Postal Address')
            }

            const taxRegistrations = node.getNodes('/ram:BuyerTradeParty/ram:SpecifiedTaxRegistration')?.map(node => ({
                type: node.getRequiredIdentifier('string(/ram:SpecifiedTaxRegistration/ram:ID/@schemeID)'),
                value: node.getIdentifier('/ram:SpecifiedTaxRegistration/ram:ID/text()')
            })) || []

            return {
                buyerId: node.getIdentifier('/ram:BuyerTradeParty/ram:ID/text()'),
                buyerName: node.getRequiredText('/ram:BuyerTradeParty/ram:Name/text()'),
                postalAddress,
                taxRegistrations
            }
        }).at(0)

        const shipTo = doc.getNodes('/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeDelivery/ram:ShipToTradeParty')?.map(node => {
            const postalAddress = node.getNodes('/ram:ShipToTradeParty/ram:PostalTradeAddress')?.map(node => ({
                address: [
                    node.getText('/ram:PostalTradeAddress/ram:LineOne/text()'),
                    node.getText('/ram:PostalTradeAddress/ram:LineTwo/text()'),
                    node.getText('/ram:PostalTradeAddress/ram:LineThree/text()'),
                ],
                postCode: node.getText('/ram:PostalTradeAddress/ram:PostcodeCode/text()'),
                city: node.getText('/ram:PostalTradeAddress/ram:CityName/text()'),
                countryCode: node.getRequiredCode('/ram:PostalTradeAddress/ram:CountryID/text()'),
                countrySubdivision: node.getCode('/ram:PostalTradeAddress/ram:CountrySubDivisionName/text()')
            })).at(0)

            return {
                shipToName: node.getText('/ram:ShipToTradeParty/ram:Name/text()'),
                postalAddress
            }
        }).at(0)

        const shippingDate = doc.getDate('/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeDelivery/ram:ActualDeliverySupplyChainEvent/ram:OccurrenceDateTime/udt:DateTimeString/text()')

        // Sanity Checks
        if (!Object.values<string>(DOCUMENT_TYPES).includes(documentType)) {
            throw new Error('XML contains invalid Invoice type code: ' + documentType)
        }
        if (!seller) {
            throw new Error('XML is missing Seller Entity')
        }
        if (!buyer) {
            throw new Error('XML is missing Buyer Entity')
        }

        const out: ProfileBasic = {
            meta,
            documentId,
            documentType: documentType as DOCUMENT_TYPES,
            documentDate,
            notes,
            buyerReference,
            seller,
            buyer,
            shipTo,
            shippingDate
        }

        const instance = new FacturX(out)
        instance._raw = doc

        return instance
    }
}
