import { PDFDict, PDFDocument, PDFName, PDFString, PDFStream, PDFRawStream, decodePDFRawStream } from 'pdf-lib'
import ProfileBasic, { PostalAddressType } from './types/profileBasic'
import { DOCUMENT_TYPES } from './types/documentTypes'
import { XMLDocument } from './xml'
import Converter, { isMinimum, SchemeNames, XMLSchemeNames } from './profiles'
import MinimumProfileConverter, { MinimumProfile } from './profiles/minimum/minimum'
import BasicProfileConverter, { BasicProfile } from './profiles/basic/basic'
// import iso31661 from 'iso-3166-1'

const FACTUR_X_FILENAME = PDFString.of('factur-x.xml').toString()

// TODO: add getVAT() helper on buyer and seller
// TODO: add getValueByBusinessTerm() function (doc.getValueByBusinessTerm('BT-23') === 'A1')

type AnyProfile = MinimumProfile | BasicProfile

export class FacturX {
    private _data: MinimumProfileConverter | BasicProfileConverter;
    private _sourceXml: XMLDocument | undefined;

    private pdf: PDFDocument | undefined

    constructor(data: MinimumProfile, profileName: "MINIMUM");
    constructor(data: BasicProfile, profileName: "BASIC");
    constructor(data: any, profileName: XMLSchemeNames);
    constructor(data: any, profileName: SchemeNames | XMLSchemeNames) {
        const profileOnly: SchemeNames = profileName.split("_")[0] as SchemeNames;
        switch (profileOnly) {
            case "MINIMUM": {
                this._data = new MinimumProfileConverter(data);
            } break;
            case "BASIC": {
                this._data = new BasicProfileConverter(data);
            }
            default: throw new Error("Unknown Profile given")
        }
    }

    get invoice() {
        return this._data.invoice;
    }

    set invoice(data: AnyProfile) {
        this._data.invoice = data;
    }

    get xml() {
        return this._data.xml
    }

    get profile() {
        return this._data;
    }

    public buildXML(): string | undefined {
        let xmlConverter = new XMLDocument(this.xml);
        return xmlConverter.data.toString();
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
        const doc = new XMLDocument(xml);
        const profile = this.checkProfileBeforeCreation(doc.dom);
        const instance = new FacturX(doc.dom, `${profile}_XML`);
        instance._sourceXml = doc;
        return instance
    }

    private static checkProfileBeforeCreation(xmlData: any): SchemeNames {
        const profileId = xmlData?.['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocumentContext']?.['ram:GuidelineSpecifiedDocumentContextParameter']?.['ram:ID']?.['#text']
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


/*

OLD IMPLEMENTATION:
        const meta = {
            businessProcessType: doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocumentContext']?.['ram:BusinessProcessSpecifiedDocumentContext']?.['ram:ID']?.['#text'] ?? 'A1',
            specificationProfile: doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocumentContext']?.['ram:GuidelineSpecifiedDocumentContextParameter']?.['ram:ID']?.['#text']
        }

        const documentId = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocument']?.['ram:ID']?.['#text'];
        const documentType = doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocument']?.['ram:TypeCode']?.['#text'];
        const documentDate = doc.getRequiredDate(doc.dom['rsm:CrossIndustryInvoice']?.['rsm:ExchangedDocument']?.['ram:IssueDateTime']?.['udt:DateTimeString']?.['#text'])
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



function createPostalAddress(addressNode: any): PostalAddressType | undefined {
    if (!addressNode) return undefined;
    let postalAddress = {
        address: [
            addressNode["ram:LineOne"]?.['#text'],
            addressNode["ram:LineTwo"]?.['#text'],
            addressNode["ram:LineThree"]?.['#text'],
        ],
        postCode: addressNode["ram:PostcodeCode"]?.['#text'],
        city: addressNode["ram:CityName"]?.['#text'],
        countryCode: addressNode["ram:CountryID"]?.['#text'],
        countrySubdivision: addressNode["ram:CountrySubDivisionName"]?.['#text']
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
        sellerId: sellerNode["ram:ID"]?.['#text'],
        sellerName: sellerNode["ram:Name"]?.['#text'],
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
        buyerId: buyerNode["ram:ID"]?.['#text'],
        buyerName: buyerNode["ram:Name"]?.['#text'],
        postalAddress,
        taxRegistrations
    }
}

function createShipTo(node: any) {
    if (!node) return undefined;
    const postalAddress = createPostalAddress(node["ram:PostalTradeAddress"]);

    return {
        shipToName: node["ram:Name"]?.['#text'],
        postalAddress
    }
}

function bla(x: BasicProfileConverter | MinimumProfileConverter) {
    let data: string;
    if (x.scheme === "BASIC") {
        data = x.invoice.meta.guidelineSpecifiedDocumentContextParameter
    }

    if (isMinimum(x)) {
        data = x.invoice.seller.name
    }

}*/
