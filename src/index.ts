import { PDFDict, PDFDocument, PDFName, PDFString, PDFStream, PDFRawStream, decodePDFRawStream } from 'pdf-lib'
import ProfileBasic, { PostalAddressType } from './types/profileBasic'
import { DOCUMENT_TYPES } from './types/documentTypes'
import { XMLDocument } from './xml'
import { DateTimeString } from './types/udt/types'
// import iso31661 from 'iso-3166-1'

const FACTUR_X_FILENAME = PDFString.of('factur-x.xml').toString()

// TODO: add getVAT() helper on buyer and seller
// TODO: add getValueByBusinessTerm() function (doc.getValueByBusinessTerm('BT-23') === 'A1')

export class FacturX {
    public data: ProfileBasic

    public _raw: any
    private pdf: PDFDocument | undefined

    constructor(data: ProfileBasic) {
        this.data = data
    }

    get profile() {
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
            businessProcessType: doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocumentContext']?.['ram:BusinessProcessSpecifiedDocumentContext']?.['ram:ID'] ?? 'A1',
            specificationProfile: doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocumentContext']?.['ram:GuidelineSpecifiedDocumentContextParameter']?.['ram:ID']
        }

        const documentId = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocument']?.['ram:ID'];
        const documentType = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocument']?.['ram:TypeCode'];
        const documentDate = doc.getRequiredDate(doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocument']?.['ram:IssueDateTime']?.['udt:DateTimeString']?.['#text'] as DateTimeString)
        const notes = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocument']?.['ram:IncludedNote']?.map((node: any) => ({
            text: node['ram:Content'],
            code: node['/ram:SubjectCode']
        }))
        const buyerReference = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:SupplyChainTradeTransaction']?.['ram:ApplicableHeaderTradeAgreement']?.['ram:BuyerReference']

        const sellerNode = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:SupplyChainTradeTransaction']?.['ram:ApplicableHeaderTradeAgreement']?.['ram:SellerTradeParty']

        let seller: any;
        if (Array.isArray(sellerNode)) seller = sellerNode.map((node: any) => createSeller(node)).at(0)
        else seller = createSeller(sellerNode);

        const buyerNode = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:SupplyChainTradeTransaction']?.['ram:ApplicableHeaderTradeAgreement']?.['ram:BuyerTradeParty']
        let buyer: any
        if (Array.isArray(buyerNode)) buyer = buyerNode.map((node: any) => createBuyer(node)).at(0)
        else buyer = createBuyer(buyerNode);


        const shipTo = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:SupplyChainTradeTransaction']?.['ram:ApplicableHeaderTradeDelivery']?.['ram:ShipToTradeParty']
        if (Array.isArray(shipTo)) shipTo.map((node: any) => createShipTo(node)).at(0)
        else createShipTo(shipTo);

        const shippingDate = doc.getDate(doc.dom['rsm:CrossIndustryInvoice']?.['rsm:SupplyChainTradeTransaction']?.['ram:ApplicableHeaderTradeDelivery']?.['ram:ActualDeliverySupplyChainEvent']?.['ram:OccurrenceDateTime']?.['udt:DateTimeString']?.['#text'])
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

function createPostalAddress(addressNode: any): PostalAddressType | undefined {
    if (!addressNode) return undefined;
    let postalAddress = {
        address: [
            addressNode["ram:LineOne"],
            addressNode["ram:LineTwo"],
            addressNode["ram:LineThree"],
        ],
        postCode: addressNode["ram:PostcodeCode"],
        city: addressNode["ram:CityName"],
        countryCode: addressNode["ram:CountryID"],
        countrySubdivision: addressNode["ram:CountrySubDivisionName"]
    }

    if (!postalAddress.address[0] && !postalAddress.postCode && !postalAddress.city && !postalAddress.countryCode && !postalAddress.countrySubdivision) return undefined;
    return postalAddress;

}

function createSeller(sellerNode: any) {

    const postalAddress = createPostalAddress(sellerNode["ram:PostalTradeAddress"]);

    if (!postalAddress) {
        throw new Error('XML contains invalid Seller Postal Address')
    }

    const taxRegistrationsNode = sellerNode["ram:SpecifiedTaxRegistration"]

    let taxRegistrations;

    if (Array.isArray(taxRegistrationsNode)) taxRegistrations = taxRegistrationsNode.map((taxnode: any) => createTaxRegistration(taxnode));
    else {
        const returnedValue = createTaxRegistration(taxRegistrationsNode);
        taxRegistrations = returnedValue ? [returnedValue] : [];
    }



    return {
        sellerId: sellerNode["ram:ID"],
        sellerName: sellerNode["ram:Name"],
        postalAddress,
        taxRegistrations
    }

}

function createTaxRegistration(node: any) {

    if (!node) return undefined;
    const taxRegistration = {
        type: node["ram:ID"]?.["@schemeID"],
        value: node["ram:ID"]?.["#text"],
    }

    return taxRegistration;

}

function createBuyer(buyerNode: any) {
    const postalAddress = createPostalAddress(buyerNode["ram:PostalTradeAddress"]);

    if (!postalAddress) {
        throw new Error('XML contains invalid Buyer Postal Address')
    }

    const taxRegistrationsNode = buyerNode["ram:SpecifiedTaxRegistration"]

    let taxRegistrations;

    if (Array.isArray(taxRegistrationsNode)) taxRegistrations = taxRegistrationsNode.map((taxnode: any) => createTaxRegistration(taxnode));
    else {
        const returnedValue = createTaxRegistration(taxRegistrationsNode);
        taxRegistrations = returnedValue ? [returnedValue] : [];
    }


    return {
        buyerId: buyerNode["ram:ID"],
        buyerName: buyerNode["ram:Name"],
        postalAddress,
        taxRegistrations
    }
}

function createShipTo(node: any) {
    if (!node) return undefined;
    const postalAddress = createPostalAddress(node["ram:PostalTradeAddress"]);

    return {
        shipToName: node["ram:Name"],
        postalAddress
    }
}
