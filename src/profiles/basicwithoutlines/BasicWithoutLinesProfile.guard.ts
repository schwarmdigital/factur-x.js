/*
 * Generated type guards for "BasicWithoutLinesProfile.ts".
 * WARNING: Do not manually change this file.
 */
import { CountryIDContentType, DOCUMENT_CODES } from '../../types/qdt'
import { CURRENCY_ID } from '../../types/udt'
import { BasicWithoutLinesProfile } from './BasicWithoutLinesProfile'

function evaluate(isCorrect: boolean, varName: string, expected: string, actual: any): boolean {
    if (!isCorrect) {
        console.error(`${varName} type mismatch, expected: ${expected}, found:`, actual)
    }
    return isCorrect
}

export function isBasicWithoutLinesProfile(
    obj: unknown,
    argumentName = 'basicWithoutLinesProfile'
): obj is BasicWithoutLinesProfile {
    const typedObj = obj as BasicWithoutLinesProfile
    return (
        ((typedObj !== null && typeof typedObj === 'object') || typeof typedObj === 'function') &&
        evaluate(
            ((typedObj['meta'] !== null && typeof typedObj['meta'] === 'object') ||
                typeof typedObj['meta'] === 'function') &&
                evaluate(
                    typeof typedObj['meta']['businessProcessType'] === 'undefined' ||
                        typeof typedObj['meta']['businessProcessType'] === 'string',
                    `${argumentName}["meta"]["businessProcessType"]`,
                    'string | undefined',
                    typedObj['meta']['businessProcessType']
                ) &&
                evaluate(
                    typedObj['meta']['guidelineSpecifiedDocumentContextParameter'] === 'urn:factur-x.eu:1p0:minimum' ||
                        typedObj['meta']['guidelineSpecifiedDocumentContextParameter'] ===
                            'urn:factur-x.eu:1p0:basicwl',
                    `${argumentName}["meta"]["guidelineSpecifiedDocumentContextParameter"]`,
                    '"urn:factur-x.eu:1p0:minimum" | "urn:factur-x.eu:1p0:basicwl"',
                    typedObj['meta']['guidelineSpecifiedDocumentContextParameter']
                ),
            `${argumentName}["meta"]`,
            '{ businessProcessType: string | undefined; guidelineSpecifiedDocumentContextParameter: "urn:factur-x.eu:1p0:minimum" | "urn:factur-x.eu:1p0:basicwl"; }',
            typedObj['meta']
        ) &&
        evaluate(
            ((typedObj['document'] !== null && typeof typedObj['document'] === 'object') ||
                typeof typedObj['document'] === 'function') &&
                evaluate(
                    typeof typedObj['document']['id'] === 'string',
                    `${argumentName}["document"]["id"]`,
                    'string',
                    typedObj['document']['id']
                ) &&
                evaluate(
                    typedObj['document']['type'] === DOCUMENT_CODES.REQUEST_FOR_PAYMENT ||
                        typedObj['document']['type'] === DOCUMENT_CODES.DEBIT_NOTE_RELATED_TO_GOODS_OR_SERVICES ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CREDIT_NOTE_RELATED_TO_GOODS_OR_SERVICES ||
                        typedObj['document']['type'] === DOCUMENT_CODES.METERED_SERVICES_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CREDIT_NOTE_RELATED_TO_FINANCIAL_ADJUSTMENTS ||
                        typedObj['document']['type'] === DOCUMENT_CODES.DEBIT_NOTE_RELATED_TO_FINANCIAL_ADJUSTMENTS ||
                        typedObj['document']['type'] === DOCUMENT_CODES.TAX_NOTIFICATION ||
                        typedObj['document']['type'] === DOCUMENT_CODES.INVOICING_DATA_SHEET ||
                        typedObj['document']['type'] === DOCUMENT_CODES.DIRECT_PAYMENT_VALUATION ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PROVISIONAL_PAYMENT_VALUATION ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PAYMENT_VALUATION ||
                        typedObj['document']['type'] === DOCUMENT_CODES.INTERIM_APPLICATION_FOR_PAYMENT ||
                        typedObj['document']['type'] ===
                            DOCUMENT_CODES.FINAL_PAYMENT_REQUEST_BASED_ON_COMPLETION_OF_WORK ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PAYMENT_REQUEST_FOR_COMPLETED_UNITS ||
                        typedObj['document']['type'] === DOCUMENT_CODES.SELF_BILLED_CREDIT_NOTE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CONSOLIDATED_CREDIT_NOTE___GOODS_AND_SERVICES ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PRICE_VARIATION_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CREDIT_NOTE_FOR_PRICE_VARIATION ||
                        typedObj['document']['type'] === DOCUMENT_CODES.DELCREDERE_CREDIT_NOTE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PROFORMA_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PARTIAL_INVOICE ||
                        typedObj['document']['type'] ===
                            DOCUMENT_CODES.COMMERCIAL_INVOICE_WHICH_INCLUDES_A_PACKING_LIST ||
                        typedObj['document']['type'] === DOCUMENT_CODES.COMMERCIAL_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CREDIT_NOTE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.COMMISSION_NOTE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.DEBIT_NOTE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CORRECTED_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CONSOLIDATED_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PREPAYMENT_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.HIRE_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.TAX_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.SELF_BILLED_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.DELCREDERE_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.FACTORED_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.LEASE_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CONSIGNMENT_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.FACTORED_CREDIT_NOTE ||
                        typedObj['document']['type'] ===
                            DOCUMENT_CODES.OPTICAL_CHARACTER_READING_OCR_PAYMENT_CREDIT_NOTE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.DEBIT_ADVICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.REVERSAL_OF_DEBIT ||
                        typedObj['document']['type'] === DOCUMENT_CODES.REVERSAL_OF_CREDIT ||
                        typedObj['document']['type'] === DOCUMENT_CODES.SELF_BILLED_DEBIT_NOTE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.FORWARDERS_CREDIT_NOTE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.FORWARDERS_INVOICE_DISCREPANCY_REPORT ||
                        typedObj['document']['type'] === DOCUMENT_CODES.INSURERS_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.FORWARDERS_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PORT_CHARGES_DOCUMENTS ||
                        typedObj['document']['type'] === DOCUMENT_CODES.INVOICE_INFORMATION_FOR_ACCOUNTING_PURPOSES ||
                        typedObj['document']['type'] === DOCUMENT_CODES.FREIGHT_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CLAIM_NOTIFICATION ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CONSULAR_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PARTIAL_CONSTRUCTION_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.PARTIAL_FINAL_CONSTRUCTION_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.FINAL_CONSTRUCTION_INVOICE ||
                        typedObj['document']['type'] === DOCUMENT_CODES.CUSTOMS_INVOICE,
                    `${argumentName}["document"]["type"]`,
                    'import("./src/types/qdt").DOCUMENT_CODES',
                    typedObj['document']['type']
                ) &&
                evaluate(
                    typedObj['document']['currency'] === CURRENCY_ID.UAEDirham ||
                        typedObj['document']['currency'] === CURRENCY_ID.Afghani ||
                        typedObj['document']['currency'] === CURRENCY_ID.Lek ||
                        typedObj['document']['currency'] === CURRENCY_ID.ArmenianDram ||
                        typedObj['document']['currency'] === CURRENCY_ID.NetherlandsAntilleanGuilder ||
                        typedObj['document']['currency'] === CURRENCY_ID.Kwanza ||
                        typedObj['document']['currency'] === CURRENCY_ID.ArgentinePeso ||
                        typedObj['document']['currency'] === CURRENCY_ID.AustralianDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.ArubanFlorin ||
                        typedObj['document']['currency'] === CURRENCY_ID.AzerbaijanManat ||
                        typedObj['document']['currency'] === CURRENCY_ID.ConvertibleMark ||
                        typedObj['document']['currency'] === CURRENCY_ID.BarbadosDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Taka ||
                        typedObj['document']['currency'] === CURRENCY_ID.BulgarianLev ||
                        typedObj['document']['currency'] === CURRENCY_ID.BahrainiDinar ||
                        typedObj['document']['currency'] === CURRENCY_ID.BurundiFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.BermudianDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.BruneiDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Boliviano ||
                        typedObj['document']['currency'] === CURRENCY_ID.Mvdol ||
                        typedObj['document']['currency'] === CURRENCY_ID.BrazilianReal ||
                        typedObj['document']['currency'] === CURRENCY_ID.BahamianDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Ngultrum ||
                        typedObj['document']['currency'] === CURRENCY_ID.Pula ||
                        typedObj['document']['currency'] === CURRENCY_ID.BelarusianRuble ||
                        typedObj['document']['currency'] === CURRENCY_ID.BelizeDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.CanadianDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.CongoleseFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.WIREuro ||
                        typedObj['document']['currency'] === CURRENCY_ID.SwissFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.WIRFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.UnidaddeFomento ||
                        typedObj['document']['currency'] === CURRENCY_ID.ChileanPeso ||
                        typedObj['document']['currency'] === CURRENCY_ID.YuanRenminbi ||
                        typedObj['document']['currency'] === CURRENCY_ID.ColombianPeso ||
                        typedObj['document']['currency'] === CURRENCY_ID.UnidaddeValorReal ||
                        typedObj['document']['currency'] === CURRENCY_ID.CostaRicanColon ||
                        typedObj['document']['currency'] === CURRENCY_ID.PesoConvertible ||
                        typedObj['document']['currency'] === CURRENCY_ID.CubanPeso ||
                        typedObj['document']['currency'] === CURRENCY_ID.CaboVerdeEscudo ||
                        typedObj['document']['currency'] === CURRENCY_ID.CzechKoruna ||
                        typedObj['document']['currency'] === CURRENCY_ID.DjiboutiFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.DanishKrone ||
                        typedObj['document']['currency'] === CURRENCY_ID.DominicanPeso ||
                        typedObj['document']['currency'] === CURRENCY_ID.AlgerianDinar ||
                        typedObj['document']['currency'] === CURRENCY_ID.EgyptianPound ||
                        typedObj['document']['currency'] === CURRENCY_ID.Nakfa ||
                        typedObj['document']['currency'] === CURRENCY_ID.EthiopianBirr ||
                        typedObj['document']['currency'] === CURRENCY_ID.Euro ||
                        typedObj['document']['currency'] === CURRENCY_ID.FijiDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.FalklandIslandsPound ||
                        typedObj['document']['currency'] === CURRENCY_ID.PoundSterling ||
                        typedObj['document']['currency'] === CURRENCY_ID.Lari ||
                        typedObj['document']['currency'] === CURRENCY_ID.GhanaCedi ||
                        typedObj['document']['currency'] === CURRENCY_ID.GibraltarPound ||
                        typedObj['document']['currency'] === CURRENCY_ID.Dalasi ||
                        typedObj['document']['currency'] === CURRENCY_ID.GuineanFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.Quetzal ||
                        typedObj['document']['currency'] === CURRENCY_ID.GuyanaDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.HongKongDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Lempira ||
                        typedObj['document']['currency'] === CURRENCY_ID.Kuna ||
                        typedObj['document']['currency'] === CURRENCY_ID.Gourde ||
                        typedObj['document']['currency'] === CURRENCY_ID.Forint ||
                        typedObj['document']['currency'] === CURRENCY_ID.Rupiah ||
                        typedObj['document']['currency'] === CURRENCY_ID.NewIsraeliSheqel ||
                        typedObj['document']['currency'] === CURRENCY_ID.IndianRupee ||
                        typedObj['document']['currency'] === CURRENCY_ID.IraqiDinar ||
                        typedObj['document']['currency'] === CURRENCY_ID.IranianRial ||
                        typedObj['document']['currency'] === CURRENCY_ID.IcelandKrona ||
                        typedObj['document']['currency'] === CURRENCY_ID.JamaicanDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.JordanianDinar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Yen ||
                        typedObj['document']['currency'] === CURRENCY_ID.KenyanShilling ||
                        typedObj['document']['currency'] === CURRENCY_ID.Som ||
                        typedObj['document']['currency'] === CURRENCY_ID.Riel ||
                        typedObj['document']['currency'] === CURRENCY_ID.ComorianFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.NorthKoreanWon ||
                        typedObj['document']['currency'] === CURRENCY_ID.Won ||
                        typedObj['document']['currency'] === CURRENCY_ID.KuwaitiDinar ||
                        typedObj['document']['currency'] === CURRENCY_ID.CaymanIslandsDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Tenge ||
                        typedObj['document']['currency'] === CURRENCY_ID.LaoKip ||
                        typedObj['document']['currency'] === CURRENCY_ID.LebanesePound ||
                        typedObj['document']['currency'] === CURRENCY_ID.SriLankaRupee ||
                        typedObj['document']['currency'] === CURRENCY_ID.LiberianDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Loti ||
                        typedObj['document']['currency'] === CURRENCY_ID.LibyanDinar ||
                        typedObj['document']['currency'] === CURRENCY_ID.MoroccanDirham ||
                        typedObj['document']['currency'] === CURRENCY_ID.MoldovanLeu ||
                        typedObj['document']['currency'] === CURRENCY_ID.MalagasyAriary ||
                        typedObj['document']['currency'] === CURRENCY_ID.Denar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Kyat ||
                        typedObj['document']['currency'] === CURRENCY_ID.Tugrik ||
                        typedObj['document']['currency'] === CURRENCY_ID.Pataca ||
                        typedObj['document']['currency'] === CURRENCY_ID.Ouguiya ||
                        typedObj['document']['currency'] === CURRENCY_ID.MauritiusRupee ||
                        typedObj['document']['currency'] === CURRENCY_ID.Rufiyaa ||
                        typedObj['document']['currency'] === CURRENCY_ID.MalawiKwacha ||
                        typedObj['document']['currency'] === CURRENCY_ID.MexicanPeso ||
                        typedObj['document']['currency'] === CURRENCY_ID.MexicanUnidaddeInversion ||
                        typedObj['document']['currency'] === CURRENCY_ID.MalaysianRinggit ||
                        typedObj['document']['currency'] === CURRENCY_ID.MozambiqueMetical ||
                        typedObj['document']['currency'] === CURRENCY_ID.NamibiaDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.Naira ||
                        typedObj['document']['currency'] === CURRENCY_ID.CordobaOro ||
                        typedObj['document']['currency'] === CURRENCY_ID.NorwegianKrone ||
                        typedObj['document']['currency'] === CURRENCY_ID.NepaleseRupee ||
                        typedObj['document']['currency'] === CURRENCY_ID.NewZealandDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.RialOmani ||
                        typedObj['document']['currency'] === CURRENCY_ID.Balboa ||
                        typedObj['document']['currency'] === CURRENCY_ID.Sol ||
                        typedObj['document']['currency'] === CURRENCY_ID.Kina ||
                        typedObj['document']['currency'] === CURRENCY_ID.PhilippinePeso ||
                        typedObj['document']['currency'] === CURRENCY_ID.PakistanRupee ||
                        typedObj['document']['currency'] === CURRENCY_ID.Zloty ||
                        typedObj['document']['currency'] === CURRENCY_ID.Guarani ||
                        typedObj['document']['currency'] === CURRENCY_ID.QatariRial ||
                        typedObj['document']['currency'] === CURRENCY_ID.RomanianLeu ||
                        typedObj['document']['currency'] === CURRENCY_ID.SerbianDinar ||
                        typedObj['document']['currency'] === CURRENCY_ID.RussianRuble ||
                        typedObj['document']['currency'] === CURRENCY_ID.RwandaFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.SaudiRiyal ||
                        typedObj['document']['currency'] === CURRENCY_ID.SolomonIslandsDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.SeychellesRupee ||
                        typedObj['document']['currency'] === CURRENCY_ID.SudanesePound ||
                        typedObj['document']['currency'] === CURRENCY_ID.SwedishKrona ||
                        typedObj['document']['currency'] === CURRENCY_ID.SingaporeDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.SaintHelenaPound ||
                        typedObj['document']['currency'] === CURRENCY_ID.Leone ||
                        typedObj['document']['currency'] === CURRENCY_ID.SomaliShilling ||
                        typedObj['document']['currency'] === CURRENCY_ID.SurinamDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.SouthSudanesePound ||
                        typedObj['document']['currency'] === CURRENCY_ID.Dobra ||
                        typedObj['document']['currency'] === CURRENCY_ID.ElSalvadorColon ||
                        typedObj['document']['currency'] === CURRENCY_ID.SyrianPound ||
                        typedObj['document']['currency'] === CURRENCY_ID.Lilangeni ||
                        typedObj['document']['currency'] === CURRENCY_ID.Baht ||
                        typedObj['document']['currency'] === CURRENCY_ID.Somoni ||
                        typedObj['document']['currency'] === CURRENCY_ID.TurkmenistanNewManat ||
                        typedObj['document']['currency'] === CURRENCY_ID.TunisianDinar ||
                        typedObj['document']['currency'] === CURRENCY_ID.PaAnga ||
                        typedObj['document']['currency'] === CURRENCY_ID.TurkishLira ||
                        typedObj['document']['currency'] === CURRENCY_ID.TrinidadandTobagoDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.NewTaiwanDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.TanzanianShilling ||
                        typedObj['document']['currency'] === CURRENCY_ID.Hryvnia ||
                        typedObj['document']['currency'] === CURRENCY_ID.UgandaShilling ||
                        typedObj['document']['currency'] === CURRENCY_ID.USDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.USDollarNextday ||
                        typedObj['document']['currency'] === CURRENCY_ID.UruguayPesoenUnidadesIndexadas ||
                        typedObj['document']['currency'] === CURRENCY_ID.PesoUruguayo ||
                        typedObj['document']['currency'] === CURRENCY_ID.UnidadPrevisional ||
                        typedObj['document']['currency'] === CURRENCY_ID.UzbekistanSum ||
                        typedObj['document']['currency'] === CURRENCY_ID.BolívarSoberano ||
                        typedObj['document']['currency'] === CURRENCY_ID.Dong ||
                        typedObj['document']['currency'] === CURRENCY_ID.Vatu ||
                        typedObj['document']['currency'] === CURRENCY_ID.Tala ||
                        typedObj['document']['currency'] === CURRENCY_ID.CFAFrancBEAC ||
                        typedObj['document']['currency'] === CURRENCY_ID.Silver ||
                        typedObj['document']['currency'] === CURRENCY_ID.Gold ||
                        typedObj['document']['currency'] === CURRENCY_ID.BondMarketsUnitEuropeanCompositeUnit ||
                        typedObj['document']['currency'] === CURRENCY_ID.BondMarketsUnitEuropeanMonetaryUnit ||
                        typedObj['document']['currency'] === CURRENCY_ID.BondMarketsUnitEuropeanUnitofAccount9 ||
                        typedObj['document']['currency'] === CURRENCY_ID.BondMarketsUnitEuropeanUnitofAccount17 ||
                        typedObj['document']['currency'] === CURRENCY_ID.EastCaribbeanDollar ||
                        typedObj['document']['currency'] === CURRENCY_ID.SDR ||
                        typedObj['document']['currency'] === CURRENCY_ID.CFAFrancBCEAO ||
                        typedObj['document']['currency'] === CURRENCY_ID.Palladium ||
                        typedObj['document']['currency'] === CURRENCY_ID.CFPFranc ||
                        typedObj['document']['currency'] === CURRENCY_ID.Platinum ||
                        typedObj['document']['currency'] === CURRENCY_ID.Sucre ||
                        typedObj['document']['currency'] === CURRENCY_ID.TestingCode ||
                        typedObj['document']['currency'] === CURRENCY_ID.ADBUnitofAccount ||
                        typedObj['document']['currency'] === CURRENCY_ID.NoCurrencyInvolved ||
                        typedObj['document']['currency'] === CURRENCY_ID.YemeniRial ||
                        typedObj['document']['currency'] === CURRENCY_ID.Rand ||
                        typedObj['document']['currency'] === CURRENCY_ID.ZambianKwacha ||
                        typedObj['document']['currency'] === CURRENCY_ID.ZimbabweDollar,
                    `${argumentName}["document"]["currency"]`,
                    'import("./src/types/udt").CURRENCY_ID',
                    typedObj['document']['currency']
                ) &&
                evaluate(
                    ((typedObj['document']['dateOfIssue'] !== null &&
                        typeof typedObj['document']['dateOfIssue'] === 'object') ||
                        typeof typedObj['document']['dateOfIssue'] === 'function') &&
                        evaluate(
                            typedObj['document']['dateOfIssue']['date'] instanceof Date,
                            `${argumentName}["document"]["dateOfIssue"]["date"]`,
                            'Date',
                            typedObj['document']['dateOfIssue']['date']
                        ) &&
                        evaluate(
                            typedObj['document']['dateOfIssue']['format'] === '102',
                            `${argumentName}["document"]["dateOfIssue"]["format"]`,
                            '"102"',
                            typedObj['document']['dateOfIssue']['format']
                        ),
                    `${argumentName}["document"]["dateOfIssue"]`,
                    'import("./src/types/udt/DateTimeTypeConverter").DateTimeType',
                    typedObj['document']['dateOfIssue']
                ),
            `${argumentName}["document"]`,
            '{ id: string; type: import("./src/types/qdt").DOCUMENT_CODES; currency: import("/Users/js/src/github.com/schwarmdigital/factur-x.js/src/types/udt").CURRENCY_ID; dateOfIssue: import("/Users/js/src/github.com/schwarmdigital/factur-x.js/src/types/udt/DateTimeTypeConverter").DateTimeType; }',
            typedObj['document']
        ) &&
        evaluate(
            ((typedObj['seller'] !== null && typeof typedObj['seller'] === 'object') ||
                typeof typedObj['seller'] === 'function') &&
                evaluate(
                    typeof typedObj['seller']['name'] === 'string',
                    `${argumentName}["seller"]["name"]`,
                    'string',
                    typedObj['seller']['name']
                ) &&
                evaluate(
                    typeof typedObj['seller']['specifiedLegalOrganization'] === 'undefined' ||
                        (((typedObj['seller']['specifiedLegalOrganization'] !== null &&
                            typeof typedObj['seller']['specifiedLegalOrganization'] === 'object') ||
                            typeof typedObj['seller']['specifiedLegalOrganization'] === 'function') &&
                            evaluate(
                                typeof typedObj['seller']['specifiedLegalOrganization']['id'] === 'string',
                                `${argumentName}["seller"]["specifiedLegalOrganization"]["id"]`,
                                'string',
                                typedObj['seller']['specifiedLegalOrganization']['id']
                            ) &&
                            evaluate(
                                typeof typedObj['seller']['specifiedLegalOrganization']['scheme'] === 'undefined' ||
                                    typeof typedObj['seller']['specifiedLegalOrganization']['scheme'] === 'string',
                                `${argumentName}["seller"]["specifiedLegalOrganization"]["scheme"]`,
                                'string | undefined',
                                typedObj['seller']['specifiedLegalOrganization']['scheme']
                            )) ||
                        (((typedObj['seller']['specifiedLegalOrganization'] !== null &&
                            typeof typedObj['seller']['specifiedLegalOrganization'] === 'object') ||
                            typeof typedObj['seller']['specifiedLegalOrganization'] === 'function') &&
                            evaluate(
                                typeof typedObj['seller']['specifiedLegalOrganization']['id'] === 'string',
                                `${argumentName}["seller"]["specifiedLegalOrganization"]["id"]`,
                                'string',
                                typedObj['seller']['specifiedLegalOrganization']['id']
                            ) &&
                            evaluate(
                                typeof typedObj['seller']['specifiedLegalOrganization']['scheme'] === 'undefined' ||
                                    typeof typedObj['seller']['specifiedLegalOrganization']['scheme'] === 'string',
                                `${argumentName}["seller"]["specifiedLegalOrganization"]["scheme"]`,
                                'string | undefined',
                                typedObj['seller']['specifiedLegalOrganization']['scheme']
                            )),
                    `${argumentName}["seller"]["specifiedLegalOrganization"]`,
                    'import("./src/types/udt/IDTypeWithSchemeConverter").IDTypeWithScheme | { id: string; scheme: string | undefined; } | undefined',
                    typedObj['seller']['specifiedLegalOrganization']
                ) &&
                evaluate(
                    ((typedObj['seller']['postalAddress'] !== null &&
                        typeof typedObj['seller']['postalAddress'] === 'object') ||
                        typeof typedObj['seller']['postalAddress'] === 'function') &&
                        evaluate(
                            typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ANDORRA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.UNITED_ARAB_EMIRATES ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.AFGHANISTAN ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.ANTIGUA_AND_BARBUDA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ANGUILLA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ALBANIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ARMENIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ANGOLA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ANTARCTICA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ARGENTINA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.AMERICAN_SAMOA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.AUSTRIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.AUSTRALIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ARUBA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ALAND_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.AZERBAIJAN ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.BOSNIA_AND_HERZEGOVINA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BARBADOS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BANGLADESH ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BELGIUM ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BURKINA_FASO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BULGARIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BAHRAIN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BURUNDI ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BENIN ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SAINT_BARTHELEMY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BERMUDA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.BRUNEI_DARUSSALAM ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BOLIVIA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.BONAIRE_SINT_EUSTATIUS_AND_SABA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BRAZIL ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BAHAMAS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BHUTAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BOUVET_ISLAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BOTSWANA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BELARUS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.BELIZE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CANADA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.COCOS_KEELING_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.CENTRAL_AFRICAN_REPUBLIC ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CONGO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SWITZERLAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.COTE_D_IVOIRE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.COOK_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CHILE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CAMEROON ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CHINA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.COLOMBIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.COSTA_RICA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CUBA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CABO_VERDE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CURACAO ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.CHRISTMAS_ISLAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CYPRUS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CZECHIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GERMANY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.DJIBOUTI ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.DENMARK ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.DOMINICA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.DOMINICAN_REPUBLIC ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ALGERIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ECUADOR ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ESTONIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.EGYPT ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.WESTERN_SAHARA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ERITREA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SPAIN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ETHIOPIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.FINLAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.FIJI ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.FALKLAND_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MICRONESIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.FAROE_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.FRANCE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GABON ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GRENADA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GEORGIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.FRENCH_GUIANA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GUERNSEY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GHANA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GIBRALTAR ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GREENLAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GAMBIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GUINEA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GUADELOUPE ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.EQUATORIAL_GUINEA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GREECE ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GUATEMALA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GUAM ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GUINEA_BISSAU ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.GUYANA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.HONG_KONG ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.HEARD_ISLAND_AND_MCDONALD_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.HONDURAS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CROATIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.HAITI ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.HUNGARY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.INDONESIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.IRELAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ISRAEL ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ISLE_OF_MAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.INDIA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.BRITISH_INDIAN_OCEAN_TERRITORY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.IRAQ ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.IRAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ICELAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ITALY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.JERSEY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.JAMAICA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.JORDAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.JAPAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.KENYA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.KYRGYZSTAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CAMBODIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.KIRIBATI ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.COMOROS ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SAINT_KITTS_AND_NEVIS ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.THE_DEMOCRATIC_PEOPLES_REPUBLIC_OF_KOREA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.THE_REPUBLIC_OF_KOREA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.KUWAIT ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.CAYMAN_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.KAZAKHSTAN ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.LAO_PEOPLES_DEMOCRATIC_REPUBLIC ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.LEBANON ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SAINT_LUCIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.LIECHTENSTEIN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SRI_LANKA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.LIBERIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.LESOTHO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.LITHUANIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.LUXEMBOURG ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.LATVIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.LIBYA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MOROCCO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MONACO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MOLDOVA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MONTENEGRO ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SAINT_MARTIN_FRENCH_PART ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MADAGASCAR ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.MARSHALL_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.NORTH_MACEDONIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MALI ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MYANMAR ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MONGOLIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MACAO ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.NORTHERN_MARIANA_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MARTINIQUE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MAURITANIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MONTSERRAT ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MALTA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MAURITIUS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MALDIVES ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MALAWI ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MEXICO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MALAYSIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MOZAMBIQUE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NAMIBIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NEW_CALEDONIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NIGER ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.NORFOLK_ISLAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NIGERIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NICARAGUA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NETHERLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NORWAY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NEPAL ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NAURU ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NIUE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.NEW_ZEALAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.OMAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PANAMA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PERU ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.FRENCH_POLYNESIA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.PAPUA_NEW_GUINEA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PHILIPPINES ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PAKISTAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.POLAND ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SAINT_PIERRE_AND_MIQUELON ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PITCAIRN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PUERTO_RICO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PALESTINE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PORTUGAL ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PALAU ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.PARAGUAY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.QATAR ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.REUNION ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ROMANIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SERBIA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.RUSSIAN_FEDERATION ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.RWANDA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SAUDI_ARABIA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SOLOMON_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SEYCHELLES ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SUDAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SWEDEN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SINGAPORE ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SAINT_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SLOVENIA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SVALBARD_AND_JAN_MAYEN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SLOVAKIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SIERRA_LEONE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SAN_MARINO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SENEGAL ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SOMALIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SURINAME ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SOUTH_SUDAN ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SAO_TOME_AND_PRINCIPE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.EL_SALVADOR ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SINT_MAARTEN_DUTCH_PART ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SYRIAN_ARAB_REPUBLIC ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ESWATINI ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.TURKS_AND_CAICOS_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.CHAD ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.FRENCH_SOUTHERN_TERRITORIES ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TOGO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.THAILAND ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TAJIKISTAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TOKELAU ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TIMOR_LESTE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TURKMENISTAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TUNISIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TONGA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TURKEY ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.TRINIDAD_AND_TOBAGO ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TUVALU ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TAIWAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.TANZANIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.UKRAINE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.UGANDA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.UNITED_STATES_MINOR_OUTLYING_ISLANDS ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.UNITED_STATES_OF_AMERICA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.URUGUAY ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.UZBEKISTAN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.HOLY_SEE ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.SAINT_VINCENT_AND_THE_GRENADINES ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.VENEZUELA ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.VIRGIN_ISLANDS_BRITISH ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.VIRGIN_ISLANDS_US ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.VIET_NAM ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.VANUATU ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.WALLIS_AND_FUTUNA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SAMOA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.YEMEN ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.MAYOTTE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.SOUTH_AFRICA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ZAMBIA ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.ZIMBABWE ||
                                typedObj['seller']['postalAddress']['country'] === CountryIDContentType.KOSOVO ||
                                typedObj['seller']['postalAddress']['country'] ===
                                    CountryIDContentType.UNITED_KINGDOM_NORTHERN_IRELAND,
                            `${argumentName}["seller"]["postalAddress"]["country"]`,
                            'import("./src/types/qdt").CountryIDContentType',
                            typedObj['seller']['postalAddress']['country']
                        ),
                    `${argumentName}["seller"]["postalAddress"]`,
                    '{ country: import("./src/types/qdt").CountryIDContentType; }',
                    typedObj['seller']['postalAddress']
                ) &&
                evaluate(
                    (((typedObj['seller']['taxIdentification'] !== null &&
                        typeof typedObj['seller']['taxIdentification'] === 'object') ||
                        typeof typedObj['seller']['taxIdentification'] === 'function') &&
                        evaluate(
                            typeof typedObj['seller']['taxIdentification']['vatId'] === 'string',
                            `${argumentName}["seller"]["taxIdentification"]["vatId"]`,
                            'string',
                            typedObj['seller']['taxIdentification']['vatId']
                        ) &&
                        evaluate(
                            typeof typedObj['seller']['taxIdentification']['localTaxId'] === 'undefined' ||
                                typeof typedObj['seller']['taxIdentification']['localTaxId'] === 'string',
                            `${argumentName}["seller"]["taxIdentification"]["localTaxId"]`,
                            'string | undefined',
                            typedObj['seller']['taxIdentification']['localTaxId']
                        )) ||
                        (((typedObj['seller']['taxIdentification'] !== null &&
                            typeof typedObj['seller']['taxIdentification'] === 'object') ||
                            typeof typedObj['seller']['taxIdentification'] === 'function') &&
                            evaluate(
                                typeof typedObj['seller']['taxIdentification']['vatId'] === 'undefined' ||
                                    typeof typedObj['seller']['taxIdentification']['vatId'] === 'string',
                                `${argumentName}["seller"]["taxIdentification"]["vatId"]`,
                                'string | undefined',
                                typedObj['seller']['taxIdentification']['vatId']
                            ) &&
                            evaluate(
                                typeof typedObj['seller']['taxIdentification']['localTaxId'] === 'undefined' ||
                                    typeof typedObj['seller']['taxIdentification']['localTaxId'] === 'string',
                                `${argumentName}["seller"]["taxIdentification"]["localTaxId"]`,
                                'string | undefined',
                                typedObj['seller']['taxIdentification']['localTaxId']
                            )) ||
                        (((typedObj['seller']['taxIdentification'] !== null &&
                            typeof typedObj['seller']['taxIdentification'] === 'object') ||
                            typeof typedObj['seller']['taxIdentification'] === 'function') &&
                            evaluate(
                                typeof typedObj['seller']['taxIdentification']['vatId'] === 'undefined' ||
                                    typeof typedObj['seller']['taxIdentification']['vatId'] === 'string',
                                `${argumentName}["seller"]["taxIdentification"]["vatId"]`,
                                'string | undefined',
                                typedObj['seller']['taxIdentification']['vatId']
                            ) &&
                            evaluate(
                                typeof typedObj['seller']['taxIdentification']['localTaxId'] === 'undefined' ||
                                    typeof typedObj['seller']['taxIdentification']['localTaxId'] === 'string',
                                `${argumentName}["seller"]["taxIdentification"]["localTaxId"]`,
                                'string | undefined',
                                typedObj['seller']['taxIdentification']['localTaxId']
                            )) ||
                        (((typedObj['seller']['taxIdentification'] !== null &&
                            typeof typedObj['seller']['taxIdentification'] === 'object') ||
                            typeof typedObj['seller']['taxIdentification'] === 'function') &&
                            evaluate(
                                typeof typedObj['seller']['taxIdentification']['vatId'] === 'undefined' ||
                                    typeof typedObj['seller']['taxIdentification']['vatId'] === 'string',
                                `${argumentName}["seller"]["taxIdentification"]["vatId"]`,
                                'string | undefined',
                                typedObj['seller']['taxIdentification']['vatId']
                            ) &&
                            evaluate(
                                typeof typedObj['seller']['taxIdentification']['localTaxId'] === 'string',
                                `${argumentName}["seller"]["taxIdentification"]["localTaxId"]`,
                                'string',
                                typedObj['seller']['taxIdentification']['localTaxId']
                            )),
                    `${argumentName}["seller"]["taxIdentification"]`,
                    '{ vatId: string; localTaxId: string | undefined; } | { vatId: string | undefined; localTaxId: string | undefined; } | { vatId: string | undefined; localTaxId: string | undefined; } | { vatId: string | undefined; localTaxId: string; }',
                    typedObj['seller']['taxIdentification']
                ) &&
                evaluate(
                    typeof typedObj['seller']['id'] === 'undefined' || typeof typedObj['seller']['id'] === 'string',
                    `${argumentName}["seller"]["id"]`,
                    'string | undefined',
                    typedObj['seller']['id']
                ) &&
                evaluate(
                    typeof typedObj['seller']['globalId'] === 'undefined' ||
                        (((typedObj['seller']['globalId'] !== null &&
                            typeof typedObj['seller']['globalId'] === 'object') ||
                            typeof typedObj['seller']['globalId'] === 'function') &&
                            evaluate(
                                typeof typedObj['seller']['globalId']['id'] === 'string',
                                `${argumentName}["seller"]["globalId"]["id"]`,
                                'string',
                                typedObj['seller']['globalId']['id']
                            ) &&
                            evaluate(
                                typeof typedObj['seller']['globalId']['scheme'] === 'undefined' ||
                                    typeof typedObj['seller']['globalId']['scheme'] === 'string',
                                `${argumentName}["seller"]["globalId"]["scheme"]`,
                                'string | undefined',
                                typedObj['seller']['globalId']['scheme']
                            )),
                    `${argumentName}["seller"]["globalId"]`,
                    'import("./src/types/udt/IDTypeWithSchemeConverter").IDTypeWithScheme | undefined',
                    typedObj['seller']['globalId']
                ) &&
                evaluate(
                    typeof typedObj['seller']['specifiedLegalOrganizationName'] === 'undefined' ||
                        typeof typedObj['seller']['specifiedLegalOrganizationName'] === 'string',
                    `${argumentName}["seller"]["specifiedLegalOrganizationName"]`,
                    'string | undefined',
                    typedObj['seller']['specifiedLegalOrganizationName']
                ),
            `${argumentName}["seller"]`,
            '{ name: string; specifiedLegalOrganization: import("./src/types/udt/IDTypeWithSchemeConverter").IDTypeWithScheme | { id: string; scheme: string | undefined; } | undefined; postalAddress: { country: import("/Users/js/src/github.com/schwarmdigital/factur-x.js/src/types/qdt").CountryIDContentType; }; taxIdentification: { vatId: string; localTaxId: string | undefined; } | { vatId: string | undefined; localTaxId: string | undefined; } | { vatId: string | undefined; localTaxId: string | undefined; } | { vatId: string | undefined; localTaxId: string; }; id: string | undefined; globalId: import("/Users/js/src/github.com/schwarmdigital/factur-x.js/src/types/udt/IDTypeWithSchemeConverter").IDTypeWithScheme | undefined; specifiedLegalOrganizationName: string | undefined; }',
            typedObj['seller']
        ) &&
        evaluate(
            ((typedObj['buyer'] !== null && typeof typedObj['buyer'] === 'object') ||
                typeof typedObj['buyer'] === 'function') &&
                evaluate(
                    typeof typedObj['buyer']['name'] === 'string',
                    `${argumentName}["buyer"]["name"]`,
                    'string',
                    typedObj['buyer']['name']
                ) &&
                evaluate(
                    typeof typedObj['buyer']['specifiedLegalOrganization'] === 'undefined' ||
                        (((typedObj['buyer']['specifiedLegalOrganization'] !== null &&
                            typeof typedObj['buyer']['specifiedLegalOrganization'] === 'object') ||
                            typeof typedObj['buyer']['specifiedLegalOrganization'] === 'function') &&
                            evaluate(
                                typeof typedObj['buyer']['specifiedLegalOrganization']['id'] === 'string',
                                `${argumentName}["buyer"]["specifiedLegalOrganization"]["id"]`,
                                'string',
                                typedObj['buyer']['specifiedLegalOrganization']['id']
                            ) &&
                            evaluate(
                                typeof typedObj['buyer']['specifiedLegalOrganization']['scheme'] === 'undefined' ||
                                    typeof typedObj['buyer']['specifiedLegalOrganization']['scheme'] === 'string',
                                `${argumentName}["buyer"]["specifiedLegalOrganization"]["scheme"]`,
                                'string | undefined',
                                typedObj['buyer']['specifiedLegalOrganization']['scheme']
                            )) ||
                        (((typedObj['buyer']['specifiedLegalOrganization'] !== null &&
                            typeof typedObj['buyer']['specifiedLegalOrganization'] === 'object') ||
                            typeof typedObj['buyer']['specifiedLegalOrganization'] === 'function') &&
                            evaluate(
                                typeof typedObj['buyer']['specifiedLegalOrganization']['id'] === 'string',
                                `${argumentName}["buyer"]["specifiedLegalOrganization"]["id"]`,
                                'string',
                                typedObj['buyer']['specifiedLegalOrganization']['id']
                            ) &&
                            evaluate(
                                typeof typedObj['buyer']['specifiedLegalOrganization']['scheme'] === 'undefined' ||
                                    typeof typedObj['buyer']['specifiedLegalOrganization']['scheme'] === 'string',
                                `${argumentName}["buyer"]["specifiedLegalOrganization"]["scheme"]`,
                                'string | undefined',
                                typedObj['buyer']['specifiedLegalOrganization']['scheme']
                            )),
                    `${argumentName}["buyer"]["specifiedLegalOrganization"]`,
                    'import("./src/types/udt/IDTypeWithSchemeConverter").IDTypeWithScheme | { id: string; scheme: string | undefined; } | undefined',
                    typedObj['buyer']['specifiedLegalOrganization']
                ) &&
                evaluate(
                    typeof typedObj['buyer']['id'] === 'undefined' || typeof typedObj['buyer']['id'] === 'string',
                    `${argumentName}["buyer"]["id"]`,
                    'string | undefined',
                    typedObj['buyer']['id']
                ) &&
                evaluate(
                    typeof typedObj['buyer']['globalId'] === 'undefined' ||
                        (((typedObj['buyer']['globalId'] !== null &&
                            typeof typedObj['buyer']['globalId'] === 'object') ||
                            typeof typedObj['buyer']['globalId'] === 'function') &&
                            evaluate(
                                typeof typedObj['buyer']['globalId']['id'] === 'string',
                                `${argumentName}["buyer"]["globalId"]["id"]`,
                                'string',
                                typedObj['buyer']['globalId']['id']
                            ) &&
                            evaluate(
                                typeof typedObj['buyer']['globalId']['scheme'] === 'undefined' ||
                                    typeof typedObj['buyer']['globalId']['scheme'] === 'string',
                                `${argumentName}["buyer"]["globalId"]["scheme"]`,
                                'string | undefined',
                                typedObj['buyer']['globalId']['scheme']
                            )),
                    `${argumentName}["buyer"]["globalId"]`,
                    'import("./src/types/udt/IDTypeWithSchemeConverter").IDTypeWithScheme | undefined',
                    typedObj['buyer']['globalId']
                ) &&
                evaluate(
                    typeof typedObj['buyer']['specifiedLegalOrganizationName'] === 'undefined' ||
                        typeof typedObj['buyer']['specifiedLegalOrganizationName'] === 'string',
                    `${argumentName}["buyer"]["specifiedLegalOrganizationName"]`,
                    'string | undefined',
                    typedObj['buyer']['specifiedLegalOrganizationName']
                ) &&
                evaluate(
                    typeof typedObj['buyer']['reference'] === 'undefined' ||
                        typeof typedObj['buyer']['reference'] === 'string',
                    `${argumentName}["buyer"]["reference"]`,
                    'string | undefined',
                    typedObj['buyer']['reference']
                ) &&
                evaluate(
                    typeof typedObj['buyer']['orderReference'] === 'undefined' ||
                        typeof typedObj['buyer']['orderReference'] === 'string',
                    `${argumentName}["buyer"]["orderReference"]`,
                    'string | undefined',
                    typedObj['buyer']['orderReference']
                ),
            `${argumentName}["buyer"]`,
            '{ name: string; specifiedLegalOrganization: import("./src/types/udt/IDTypeWithSchemeConverter").IDTypeWithScheme | { id: string; scheme: string | undefined; } | undefined; id: string | undefined; globalId: import("/Users/js/src/github.com/schwarmdigital/factur-x.js/src/types/udt/IDTypeWithSchemeConverter").IDTypeWithScheme | undefined; specifiedLegalOrganizationName: string | undefined; reference: string | undefined; orderReference: string | undefined; }',
            typedObj['buyer']
        ) &&
        evaluate(
            ((typedObj['totals'] !== null && typeof typedObj['totals'] === 'object') ||
                typeof typedObj['totals'] === 'function') &&
                evaluate(
                    ((typedObj['totals']['netTotal'] !== null && typeof typedObj['totals']['netTotal'] === 'object') ||
                        typeof typedObj['totals']['netTotal'] === 'function') &&
                        evaluate(
                            typeof typedObj['totals']['netTotal']['amount'] === 'number',
                            `${argumentName}["totals"]["netTotal"]["amount"]`,
                            'number',
                            typedObj['totals']['netTotal']['amount']
                        ) &&
                        evaluate(
                            typeof typedObj['totals']['netTotal']['currency'] === 'undefined' ||
                                typeof typedObj['totals']['netTotal']['currency'] === 'string',
                            `${argumentName}["totals"]["netTotal"]["currency"]`,
                            'string | undefined',
                            typedObj['totals']['netTotal']['currency']
                        ),
                    `${argumentName}["totals"]["netTotal"]`,
                    'import("./src/types/udt/AmountTypeConverter").AmountType',
                    typedObj['totals']['netTotal']
                ) &&
                evaluate(
                    ((typedObj['totals']['taxTotal'] !== null && typeof typedObj['totals']['taxTotal'] === 'object') ||
                        typeof typedObj['totals']['taxTotal'] === 'function') &&
                        evaluate(
                            typeof typedObj['totals']['taxTotal']['amount'] === 'number',
                            `${argumentName}["totals"]["taxTotal"]["amount"]`,
                            'number',
                            typedObj['totals']['taxTotal']['amount']
                        ) &&
                        evaluate(
                            typeof typedObj['totals']['taxTotal']['currency'] === 'undefined' ||
                                typeof typedObj['totals']['taxTotal']['currency'] === 'string',
                            `${argumentName}["totals"]["taxTotal"]["currency"]`,
                            'string | undefined',
                            typedObj['totals']['taxTotal']['currency']
                        ),
                    `${argumentName}["totals"]["taxTotal"]`,
                    'import("./src/types/udt/AmountTypeConverter").AmountType',
                    typedObj['totals']['taxTotal']
                ) &&
                evaluate(
                    ((typedObj['totals']['grossTotal'] !== null &&
                        typeof typedObj['totals']['grossTotal'] === 'object') ||
                        typeof typedObj['totals']['grossTotal'] === 'function') &&
                        evaluate(
                            typeof typedObj['totals']['grossTotal']['amount'] === 'number',
                            `${argumentName}["totals"]["grossTotal"]["amount"]`,
                            'number',
                            typedObj['totals']['grossTotal']['amount']
                        ) &&
                        evaluate(
                            typeof typedObj['totals']['grossTotal']['currency'] === 'undefined' ||
                                typeof typedObj['totals']['grossTotal']['currency'] === 'string',
                            `${argumentName}["totals"]["grossTotal"]["currency"]`,
                            'string | undefined',
                            typedObj['totals']['grossTotal']['currency']
                        ),
                    `${argumentName}["totals"]["grossTotal"]`,
                    'import("./src/types/udt/AmountTypeConverter").AmountType',
                    typedObj['totals']['grossTotal']
                ) &&
                evaluate(
                    ((typedObj['totals']['dueTotal'] !== null && typeof typedObj['totals']['dueTotal'] === 'object') ||
                        typeof typedObj['totals']['dueTotal'] === 'function') &&
                        evaluate(
                            typeof typedObj['totals']['dueTotal']['amount'] === 'number',
                            `${argumentName}["totals"]["dueTotal"]["amount"]`,
                            'number',
                            typedObj['totals']['dueTotal']['amount']
                        ) &&
                        evaluate(
                            typeof typedObj['totals']['dueTotal']['currency'] === 'undefined' ||
                                typeof typedObj['totals']['dueTotal']['currency'] === 'string',
                            `${argumentName}["totals"]["dueTotal"]["currency"]`,
                            'string | undefined',
                            typedObj['totals']['dueTotal']['currency']
                        ),
                    `${argumentName}["totals"]["dueTotal"]`,
                    'import("./src/types/udt/AmountTypeConverter").AmountType',
                    typedObj['totals']['dueTotal']
                ),
            `${argumentName}["totals"]`,
            '{ netTotal: import("./src/types/udt/AmountTypeConverter").AmountType; taxTotal: import("/Users/js/src/github.com/schwarmdigital/factur-x.js/src/types/udt/AmountTypeConverter").AmountType; grossTotal: import("/Users/js/src/github.com/schwarmdigital/factur-x.js/src/types/udt/AmountTypeConverter").AmountType; dueTotal: import("/Users/js/src/github.com/schwarmdigital/factur-x.js/src/types/udt/AmountTypeConverter").AmountType; }',
            typedObj['totals']
        ) &&
        evaluate(
            typeof typedObj['notes'] === 'undefined' ||
                (Array.isArray(typedObj['notes']) &&
                    typedObj['notes'].every(
                        (e: any, i0: number) =>
                            ((e !== null && typeof e === 'object') || typeof e === 'function') &&
                            evaluate(
                                typeof e['content'] === 'string',
                                `${argumentName}["notes"][${i0}]["content"]`,
                                'string',
                                e['content']
                            ) &&
                            evaluate(
                                typeof e['subject'] === 'undefined' || typeof e['subject'] === 'string',
                                `${argumentName}["notes"][${i0}]["subject"]`,
                                'string | undefined',
                                e['subject']
                            )
                    )),
            `${argumentName}["notes"]`,
            'import("./src/types/ram/NoteTypeConverter").NoteType[] | undefined',
            typedObj['notes']
        )
    )
}
