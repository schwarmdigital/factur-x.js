/*
 * Generated type guards for "BasicWithoutLinesProfileXml.ts".
 * WARNING: Do not manually change this file.
 */
import { BasicWithoutLinesProfileXml } from './BasicWithoutLinesProfileXml'

function evaluate(isCorrect: boolean, varName: string, expected: string, actual: any): boolean {
    if (!isCorrect) {
        console.error(`${varName} type mismatch, expected: ${expected}, found:`, actual)
    }
    return isCorrect
}

export function isBasicWithoutLinesProfileXml(
    obj: unknown,
    argumentName = 'basicWithoutLinesProfileXml'
): obj is BasicWithoutLinesProfileXml {
    const typedObj = obj as BasicWithoutLinesProfileXml
    return (
        ((typedObj !== null && typeof typedObj === 'object') || typeof typedObj === 'function') &&
        evaluate(
            ((typedObj['?xml'] !== null && typeof typedObj['?xml'] === 'object') ||
                typeof typedObj['?xml'] === 'function') &&
                evaluate(
                    typedObj['?xml']['@version'] === '1.0',
                    `${argumentName}["?xml"]["@version"]`,
                    '"1.0"',
                    typedObj['?xml']['@version']
                ) &&
                evaluate(
                    typedObj['?xml']['@encoding'] === 'UTF-8',
                    `${argumentName}["?xml"]["@encoding"]`,
                    '"UTF-8"',
                    typedObj['?xml']['@encoding']
                ),
            `${argumentName}["?xml"]`,
            '{ \'@version\': "1.0"; \'@encoding\': "UTF-8"; }',
            typedObj['?xml']
        ) &&
        evaluate(
            ((typedObj['rsm:CrossIndustryInvoice'] !== null &&
                typeof typedObj['rsm:CrossIndustryInvoice'] === 'object') ||
                typeof typedObj['rsm:CrossIndustryInvoice'] === 'function') &&
                evaluate(
                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'] !== null &&
                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'] === 'object') ||
                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'] === 'function') &&
                        evaluate(
                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                'ram:BusinessProcessSpecifiedDocumentContextParameter'
                            ] === 'undefined' ||
                                (((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                    'ram:BusinessProcessSpecifiedDocumentContextParameter'
                                ] !== null &&
                                    typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                        'ram:BusinessProcessSpecifiedDocumentContextParameter'
                                    ] === 'object') ||
                                    typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                        'ram:BusinessProcessSpecifiedDocumentContextParameter'
                                    ] === 'function') &&
                                    evaluate(
                                        ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                            'ram:BusinessProcessSpecifiedDocumentContextParameter'
                                        ]['ram:ID'] !== null &&
                                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                                'ram:BusinessProcessSpecifiedDocumentContextParameter'
                                            ]['ram:ID'] === 'object') ||
                                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                                'ram:BusinessProcessSpecifiedDocumentContextParameter'
                                            ]['ram:ID'] === 'function') &&
                                            evaluate(
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:ExchangedDocumentContext'
                                                ]['ram:BusinessProcessSpecifiedDocumentContextParameter']['ram:ID'][
                                                    '#text'
                                                ] === 'string',
                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"]["ram:ID"]["#text"]`,
                                                'string',
                                                typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                                    'ram:BusinessProcessSpecifiedDocumentContextParameter'
                                                ]['ram:ID']['#text']
                                            ),
                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"]["ram:ID"]`,
                                        "{ '#text': string; }",
                                        typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                            'ram:BusinessProcessSpecifiedDocumentContextParameter'
                                        ]['ram:ID']
                                    )),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:BusinessProcessSpecifiedDocumentContextParameter"]`,
                            "{ 'ram:ID': { '#text': string; }; } | undefined",
                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                'ram:BusinessProcessSpecifiedDocumentContextParameter'
                            ]
                        ) &&
                        evaluate(
                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                'ram:GuidelineSpecifiedDocumentContextParameter'
                            ] !== null &&
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                    'ram:GuidelineSpecifiedDocumentContextParameter'
                                ] === 'object') ||
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                    'ram:GuidelineSpecifiedDocumentContextParameter'
                                ] === 'function') &&
                                evaluate(
                                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                        'ram:GuidelineSpecifiedDocumentContextParameter'
                                    ]['ram:ID'] !== null &&
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                            'ram:GuidelineSpecifiedDocumentContextParameter'
                                        ]['ram:ID'] === 'object') ||
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                            'ram:GuidelineSpecifiedDocumentContextParameter'
                                        ]['ram:ID'] === 'function') &&
                                        evaluate(
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                                'ram:GuidelineSpecifiedDocumentContextParameter'
                                            ]['ram:ID']['#text'] === 'urn:factur-x.eu:1p0:minimum' ||
                                                typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                                    'ram:GuidelineSpecifiedDocumentContextParameter'
                                                ]['ram:ID']['#text'] === 'urn:factur-x.eu:1p0:basicwl',
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"]["ram:ID"]["#text"]`,
                                            '"urn:factur-x.eu:1p0:minimum" | "urn:factur-x.eu:1p0:basicwl"',
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                                'ram:GuidelineSpecifiedDocumentContextParameter'
                                            ]['ram:ID']['#text']
                                        ),
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"]["ram:ID"]`,
                                    '{ "#text": "urn:factur-x.eu:1p0:minimum" | "urn:factur-x.eu:1p0:basicwl"; }',
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                        'ram:GuidelineSpecifiedDocumentContextParameter'
                                    ]['ram:ID']
                                ),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]["ram:GuidelineSpecifiedDocumentContextParameter"]`,
                            '{ "ram:ID": { "#text": "urn:factur-x.eu:1p0:minimum" | "urn:factur-x.eu:1p0:basicwl"; }; }',
                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext'][
                                'ram:GuidelineSpecifiedDocumentContextParameter'
                            ]
                        ),
                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocumentContext"]`,
                    '{ "ram:BusinessProcessSpecifiedDocumentContextParameter": { \'ram:ID\': { \'#text\': string; }; } | undefined; "ram:GuidelineSpecifiedDocumentContextParameter": { "ram:ID": { "#text": "urn:factur-x.eu:1p0:minimum" | "urn:factur-x.eu:1p0:basicwl"; }; }; }',
                    typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocumentContext']
                ) &&
                evaluate(
                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'] !== null &&
                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'] === 'object') ||
                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'] === 'function') &&
                        evaluate(
                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:ID'] !== null &&
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:ID'] ===
                                    'object') ||
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:ID'] ===
                                    'function') &&
                                evaluate(
                                    typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:ID'][
                                        '#text'
                                    ] === 'string',
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:ID"]["#text"]`,
                                    'string',
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:ID']['#text']
                                ),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:ID"]`,
                            "{ '#text': string; }",
                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:ID']
                        ) &&
                        evaluate(
                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:TypeCode'] !== null &&
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:TypeCode'] ===
                                    'object') ||
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:TypeCode'] ===
                                    'function') &&
                                evaluate(
                                    typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                        'ram:TypeCode'
                                    ]['#text'] === 'string',
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:TypeCode"]["#text"]`,
                                    'string',
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:TypeCode'][
                                        '#text'
                                    ]
                                ),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:TypeCode"]`,
                            "{ '#text': string; }",
                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:TypeCode']
                        ) &&
                        evaluate(
                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:IssueDateTime'] !==
                                null &&
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                    'ram:IssueDateTime'
                                ] === 'object') ||
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                    'ram:IssueDateTime'
                                ] === 'function') &&
                                evaluate(
                                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                        'ram:IssueDateTime'
                                    ]['udt:DateTimeString'] !== null &&
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                            'ram:IssueDateTime'
                                        ]['udt:DateTimeString'] === 'object') ||
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                            'ram:IssueDateTime'
                                        ]['udt:DateTimeString'] === 'function') &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                'ram:IssueDateTime'
                                            ]['udt:DateTimeString']['#text'] === 'string',
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]["udt:DateTimeString"]["#text"]`,
                                            'string',
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                'ram:IssueDateTime'
                                            ]['udt:DateTimeString']['#text']
                                        ) &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                'ram:IssueDateTime'
                                            ]['udt:DateTimeString']['@format'] === 'string',
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]["udt:DateTimeString"]["@format"]`,
                                            'string',
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                'ram:IssueDateTime'
                                            ]['udt:DateTimeString']['@format']
                                        ),
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]["udt:DateTimeString"]`,
                                    "{ '#text': string; '@format': string; }",
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:IssueDateTime'][
                                        'udt:DateTimeString'
                                    ]
                                ),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IssueDateTime"]`,
                            "{ 'udt:DateTimeString': { '#text': string; '@format': string; }; }",
                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:IssueDateTime']
                        ) &&
                        evaluate(
                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:IncludedNote'] ===
                                'undefined' ||
                                (Array.isArray(
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:IncludedNote']
                                ) &&
                                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                        'ram:IncludedNote'
                                    ][0] !== null &&
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                            'ram:IncludedNote'
                                        ][0] === 'object') ||
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                            'ram:IncludedNote'
                                        ][0] === 'function') &&
                                    evaluate(
                                        ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                            'ram:IncludedNote'
                                        ][0]['ram:Content'] !== null &&
                                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                'ram:IncludedNote'
                                            ][0]['ram:Content'] === 'object') ||
                                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                'ram:IncludedNote'
                                            ][0]['ram:Content'] === 'function') &&
                                            evaluate(
                                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                    'ram:IncludedNote'
                                                ][0]['ram:Content']['#text'] === 'string',
                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IncludedNote"]["ram:Content"]["#text"]`,
                                                'string',
                                                typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                    'ram:IncludedNote'
                                                ][0]['ram:Content']['#text']
                                            ),
                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IncludedNote"]["ram:Content"]`,
                                        "{ '#text': string; }",
                                        typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                            'ram:IncludedNote'
                                        ][0]['ram:Content']
                                    ) &&
                                    evaluate(
                                        ((typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                            'ram:IncludedNote'
                                        ][0]['ram:SubjectCode'] !== null &&
                                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                'ram:IncludedNote'
                                            ][0]['ram:SubjectCode'] === 'object') ||
                                            typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                'ram:IncludedNote'
                                            ][0]['ram:SubjectCode'] === 'function') &&
                                            evaluate(
                                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                    'ram:IncludedNote'
                                                ][0]['ram:SubjectCode']['#text'] === 'string',
                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IncludedNote"]["ram:SubjectCode"]["#text"]`,
                                                'string',
                                                typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                                    'ram:IncludedNote'
                                                ][0]['ram:SubjectCode']['#text']
                                            ),
                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IncludedNote"]["ram:SubjectCode"]`,
                                        "{ '#text': string; }",
                                        typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument'][
                                            'ram:IncludedNote'
                                        ][0]['ram:SubjectCode']
                                    )),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:IncludedNote"]`,
                            "[{ 'ram:Content': { '#text': string; }; 'ram:SubjectCode': { '#text': string; }; }] | undefined",
                            typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:IncludedNote']
                        ),
                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]`,
                    "{ \"ram:ID\": { '#text': string; }; \"ram:TypeCode\": { '#text': string; }; \"ram:IssueDateTime\": { 'udt:DateTimeString': { '#text': string; '@format': string; }; }; \"ram:IncludedNote\": [{ 'ram:Content': { '#text': string; }; 'ram:SubjectCode': { '#text': string; }; }] | undefined; }",
                    typedObj['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']
                ) &&
                evaluate(
                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'] !== null &&
                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'] === 'object') ||
                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'] ===
                            'function') &&
                        evaluate(
                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                'ram:ApplicableHeaderTradeAgreement'
                            ] !== null &&
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                    'ram:ApplicableHeaderTradeAgreement'
                                ] === 'object') ||
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                    'ram:ApplicableHeaderTradeAgreement'
                                ] === 'function') &&
                                evaluate(
                                    typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeAgreement'
                                    ]['ram:BuyerReference'] === 'undefined' ||
                                        (((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeAgreement'
                                        ]['ram:BuyerReference'] !== null &&
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerReference'] ===
                                                'object') ||
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerReference'] ===
                                                'function') &&
                                            evaluate(
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerReference'][
                                                    '#text'
                                                ] === 'string',
                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerReference"]["#text"]`,
                                                'string',
                                                typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                    'ram:ApplicableHeaderTradeAgreement'
                                                ]['ram:BuyerReference']['#text']
                                            )),
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerReference"]`,
                                    "{ '#text': string; } | undefined",
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeAgreement'
                                    ]['ram:BuyerReference']
                                ) &&
                                evaluate(
                                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeAgreement'
                                    ]['ram:SellerTradeParty'] !== null &&
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeAgreement'
                                        ]['ram:SellerTradeParty'] === 'object') ||
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeAgreement'
                                        ]['ram:SellerTradeParty'] === 'function') &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                'ram:ID'
                                            ] === 'undefined' ||
                                                (((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:ID'
                                                ] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:ID'
                                                    ] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:ID'
                                                    ] === 'function') &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:ID'
                                                        ]['#text'] === 'string',
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:ID"]["#text"]`,
                                                        'string',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:ID'
                                                        ]['#text']
                                                    )),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:ID"]`,
                                            "{ '#text': string; } | undefined",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:SellerTradeParty']['ram:ID']
                                        ) &&
                                        evaluate(
                                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:SellerTradeParty']['ram:Name'] !== null &&
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:Name'
                                                ] === 'object') ||
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:Name'
                                                ] === 'function') &&
                                                evaluate(
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:Name'
                                                    ]['#text'] === 'string',
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:Name"]["#text"]`,
                                                    'string',
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:Name'
                                                    ]['#text']
                                                ),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:Name"]`,
                                            "{ '#text': string; }",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:SellerTradeParty']['ram:Name']
                                        ) &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                'ram:SpecifiedLegalOrganization'
                                            ] === 'undefined' ||
                                                (((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:SpecifiedLegalOrganization'
                                                ] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedLegalOrganization'
                                                    ] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedLegalOrganization'
                                                    ] === 'function') &&
                                                    evaluate(
                                                        ((typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:ID'] !== null &&
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization']['ram:ID'] ===
                                                                'object') ||
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization']['ram:ID'] ===
                                                                'function') &&
                                                            evaluate(
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '#text'
                                                                ] === 'string',
                                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["#text"]`,
                                                                'string',
                                                                typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID']['#text']
                                                            ) &&
                                                            evaluate(
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '@schemeID'
                                                                ] === 'string',
                                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["@schemeID"]`,
                                                                'string',
                                                                typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '@schemeID'
                                                                ]
                                                            ),
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]`,
                                                        "{ '#text': string; '@schemeID': string; }",
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:ID']
                                                    ) &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:TradingBusinessName'] === 'undefined' ||
                                                            (((typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization'][
                                                                'ram:TradingBusinessName'
                                                            ] !== null &&
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization'][
                                                                    'ram:TradingBusinessName'
                                                                ] === 'object') ||
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization'][
                                                                    'ram:TradingBusinessName'
                                                                ] === 'function') &&
                                                                evaluate(
                                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:SellerTradeParty'
                                                                    ]['ram:SpecifiedLegalOrganization'][
                                                                        'ram:TradingBusinessName'
                                                                    ]['#text'] === 'string',
                                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:TradingBusinessName"]["#text"]`,
                                                                    'string',
                                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:SellerTradeParty'
                                                                    ]['ram:SpecifiedLegalOrganization'][
                                                                        'ram:TradingBusinessName'
                                                                    ]['#text']
                                                                )),
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:TradingBusinessName"]`,
                                                        "{ '#text': string; } | undefined",
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:TradingBusinessName']
                                                    )) ||
                                                (((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:SpecifiedLegalOrganization'
                                                ] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedLegalOrganization'
                                                    ] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedLegalOrganization'
                                                    ] === 'function') &&
                                                    evaluate(
                                                        ((typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:ID'] !== null &&
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization']['ram:ID'] ===
                                                                'object') ||
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization']['ram:ID'] ===
                                                                'function') &&
                                                            evaluate(
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '#text'
                                                                ] === 'string',
                                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["#text"]`,
                                                                'string',
                                                                typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID']['#text']
                                                            ) &&
                                                            evaluate(
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '@schemeID'
                                                                ] === 'string',
                                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["@schemeID"]`,
                                                                'string',
                                                                typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '@schemeID'
                                                                ]
                                                            ),
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]`,
                                                        '{ "#text": string; "@schemeID": string; }',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:ID']
                                                    ) &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:TradingBusinessName'] === 'undefined' ||
                                                            (((typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization'][
                                                                'ram:TradingBusinessName'
                                                            ] !== null &&
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization'][
                                                                    'ram:TradingBusinessName'
                                                                ] === 'object') ||
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization'][
                                                                    'ram:TradingBusinessName'
                                                                ] === 'function') &&
                                                                evaluate(
                                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:SellerTradeParty'
                                                                    ]['ram:SpecifiedLegalOrganization'][
                                                                        'ram:TradingBusinessName'
                                                                    ]['#text'] === 'string',
                                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:TradingBusinessName"]["#text"]`,
                                                                    'string',
                                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:SellerTradeParty'
                                                                    ]['ram:SpecifiedLegalOrganization'][
                                                                        'ram:TradingBusinessName'
                                                                    ]['#text']
                                                                )),
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:TradingBusinessName"]`,
                                                        "{ '#text': string; } | undefined",
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:TradingBusinessName']
                                                    )),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedLegalOrganization"]`,
                                            "{ 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:SellerTradeParty']['ram:SpecifiedLegalOrganization']
                                        ) &&
                                        evaluate(
                                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:SellerTradeParty']['ram:PostalTradeAddress'] !== null &&
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:PostalTradeAddress'
                                                ] === 'object') ||
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:PostalTradeAddress'
                                                ] === 'function') &&
                                                evaluate(
                                                    ((typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:PostalTradeAddress'
                                                    ]['ram:CountryID'] !== null &&
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:PostalTradeAddress'
                                                        ]['ram:CountryID'] === 'object') ||
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:PostalTradeAddress'
                                                        ]['ram:CountryID'] === 'function') &&
                                                        evaluate(
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:PostalTradeAddress']['ram:CountryID']['#text'] ===
                                                                'string',
                                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"]["ram:CountryID"]["#text"]`,
                                                            'string',
                                                            typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:PostalTradeAddress']['ram:CountryID']['#text']
                                                        ),
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"]["ram:CountryID"]`,
                                                    "{ '#text': string; }",
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:PostalTradeAddress'
                                                    ]['ram:CountryID']
                                                ),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:PostalTradeAddress"]`,
                                            "{ 'ram:CountryID': { '#text': string; }; }",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:SellerTradeParty']['ram:PostalTradeAddress']
                                        ) &&
                                        evaluate(
                                            Array.isArray(
                                                typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                    'ram:ApplicableHeaderTradeAgreement'
                                                ]['ram:SellerTradeParty']['ram:SpecifiedTaxRegistration']
                                            ) &&
                                                ((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:SpecifiedTaxRegistration'
                                                ][0] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedTaxRegistration'
                                                    ][0] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedTaxRegistration'
                                                    ][0] === 'function') &&
                                                evaluate(
                                                    ((typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedTaxRegistration'
                                                    ][0]['ram:ID'] !== null &&
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedTaxRegistration'
                                                        ][0]['ram:ID'] === 'object') ||
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedTaxRegistration'
                                                        ][0]['ram:ID'] === 'function') &&
                                                        evaluate(
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedTaxRegistration'][0]['ram:ID']['#text'] ===
                                                                'string',
                                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"]["ram:ID"]["#text"]`,
                                                            'string',
                                                            typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedTaxRegistration'][0]['ram:ID']['#text']
                                                        ) &&
                                                        evaluate(
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedTaxRegistration'][0]['ram:ID'][
                                                                '@schemeID'
                                                            ] === 'string',
                                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"]["ram:ID"]["@schemeID"]`,
                                                            'string',
                                                            typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedTaxRegistration'][0]['ram:ID']['@schemeID']
                                                        ),
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"]["ram:ID"]`,
                                                    "{ '#text': string; '@schemeID': string; }",
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedTaxRegistration'
                                                    ][0]['ram:ID']
                                                ) &&
                                                (typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:SpecifiedTaxRegistration'
                                                ][1] === 'undefined' ||
                                                    (((typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:SpecifiedTaxRegistration'
                                                    ][1] !== null &&
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedTaxRegistration'
                                                        ][1] === 'object') ||
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:SpecifiedTaxRegistration'
                                                        ][1] === 'function') &&
                                                        evaluate(
                                                            ((typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedTaxRegistration'][1]['ram:ID'] !== null &&
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedTaxRegistration'][1]['ram:ID'] ===
                                                                    'object') ||
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:SellerTradeParty'
                                                                ]['ram:SpecifiedTaxRegistration'][1]['ram:ID'] ===
                                                                    'function') &&
                                                                evaluate(
                                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:SellerTradeParty'
                                                                    ]['ram:SpecifiedTaxRegistration'][1]['ram:ID'][
                                                                        '#text'
                                                                    ] === 'string',
                                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"]["ram:ID"]["#text"]`,
                                                                    'string',
                                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:SellerTradeParty'
                                                                    ]['ram:SpecifiedTaxRegistration'][1]['ram:ID'][
                                                                        '#text'
                                                                    ]
                                                                ) &&
                                                                evaluate(
                                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:SellerTradeParty'
                                                                    ]['ram:SpecifiedTaxRegistration'][1]['ram:ID'][
                                                                        '@schemeID'
                                                                    ] === 'string',
                                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"]["ram:ID"]["@schemeID"]`,
                                                                    'string',
                                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:SellerTradeParty'
                                                                    ]['ram:SpecifiedTaxRegistration'][1]['ram:ID'][
                                                                        '@schemeID'
                                                                    ]
                                                                ),
                                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"]["ram:ID"]`,
                                                            "{ '#text': string; '@schemeID': string; }",
                                                            typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:SellerTradeParty'
                                                            ]['ram:SpecifiedTaxRegistration'][1]['ram:ID']
                                                        ))),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:SpecifiedTaxRegistration"]`,
                                            "[{ 'ram:ID': { '#text': string; '@schemeID': string; }; }, ({ 'ram:ID': { '#text': string; '@schemeID': string; }; } | undefined)?]",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:SellerTradeParty']['ram:SpecifiedTaxRegistration']
                                        ) &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                'ram:GlobalID'
                                            ] === 'undefined' ||
                                                (((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                    'ram:GlobalID'
                                                ] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:GlobalID'
                                                    ] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                        'ram:GlobalID'
                                                    ] === 'function') &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:GlobalID'
                                                        ]['#text'] === 'string',
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:GlobalID"]["#text"]`,
                                                        'string',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:GlobalID'
                                                        ]['#text']
                                                    ) &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:GlobalID'
                                                        ]['@schemeID'] === 'string',
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:GlobalID"]["@schemeID"]`,
                                                        'string',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:SellerTradeParty'][
                                                            'ram:GlobalID'
                                                        ]['@schemeID']
                                                    )),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]["ram:GlobalID"]`,
                                            "{ '#text': string; '@schemeID': string; } | undefined",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:SellerTradeParty']['ram:GlobalID']
                                        ),
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:SellerTradeParty"]`,
                                    "{ \"ram:ID\": { '#text': string; } | undefined; \"ram:Name\": { '#text': string; }; \"ram:SpecifiedLegalOrganization\": { 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined; \"ram:PostalTradeAddress\": { 'ram:CountryID': { '#text': string; }; }; \"ram:SpecifiedTaxRegistration\": [{ 'ram:ID': { '#text': string; '@schemeID': string; }; }, ({ 'ram:ID': { '#text': string; '@schemeID': string; }; } | undefined)?]; \"ram:GlobalID\": { '#text': string; '@schemeID': string; } | undefined; }",
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeAgreement'
                                    ]['ram:SellerTradeParty']
                                ) &&
                                evaluate(
                                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeAgreement'
                                    ]['ram:BuyerTradeParty'] !== null &&
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeAgreement'
                                        ]['ram:BuyerTradeParty'] === 'object') ||
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeAgreement'
                                        ]['ram:BuyerTradeParty'] === 'function') &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty']['ram:ID'] ===
                                                'undefined' ||
                                                (((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                    'ram:ID'
                                                ] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:ID'
                                                    ] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:ID'
                                                    ] === 'function') &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:ID'
                                                        ]['#text'] === 'string',
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:ID"]["#text"]`,
                                                        'string',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:ID'
                                                        ]['#text']
                                                    )),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:ID"]`,
                                            "{ '#text': string; } | undefined",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:BuyerTradeParty']['ram:ID']
                                        ) &&
                                        evaluate(
                                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:BuyerTradeParty']['ram:Name'] !== null &&
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                    'ram:Name'
                                                ] === 'object') ||
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                    'ram:Name'
                                                ] === 'function') &&
                                                evaluate(
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:Name'
                                                    ]['#text'] === 'string',
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:Name"]["#text"]`,
                                                    'string',
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:Name'
                                                    ]['#text']
                                                ),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:Name"]`,
                                            "{ '#text': string; }",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:BuyerTradeParty']['ram:Name']
                                        ) &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                'ram:SpecifiedLegalOrganization'
                                            ] === 'undefined' ||
                                                (((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                    'ram:SpecifiedLegalOrganization'
                                                ] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:SpecifiedLegalOrganization'
                                                    ] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:SpecifiedLegalOrganization'
                                                    ] === 'function') &&
                                                    evaluate(
                                                        ((typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:ID'] !== null &&
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:BuyerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization']['ram:ID'] ===
                                                                'object') ||
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:BuyerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization']['ram:ID'] ===
                                                                'function') &&
                                                            evaluate(
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '#text'
                                                                ] === 'string',
                                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["#text"]`,
                                                                'string',
                                                                typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID']['#text']
                                                            ) &&
                                                            evaluate(
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '@schemeID'
                                                                ] === 'string',
                                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["@schemeID"]`,
                                                                'string',
                                                                typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '@schemeID'
                                                                ]
                                                            ),
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]`,
                                                        "{ '#text': string; '@schemeID': string; }",
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:ID']
                                                    ) &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:TradingBusinessName'] === 'undefined' ||
                                                            (((typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:BuyerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization'][
                                                                'ram:TradingBusinessName'
                                                            ] !== null &&
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization'][
                                                                    'ram:TradingBusinessName'
                                                                ] === 'object') ||
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization'][
                                                                    'ram:TradingBusinessName'
                                                                ] === 'function') &&
                                                                evaluate(
                                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:BuyerTradeParty'
                                                                    ]['ram:SpecifiedLegalOrganization'][
                                                                        'ram:TradingBusinessName'
                                                                    ]['#text'] === 'string',
                                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:TradingBusinessName"]["#text"]`,
                                                                    'string',
                                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:BuyerTradeParty'
                                                                    ]['ram:SpecifiedLegalOrganization'][
                                                                        'ram:TradingBusinessName'
                                                                    ]['#text']
                                                                )),
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:TradingBusinessName"]`,
                                                        "{ '#text': string; } | undefined",
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:TradingBusinessName']
                                                    )) ||
                                                (((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                    'ram:SpecifiedLegalOrganization'
                                                ] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:SpecifiedLegalOrganization'
                                                    ] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:SpecifiedLegalOrganization'
                                                    ] === 'function') &&
                                                    evaluate(
                                                        ((typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:ID'] !== null &&
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:BuyerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization']['ram:ID'] ===
                                                                'object') ||
                                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:BuyerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization']['ram:ID'] ===
                                                                'function') &&
                                                            evaluate(
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '#text'
                                                                ] === 'string',
                                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["#text"]`,
                                                                'string',
                                                                typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID']['#text']
                                                            ) &&
                                                            evaluate(
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '@schemeID'
                                                                ] === 'string',
                                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]["@schemeID"]`,
                                                                'string',
                                                                typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization']['ram:ID'][
                                                                    '@schemeID'
                                                                ]
                                                            ),
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:ID"]`,
                                                        '{ "#text": string; "@schemeID": string; }',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:ID']
                                                    ) &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:TradingBusinessName'] === 'undefined' ||
                                                            (((typedObj['rsm:CrossIndustryInvoice'][
                                                                'rsm:SupplyChainTradeTransaction'
                                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                                'ram:BuyerTradeParty'
                                                            ]['ram:SpecifiedLegalOrganization'][
                                                                'ram:TradingBusinessName'
                                                            ] !== null &&
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization'][
                                                                    'ram:TradingBusinessName'
                                                                ] === 'object') ||
                                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                    'rsm:SupplyChainTradeTransaction'
                                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                                    'ram:BuyerTradeParty'
                                                                ]['ram:SpecifiedLegalOrganization'][
                                                                    'ram:TradingBusinessName'
                                                                ] === 'function') &&
                                                                evaluate(
                                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:BuyerTradeParty'
                                                                    ]['ram:SpecifiedLegalOrganization'][
                                                                        'ram:TradingBusinessName'
                                                                    ]['#text'] === 'string',
                                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:TradingBusinessName"]["#text"]`,
                                                                    'string',
                                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                                        'rsm:SupplyChainTradeTransaction'
                                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                                        'ram:BuyerTradeParty'
                                                                    ]['ram:SpecifiedLegalOrganization'][
                                                                        'ram:TradingBusinessName'
                                                                    ]['#text']
                                                                )),
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]["ram:TradingBusinessName"]`,
                                                        "{ '#text': string; } | undefined",
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:SpecifiedLegalOrganization'
                                                        ]['ram:TradingBusinessName']
                                                    )),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:SpecifiedLegalOrganization"]`,
                                            "{ 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:BuyerTradeParty']['ram:SpecifiedLegalOrganization']
                                        ) &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                'ram:GlobalID'
                                            ] === 'undefined' ||
                                                (((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                    'ram:GlobalID'
                                                ] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:GlobalID'
                                                    ] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                        'ram:GlobalID'
                                                    ] === 'function') &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:GlobalID'
                                                        ]['#text'] === 'string',
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:GlobalID"]["#text"]`,
                                                        'string',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:GlobalID'
                                                        ]['#text']
                                                    ) &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:GlobalID'
                                                        ]['@schemeID'] === 'string',
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:GlobalID"]["@schemeID"]`,
                                                        'string',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement']['ram:BuyerTradeParty'][
                                                            'ram:GlobalID'
                                                        ]['@schemeID']
                                                    )),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]["ram:GlobalID"]`,
                                            "{ '#text': string; '@schemeID': string; } | undefined",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeAgreement'
                                            ]['ram:BuyerTradeParty']['ram:GlobalID']
                                        ),
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerTradeParty"]`,
                                    "{ \"ram:ID\": { '#text': string; } | undefined; \"ram:Name\": { '#text': string; }; \"ram:SpecifiedLegalOrganization\": { 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined; \"ram:GlobalID\": { '#text': string; '@schemeID': string; } | undefined; }",
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeAgreement'
                                    ]['ram:BuyerTradeParty']
                                ) &&
                                evaluate(
                                    typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeAgreement'
                                    ]['ram:BuyerOrderReferencedDocument'] === 'undefined' ||
                                        (((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeAgreement'
                                        ]['ram:BuyerOrderReferencedDocument'] !== null &&
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                'ram:BuyerOrderReferencedDocument'
                                            ] === 'object') ||
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeAgreement'][
                                                'ram:BuyerOrderReferencedDocument'
                                            ] === 'function') &&
                                            evaluate(
                                                ((typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeAgreement'][
                                                    'ram:BuyerOrderReferencedDocument'
                                                ]['ram:IssuerAssignedID'] !== null &&
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                        'ram:BuyerOrderReferencedDocument'
                                                    ]['ram:IssuerAssignedID'] === 'object') ||
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeAgreement'][
                                                        'ram:BuyerOrderReferencedDocument'
                                                    ]['ram:IssuerAssignedID'] === 'function') &&
                                                    evaluate(
                                                        typeof typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement'][
                                                            'ram:BuyerOrderReferencedDocument'
                                                        ]['ram:IssuerAssignedID']['#text'] === 'string',
                                                        `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"]["ram:IssuerAssignedID"]["#text"]`,
                                                        'string',
                                                        typedObj['rsm:CrossIndustryInvoice'][
                                                            'rsm:SupplyChainTradeTransaction'
                                                        ]['ram:ApplicableHeaderTradeAgreement'][
                                                            'ram:BuyerOrderReferencedDocument'
                                                        ]['ram:IssuerAssignedID']['#text']
                                                    ),
                                                `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"]["ram:IssuerAssignedID"]`,
                                                "{ '#text': string; }",
                                                typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                    'ram:ApplicableHeaderTradeAgreement'
                                                ]['ram:BuyerOrderReferencedDocument']['ram:IssuerAssignedID']
                                            )),
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]["ram:BuyerOrderReferencedDocument"]`,
                                    "{ 'ram:IssuerAssignedID': { '#text': string; }; } | undefined",
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeAgreement'
                                    ]['ram:BuyerOrderReferencedDocument']
                                ),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeAgreement"]`,
                            "{ \"ram:BuyerReference\": { '#text': string; } | undefined; \"ram:SellerTradeParty\": { \"ram:ID\": { '#text': string; } | undefined; \"ram:Name\": { '#text': string; }; \"ram:SpecifiedLegalOrganization\": { 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined; \"ram:PostalTradeAddress\": { 'ram:CountryID': { '#text': string; }; }; \"ram:SpecifiedTaxRegistration\": [{ 'ram:ID': { '#text': string; '@schemeID': string; }; }, ({ 'ram:ID': { '#text': string; '@schemeID': string; }; } | undefined)?]; \"ram:GlobalID\": { '#text': string; '@schemeID': string; } | undefined; }; \"ram:BuyerTradeParty\": { \"ram:ID\": { '#text': string; } | undefined; \"ram:Name\": { '#text': string; }; \"ram:SpecifiedLegalOrganization\": { 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined; \"ram:GlobalID\": { '#text': string; '@schemeID': string; } | undefined; }; \"ram:BuyerOrderReferencedDocument\": { 'ram:IssuerAssignedID': { '#text': string; }; } | undefined; }",
                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                'ram:ApplicableHeaderTradeAgreement'
                            ]
                        ) &&
                        evaluate(
                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                'ram:ApplicableHeaderTradeDelivery'
                            ] !== null &&
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                    'ram:ApplicableHeaderTradeDelivery'
                                ] === 'object') ||
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                    'ram:ApplicableHeaderTradeDelivery'
                                ] === 'function') &&
                                evaluate(
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeDelivery'
                                    ]['#text'] === '',
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeDelivery"]["#text"]`,
                                    '""',
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeDelivery'
                                    ]['#text']
                                ),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeDelivery"]`,
                            '{ \'#text\': ""; }',
                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                'ram:ApplicableHeaderTradeDelivery'
                            ]
                        ) &&
                        evaluate(
                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                'ram:ApplicableHeaderTradeSettlement'
                            ] !== null &&
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                    'ram:ApplicableHeaderTradeSettlement'
                                ] === 'object') ||
                                typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                    'ram:ApplicableHeaderTradeSettlement'
                                ] === 'function') &&
                                evaluate(
                                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeSettlement'
                                    ]['ram:InvoiceCurrencyCode'] !== null &&
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeSettlement'
                                        ]['ram:InvoiceCurrencyCode'] === 'object') ||
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeSettlement'
                                        ]['ram:InvoiceCurrencyCode'] === 'function') &&
                                        evaluate(
                                            typeof typedObj['rsm:CrossIndustryInvoice'][
                                                'rsm:SupplyChainTradeTransaction'
                                            ]['ram:ApplicableHeaderTradeSettlement']['ram:InvoiceCurrencyCode'][
                                                '#text'
                                            ] === 'string',
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:InvoiceCurrencyCode"]["#text"]`,
                                            'string',
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:InvoiceCurrencyCode']['#text']
                                        ),
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:InvoiceCurrencyCode"]`,
                                    "{ '#text': string; }",
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeSettlement'
                                    ]['ram:InvoiceCurrencyCode']
                                ) &&
                                evaluate(
                                    ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeSettlement'
                                    ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'] !== null &&
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeSettlement'
                                        ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'] === 'object') ||
                                        typeof typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                            'ram:ApplicableHeaderTradeSettlement'
                                        ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'] === 'function') &&
                                        evaluate(
                                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'][
                                                'ram:TaxBasisTotalAmount'
                                            ] !== null &&
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeSettlement'][
                                                    'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                ]['ram:TaxBasisTotalAmount'] === 'object') ||
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeSettlement'][
                                                    'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                ]['ram:TaxBasisTotalAmount'] === 'function') &&
                                                evaluate(
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:TaxBasisTotalAmount']['#text'] === 'string',
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxBasisTotalAmount"]["#text"]`,
                                                    'string',
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:TaxBasisTotalAmount']['#text']
                                                ),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxBasisTotalAmount"]`,
                                            "{ '#text': string; }",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'][
                                                'ram:TaxBasisTotalAmount'
                                            ]
                                        ) &&
                                        evaluate(
                                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'][
                                                'ram:TaxTotalAmount'
                                            ] !== null &&
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeSettlement'][
                                                    'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                ]['ram:TaxTotalAmount'] === 'object') ||
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeSettlement'][
                                                    'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                ]['ram:TaxTotalAmount'] === 'function') &&
                                                evaluate(
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:TaxTotalAmount']['#text'] === 'string',
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxTotalAmount"]["#text"]`,
                                                    'string',
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:TaxTotalAmount']['#text']
                                                ) &&
                                                evaluate(
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:TaxTotalAmount']['@currencyID'] === 'string',
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxTotalAmount"]["@currencyID"]`,
                                                    'string',
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:TaxTotalAmount']['@currencyID']
                                                ),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:TaxTotalAmount"]`,
                                            "{ '#text': string; '@currencyID': string; }",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'][
                                                'ram:TaxTotalAmount'
                                            ]
                                        ) &&
                                        evaluate(
                                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'][
                                                'ram:GrandTotalAmount'
                                            ] !== null &&
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeSettlement'][
                                                    'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                ]['ram:GrandTotalAmount'] === 'object') ||
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeSettlement'][
                                                    'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                ]['ram:GrandTotalAmount'] === 'function') &&
                                                evaluate(
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:GrandTotalAmount']['#text'] === 'string',
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:GrandTotalAmount"]["#text"]`,
                                                    'string',
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:GrandTotalAmount']['#text']
                                                ),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:GrandTotalAmount"]`,
                                            "{ '#text': string; }",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'][
                                                'ram:GrandTotalAmount'
                                            ]
                                        ) &&
                                        evaluate(
                                            ((typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'][
                                                'ram:DuePayableAmount'
                                            ] !== null &&
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeSettlement'][
                                                    'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                ]['ram:DuePayableAmount'] === 'object') ||
                                                typeof typedObj['rsm:CrossIndustryInvoice'][
                                                    'rsm:SupplyChainTradeTransaction'
                                                ]['ram:ApplicableHeaderTradeSettlement'][
                                                    'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                ]['ram:DuePayableAmount'] === 'function') &&
                                                evaluate(
                                                    typeof typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:DuePayableAmount']['#text'] === 'string',
                                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:DuePayableAmount"]["#text"]`,
                                                    'string',
                                                    typedObj['rsm:CrossIndustryInvoice'][
                                                        'rsm:SupplyChainTradeTransaction'
                                                    ]['ram:ApplicableHeaderTradeSettlement'][
                                                        'ram:SpecifiedTradeSettlementHeaderMonetarySummation'
                                                    ]['ram:DuePayableAmount']['#text']
                                                ),
                                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]["ram:DuePayableAmount"]`,
                                            "{ '#text': string; }",
                                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                                'ram:ApplicableHeaderTradeSettlement'
                                            ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation'][
                                                'ram:DuePayableAmount'
                                            ]
                                        ),
                                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]["ram:SpecifiedTradeSettlementHeaderMonetarySummation"]`,
                                    "{ 'ram:TaxBasisTotalAmount': { '#text': string; }; 'ram:TaxTotalAmount': { '#text': string; '@currencyID': string; }; 'ram:GrandTotalAmount': { '#text': string; }; 'ram:DuePayableAmount': { '#text': string; }; }",
                                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                        'ram:ApplicableHeaderTradeSettlement'
                                    ]['ram:SpecifiedTradeSettlementHeaderMonetarySummation']
                                ),
                            `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]["ram:ApplicableHeaderTradeSettlement"]`,
                            "{ 'ram:InvoiceCurrencyCode': { '#text': string; }; 'ram:SpecifiedTradeSettlementHeaderMonetarySummation': { 'ram:TaxBasisTotalAmount': { '#text': string; }; 'ram:TaxTotalAmount': { '#text': string; '@currencyID': string; }; 'ram:GrandTotalAmount': { '#text': string; }; 'ram:DuePayableAmount': { '#text': string; }; }; }",
                            typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction'][
                                'ram:ApplicableHeaderTradeSettlement'
                            ]
                        ),
                    `${argumentName}["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"]`,
                    "{ \"ram:ApplicableHeaderTradeAgreement\": { \"ram:BuyerReference\": { '#text': string; } | undefined; \"ram:SellerTradeParty\": { \"ram:ID\": { '#text': string; } | undefined; \"ram:Name\": { '#text': string; }; \"ram:SpecifiedLegalOrganization\": { 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined; \"ram:PostalTradeAddress\": { 'ram:CountryID': { '#text': string; }; }; \"ram:SpecifiedTaxRegistration\": [{ 'ram:ID': { '#text': string; '@schemeID': string; }; }, ({ 'ram:ID': { '#text': string; '@schemeID': string; }; } | undefined)?]; \"ram:GlobalID\": { '#text': string; '@schemeID': string; } | undefined; }; \"ram:BuyerTradeParty\": { \"ram:ID\": { '#text': string; } | undefined; \"ram:Name\": { '#text': string; }; \"ram:SpecifiedLegalOrganization\": { 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined; \"ram:GlobalID\": { '#text': string; '@schemeID': string; } | undefined; }; \"ram:BuyerOrderReferencedDocument\": { 'ram:IssuerAssignedID': { '#text': string; }; } | undefined; }; \"ram:ApplicableHeaderTradeDelivery\": { '#text': \"\"; }; \"ram:ApplicableHeaderTradeSettlement\": { 'ram:InvoiceCurrencyCode': { '#text': string; }; 'ram:SpecifiedTradeSettlementHeaderMonetarySummation': { 'ram:TaxBasisTotalAmount': { '#text': string; }; 'ram:TaxTotalAmount': { '#text': string; '@currencyID': string; }; 'ram:GrandTotalAmount': { '#text': string; }; 'ram:DuePayableAmount': { '#text': string; }; }; }; }",
                    typedObj['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction']
                ) &&
                evaluate(
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:rsm'] ===
                        'urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100',
                    `${argumentName}["rsm:CrossIndustryInvoice"]["@xmlns:rsm"]`,
                    '"urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100"',
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:rsm']
                ) &&
                evaluate(
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:qdt'] ===
                        'urn:un:unece:uncefact:data:standard:QualifiedDataType:100',
                    `${argumentName}["rsm:CrossIndustryInvoice"]["@xmlns:qdt"]`,
                    '"urn:un:unece:uncefact:data:standard:QualifiedDataType:100"',
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:qdt']
                ) &&
                evaluate(
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:ram'] ===
                        'urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100',
                    `${argumentName}["rsm:CrossIndustryInvoice"]["@xmlns:ram"]`,
                    '"urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100"',
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:ram']
                ) &&
                evaluate(
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:xs'] === 'http://www.w3.org/2001/XMLSchema',
                    `${argumentName}["rsm:CrossIndustryInvoice"]["@xmlns:xs"]`,
                    '"http://www.w3.org/2001/XMLSchema"',
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:xs']
                ) &&
                evaluate(
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:udt'] ===
                        'urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100',
                    `${argumentName}["rsm:CrossIndustryInvoice"]["@xmlns:udt"]`,
                    '"urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100"',
                    typedObj['rsm:CrossIndustryInvoice']['@xmlns:udt']
                ),
            `${argumentName}["rsm:CrossIndustryInvoice"]`,
            "{ \"rsm:ExchangedDocumentContext\": { \"ram:BusinessProcessSpecifiedDocumentContextParameter\": { 'ram:ID': { '#text': string; }; } | undefined; \"ram:GuidelineSpecifiedDocumentContextParameter\": { \"ram:ID\": { \"#text\": \"urn:factur-x.eu:1p0:minimum\" | \"urn:factur-x.eu:1p0:basicwl\"; }; }; }; \"rsm:ExchangedDocument\": { \"ram:ID\": { '#text': string; }; \"ram:TypeCode\": { '#text': string; }; \"ram:IssueDateTime\": { 'udt:DateTimeString': { '#text': string; '@format': string; }; }; \"ram:IncludedNote\": [{ 'ram:Content': { '#text': string; }; 'ram:SubjectCode': { '#text': string; }; }] | undefined; }; \"rsm:SupplyChainTradeTransaction\": { \"ram:ApplicableHeaderTradeAgreement\": { \"ram:BuyerReference\": { '#text': string; } | undefined; \"ram:SellerTradeParty\": { \"ram:ID\": { '#text': string; } | undefined; \"ram:Name\": { '#text': string; }; \"ram:SpecifiedLegalOrganization\": { 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined; \"ram:PostalTradeAddress\": { 'ram:CountryID': { '#text': string; }; }; \"ram:SpecifiedTaxRegistration\": [{ 'ram:ID': { '#text': string; '@schemeID': string; }; }, ({ 'ram:ID': { '#text': string; '@schemeID': string; }; } | undefined)?]; \"ram:GlobalID\": { '#text': string; '@schemeID': string; } | undefined; }; \"ram:BuyerTradeParty\": { \"ram:ID\": { '#text': string; } | undefined; \"ram:Name\": { '#text': string; }; \"ram:SpecifiedLegalOrganization\": { 'ram:ID': { '#text': string; '@schemeID': string; }; 'ram:TradingBusinessName'?: { '#text': string; } | undefined; } | { \"ram:ID\": { \"#text\": string; \"@schemeID\": string; }; \"ram:TradingBusinessName\": { '#text': string; } | undefined; } | undefined; \"ram:GlobalID\": { '#text': string; '@schemeID': string; } | undefined; }; \"ram:BuyerOrderReferencedDocument\": { 'ram:IssuerAssignedID': { '#text': string; }; } | undefined; }; \"ram:ApplicableHeaderTradeDelivery\": { '#text': \"\"; }; \"ram:ApplicableHeaderTradeSettlement\": { 'ram:InvoiceCurrencyCode': { '#text': string; }; 'ram:SpecifiedTradeSettlementHeaderMonetarySummation': { 'ram:TaxBasisTotalAmount': { '#text': string; }; 'ram:TaxTotalAmount': { '#text': string; '@currencyID': string; }; 'ram:GrandTotalAmount': { '#text': string; }; 'ram:DuePayableAmount': { '#text': string; }; }; }; }; \"@xmlns:rsm\": \"urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100\"; \"@xmlns:qdt\": \"urn:un:unece:uncefact:data:standard:QualifiedDataType:100\"; \"@xmlns:ram\": \"urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100\"; \"@xmlns:xs\": \"http://www.w3.org/2001/XMLSchema\"; \"@xmlns:udt\": \"urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100\"; }",
            typedObj['rsm:CrossIndustryInvoice']
        )
    )
}
