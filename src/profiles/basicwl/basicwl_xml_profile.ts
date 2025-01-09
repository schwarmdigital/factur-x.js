import { z } from 'zod'

// StandardStringType
const StandardStringTypeSchema = z.object({
    '#text': z.string()
})

// StandardStringTypeWithRequiredSchemeID
const StandardStringTypeWithRequiredSchemeIDSchema = z.object({
    '#text': z.string(),
    '@schemeID': z.string()
})

// IncludedNoteType
const IncludedNoteTypeSchema = z.object({
    'ram:Content': z.object({
        '#text': z.string()
    }),
    'ram:SubjectCode': z
        .object({
            '#text': z.string()
        })
        .optional()
})

// ApplicableTradeTaxType
const ApplicableTradeTaxTypeSchema = z.object({
    'ram:CalculatedAmount': z.object({
        '#text': z.string()
    }),
    'ram:TypeCode': z.object({
        '#text': z.string()
    }),
    'ram:ExemptionReason': z
        .object({
            '#text': z.string()
        })
        .optional(),
    'ram:BasisAmount': z.object({
        '#text': z.string()
    }),
    'ram:CategoryCode': z.object({
        '#text': z.string()
    }),
    'ram:ExemptionReasonCode': z
        .object({
            '#text': z.string()
        })
        .optional(),
    'ram:DueDateTypeCode': z
        .object({
            '#text': z.string()
        })
        .optional(),
    'ram:RateApplicablePercent': z
        .object({
            '#text': z.string()
        })
        .optional()
})

// SpecifiedTradeSettlementPaymentMeansType
const SpecifiedTradeSettlementPaymentMeansTypeSchema = z.object({
    'ram:TypeCode': z.object({
        '#text': z.string()
    }),
    'ram:PayerPartyDebtorFinancialAccount': z
        .object({
            'ram:IBANID': z.object({
                '#text': z.string()
            })
        })
        .optional(),
    'ram:PayeePartyCreditorFinancialAccount': z
        .object({
            'ram:IBANID': z
                .object({
                    '#text': z.string()
                })
                .optional(),
            'ram:ProprietaryID': z
                .object({
                    '#text': z.string()
                })
                .optional()
        })
        .optional()
})

// SpecifiedTradeAllowanceChargeType
const SpecifiedTradeAllowanceChargeTypeSchema = z.object({
    'ram:ChargeIndicator': z.object({
        'ram:Indicator': z.object({
            '#text': z.string()
        })
    }),
    'ram:CalculationPercent': z
        .object({
            '#text': z.string()
        })
        .optional(),
    'ram:BasisAmount': z
        .object({
            '#text': z.string()
        })
        .optional(),
    'ram:ActualAmount': z.object({
        '#text': z.string()
    }),
    'ram:ReasonCode': z
        .object({
            '#text': z.string()
        })
        .optional(),
    'ram:Reason': z
        .object({
            '#text': z.string()
        })
        .optional(),
    'ram:CategoryTradeTax': z.object({
        'ram:TypeCode': z.object({
            '#text': z.string()
        }),
        'ram:CategoryCode': z.object({
            '#text': z.string()
        }),
        'ram:RateApplicablePercent': z
            .object({
                '#text': z.string()
            })
            .optional()
    })
})

// TaxAmountType
const TaxAmountTypeSchema = z.object({
    '#text': z.string(),
    '@currencyID': z.string()
})

// InvoiceReferencedDocumentType
const InvoiceReferencedDocumentTypeSchema = z.object({
    'ram:IssuerAssignedID': z.object({
        '#text': z.string()
    }),
    'ram:FormattedIssueDateTime': z
        .object({
            'udt:DateTimeString': z.object({
                '#text': z.string(),
                '@format': z.string()
            })
        })
        .optional()
})

const XmlBasicWLProfileSchema = z.object({
    '?xml': z.object({
        '@version': z.literal('1.0'),
        '@encoding': z.literal('UTF-8')
    }),
    'rsm:CrossIndustryInvoice': z.object({
        'rsm:ExchangedDocumentContext': z.object({
            'ram:BusinessProcessSpecifiedDocumentContextParameter': z
                .object({
                    'ram:ID': z.object({
                        '#text': z.string()
                    })
                })
                .optional(),
            'ram:GuidelineSpecifiedDocumentContextParameter': z.object({
                'ram:ID': z.object({
                    '#text': z.literal('urn:factur-x.eu:1p0:basicwl')
                })
            })
        }),
        'rsm:ExchangedDocument': z.object({
            'ram:ID': z.object({
                '#text': z.string()
            }),
            'ram:TypeCode': z.object({
                '#text': z.string()
            }),
            'ram:IssueDateTime': z.object({
                'udt:DateTimeString': z.object({
                    '#text': z.string(),
                    '@format': z.string()
                })
            }),
            'ram:IncludedNote': z.union([IncludedNoteTypeSchema, z.array(IncludedNoteTypeSchema)]).optional()
        }),
        'rsm:SupplyChainTradeTransaction': z.object({
            'ram:ApplicableHeaderTradeAgreement': z.object({
                'ram:BuyerReference': z
                    .object({
                        '#text': z.string()
                    })
                    .optional(),
                'ram:SellerTradeParty': z.object({
                    'ram:ID': z.union([StandardStringTypeSchema, z.array(StandardStringTypeSchema)]).optional(),
                    'ram:GlobalID': z
                        .union([
                            StandardStringTypeWithRequiredSchemeIDSchema,
                            z.array(StandardStringTypeWithRequiredSchemeIDSchema)
                        ])
                        .optional(),
                    'ram:Name': z.object({
                        '#text': z.string()
                    }),
                    'ram:SpecifiedLegalOrganization': z
                        .object({
                            'ram:ID': z
                                .object({
                                    '#text': z.string(),
                                    '@schemeID': z.string().optional()
                                })
                                .optional(),
                            'ram:TradingBusinessName': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional()
                        })
                        .optional(),
                    'ram:PostalTradeAddress': z.object({
                        'ram:PostcodeCode': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:LineOne': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:LineTwo': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:LineThree': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:CityName': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:CountryID': z.object({
                            '#text': z.string()
                        }),
                        'ram:CountrySubDivisionName': z
                            .object({
                                '#text': z.string()
                            })
                            .optional()
                    }),
                    'ram:URIUniversalCommunication': z
                        .object({
                            'ram:URIID': StandardStringTypeWithRequiredSchemeIDSchema
                        })
                        .optional(),
                    'ram:SpecifiedTaxRegistration': z
                        .union([
                            z
                                .array(
                                    z.object({
                                        'ram:ID': z.object({
                                            '#text': z.string(),
                                            '@schemeID': z.string()
                                        })
                                    })
                                )
                                .length(2),
                            z.object({
                                'ram:ID': z.object({
                                    '#text': z.string(),
                                    '@schemeID': z.string()
                                })
                            })
                        ])
                        .optional()
                }),
                'ram:BuyerTradeParty': z.object({
                    'ram:ID': StandardStringTypeSchema.optional(),
                    'ram:GlobalID': StandardStringTypeWithRequiredSchemeIDSchema.optional(),
                    'ram:Name': z.object({
                        '#text': z.string()
                    }),
                    'ram:SpecifiedLegalOrganization': z
                        .object({
                            'ram:ID': z
                                .object({
                                    '#text': z.string(),
                                    '@schemeID': z.string().optional()
                                })
                                .optional()
                        })
                        .optional(),
                    'ram:PostalTradeAddress': z.object({
                        'ram:PostcodeCode': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:LineOne': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:LineTwo': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:LineThree': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:CityName': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:CountryID': z.object({
                            '#text': z.string()
                        }),
                        'ram:CountrySubDivisionName': z
                            .object({
                                '#text': z.string()
                            })
                            .optional()
                    }),
                    'ram:URIUniversalCommunication': z
                        .object({
                            'ram:URIID': StandardStringTypeWithRequiredSchemeIDSchema
                        })
                        .optional(),
                    'ram:SpecifiedTaxRegistration': z
                        .object({
                            'ram:ID': z.object({
                                '#text': z.string(),
                                '@schemeID': z.string()
                            })
                        })
                        .optional()
                }),
                'ram:SellerTaxRepresentativeTradeParty': z
                    .object({
                        'ram:Name': z.object({
                            '#text': z.string()
                        }),
                        'ram:PostalTradeAddress': z.object({
                            'ram:PostcodeCode': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:LineOne': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:LineTwo': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:LineThree': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:CityName': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:CountryID': z.object({
                                '#text': z.string()
                            }),
                            'ram:CountrySubDivisionName': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional()
                        }),
                        'ram:SpecifiedTaxRegistration': z.object({
                            'ram:ID': z.object({
                                '#text': z.string(),
                                '@schemeID': z.string()
                            })
                        })
                    })
                    .optional(),
                'ram:BuyerOrderReferencedDocument': z
                    .object({
                        'ram:IssuerAssignedID': z.object({
                            '#text': z.string()
                        })
                    })
                    .optional(),
                'ram:ContractReferencedDocument': z
                    .object({
                        'ram:IssuerAssignedID': z.object({
                            '#text': z.string()
                        })
                    })
                    .optional()
            }),
            'ram:ApplicableHeaderTradeDelivery': z.object({
                'ram:ShipToTradeParty': z
                    .object({
                        'ram:ID': StandardStringTypeSchema.optional(),
                        'ram:GlobalID': StandardStringTypeWithRequiredSchemeIDSchema.optional(),
                        'ram:Name': z.object({
                            '#text': z.string()
                        }),
                        'ram:PostalTradeAddress': z.object({
                            'ram:PostcodeCode': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:LineOne': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:LineTwo': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:LineThree': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:CityName': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional(),
                            'ram:CountryID': z.object({
                                '#text': z.string()
                            }),
                            'ram:CountrySubDivisionName': z
                                .object({
                                    '#text': z.string()
                                })
                                .optional()
                        })
                    })
                    .optional(),
                'ram:ActualDeliverySupplyChainEvent': z.object({
                    'ram:OccurrenceDateTime': z.object({
                        'udt:DateTimeString': z.object({
                            '#text': z.string(),
                            '@format': z.string()
                        })
                    })
                }),
                'ram:DespatchAdviceReferencedDocument': z
                    .object({
                        'ram:IssuerAssignedID': z.object({
                            '#text': z.string()
                        })
                    })
                    .optional()
            }),
            'ram:ApplicableHeaderTradeSettlement': z.object({
                'ram:CreditorReferenceID': z
                    .object({
                        '#text': z.string()
                    })
                    .optional(),
                'ram:PaymentReference': z
                    .object({
                        '#text': z.string()
                    })
                    .optional(),
                'ram:TaxCurrencyCode': z
                    .object({
                        '#text': z.string()
                    })
                    .optional(),
                'ram:InvoiceCurrencyCode': z.object({
                    '#text': z.string()
                }),
                'ram:PayeeTradeParty': z
                    .object({
                        'ram:ID': StandardStringTypeSchema.optional(),
                        'ram:GlobalID': StandardStringTypeWithRequiredSchemeIDSchema.optional(),
                        'ram:Name': z.object({
                            '#text': z.string()
                        }),
                        'ram:SpecifiedLegalOrganization': z
                            .object({
                                'ram:ID': z
                                    .object({
                                        '#text': z.string(),
                                        '@schemeID': z.string().optional()
                                    })
                                    .optional()
                            })
                            .optional()
                    })
                    .optional(),
                'ram:SpecifiedTradeSettlementPaymentMeans': z
                    .union([
                        SpecifiedTradeSettlementPaymentMeansTypeSchema,
                        z.array(SpecifiedTradeSettlementPaymentMeansTypeSchema)
                    ])
                    .optional(),
                'ram:ApplicableTradeTax': z.union([
                    ApplicableTradeTaxTypeSchema,
                    z.array(ApplicableTradeTaxTypeSchema)
                ]),
                'ram:BillingSpecifiedPeriod': z
                    .object({
                        'ram:StartDateTime': z
                            .object({
                                'udt:DateTimeString': z.object({
                                    '#text': z.string(),
                                    '@format': z.string()
                                })
                            })
                            .optional(),
                        'ram:EndDateTime': z
                            .object({
                                'udt:DateTimeString': z.object({
                                    '#text': z.string(),
                                    '@format': z.string()
                                })
                            })
                            .optional()
                    })
                    .optional(),
                'ram:SpecifiedTradeAllowanceCharge': z
                    .union([SpecifiedTradeAllowanceChargeTypeSchema, z.array(SpecifiedTradeAllowanceChargeTypeSchema)])
                    .optional(),
                'ram:SpecifiedTradePaymentTerms': z
                    .object({
                        'ram:Description': z
                            .object({
                                '#text': z.string()
                            })
                            .optional(),
                        'ram:DueDateDateTime': z
                            .object({
                                'udt:DateTimeString': z.object({
                                    '#text': z.string(),
                                    '@format': z.string()
                                })
                            })
                            .optional(),
                        'ram:DirectDebitMandateID': z
                            .object({
                                '#text': z.string()
                            })
                            .optional()
                    })
                    .optional(),
                'ram:SpecifiedTradeSettlementHeaderMonetarySummation': z.object({
                    'ram:LineTotalAmount': z.object({
                        '#text': z.string()
                    }),
                    'ram:ChargeTotalAmount': z
                        .object({
                            '#text': z.string()
                        })
                        .optional(),
                    'ram:AllowanceTotalAmount': z
                        .object({
                            '#text': z.string()
                        })
                        .optional(),
                    'ram:TaxBasisTotalAmount': z
                        .object({
                            '#text': z.string()
                        })
                        .optional(),
                    'ram:TaxTotalAmount': z
                        .union([
                            TaxAmountTypeSchema,
                            z.tuple([TaxAmountTypeSchema.optional(), TaxAmountTypeSchema.optional()])
                        ])
                        .optional(),
                    'ram:GrandTotalAmount': z.object({
                        '#text': z.string()
                    }),
                    'ram:TotalPrepaidAmount': z
                        .object({
                            '#text': z.string()
                        })
                        .optional(),
                    'ram:DuePayableAmount': z.object({
                        '#text': z.string()
                    })
                }),
                'ram:InvoiceReferencedDocument': z
                    .union([InvoiceReferencedDocumentTypeSchema, z.array(InvoiceReferencedDocumentTypeSchema)])
                    .optional(),
                'ram:ReceivableSpecifiedTradeAccountingAccount': z
                    .object({
                        'ram:ID': z.object({
                            '#text': z.string()
                        })
                    })
                    .optional()
            })
        }),
        '@xmlns:rsm': z.literal('urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100'),
        '@xmlns:qdt': z.literal('urn:un:unece:uncefact:data:standard:QualifiedDataType:100'),
        '@xmlns:ram': z.literal('urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100'),
        '@xmlns:xs': z.literal('http://www.w3.org/2001/XMLSchema'),
        '@xmlns:udt': z.literal('urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100')
    })
})

// Typen ableiten
type XmlBasicWLProfile = z.infer<typeof XmlBasicWLProfileSchema>

// Typeguard erstellen
const isXmlBasicWLProfile = (data: unknown): data is XmlBasicWLProfile => {
    const result = XmlBasicWLProfileSchema.safeParse(data)

    console.log(data)

    if (!result.success) {
        console.log(result.error.errors)
    }
    return result.success
}

export { XmlBasicWLProfileSchema, XmlBasicWLProfile, isXmlBasicWLProfile }

/**
 * Original Typescript Type, which was then transfered to zod via ChatGPT:
interface StandardStringType {
    '#text': string
}

interface StandardStringTypeWithRequiredSchemeID {
    '#text': string
    '@schemeID': string
}

interface IncludedNoteType {
    'ram:Content': { '#text': string }
    'ram:SubjectCode'?: { '#text': string }
}

interface ApplicableTradeTaxType {
    'ram:CalculatedAmount': { '#text': string }
    'ram:TypeCode': { '#text': string }
    'ram:ExemptionReason'?: { '#text': string }
    'ram:BasisAmount': { '#text': string }
    'ram:CategoryCode': { '#text': string }
    'ram:ExemptionReasonCode'?: { '#text': string }
    'ram:DueDateTypeCode'?: { '#text': string }
    'ram:RateApplicablePercent'?: { '#text': string }
}

interface SpecifiedTradeSettlementPaymentMeansType {
    'ram:TypeCode': { '#text': string }
    'ram:PayerPartyDebtorFinancialAccount'?: {
        'ram:IBANID': { '#text': string }
    }
    'ram:PayeePartyCreditorFinancialAccount'?: {
        'ram:IBANID'?: { '#text': string }
        'ram:ProprietaryID'?: { '#text': string }
    }
}

interface SpecifiedTradeAllowanceChargeType {
    'ram:ChargeIndicator': {
        'ram:Indicator': { '#text': string }
    }
    'ram:CalculationPercent'?: { '#text': string }
    'ram:BasisAmount'?: { '#text': string }
    'ram:ActualAmount': { '#text': string }
    'ram:ReasonCode'?: { '#text': string }
    'ram:Reason'?: { '#text': string }
    'ram:CategoryTradeTax': {
        'ram:TypeCode': { '#text': string }
        'ram:CategoryCode': { '#text': string }
        'ram:RateApplicablePercent'?: { '#text': string }
    }
}

interface TaxAmountType {
    '#text': string
    '@currencyID': string
}

interface InvoiceReferencedDocumentType {
    'ram:IssuerAssignedID': { '#text': string }
    'ram:FormattedIssueDateTime'?: {
        'udt:DateTimeString': { '#text': string; '@format': string }
    }
}

export interface XmlBasicWLProfile {
    '?xml': { '@version': '1.0'; '@encoding': 'UTF-8' }
    'rsm:CrossIndustryInvoice': {
        'rsm:ExchangedDocumentContext': {
            'ram:BusinessProcessSpecifiedDocumentContextParameter'?: { 'ram:ID': { '#text': string } }
            'ram:GuidelineSpecifiedDocumentContextParameter': { 'ram:ID': { '#text': 'urn:factur-x.eu:1p0:basicwl' } }
        }
        'rsm:ExchangedDocument': {
            'ram:ID': { '#text': string }
            'ram:TypeCode': { '#text': string }
            'ram:IssueDateTime': {
                'udt:DateTimeString': { '#text': string; '@format': string }
            }
            'ram:IncludedNote'?: IncludedNoteType | IncludedNoteType[]
        }
        'rsm:SupplyChainTradeTransaction': {
            'ram:ApplicableHeaderTradeAgreement': {
                'ram:BuyerReference'?: { '#text': string }
                'ram:SellerTradeParty': {
                    'ram:ID'?: StandardStringType | StandardStringType[]
                    'ram:GlobalID'?: StandardStringTypeWithRequiredSchemeID | StandardStringTypeWithRequiredSchemeID[]
                    'ram:Name': { '#text': string }
                    'ram:SpecifiedLegalOrganization'?: {
                        'ram:ID'?: { '#text': string; '@schemeID'?: string }
                        'ram:TradingBusinessName'?: { '#text': string }
                    }
                    'ram:PostalTradeAddress': {
                        'ram:PostcodeCode'?: { '#text': string }
                        'ram:LineOne'?: { '#text': string }
                        'ram:LineTwo'?: { '#text': string }
                        'ram:LineThree'?: { '#text': string }
                        'ram:CityName'?: { '#text': string }
                        'ram:CountryID': { '#text': string }
                        'ram:CountrySubDivisionName'?: { '#text': string }
                    }
                    'ram:URIUniversalCommunication'?: {
                        'ram:URIID': StandardStringTypeWithRequiredSchemeID
                    }
                    'ram:SpecifiedTaxRegistration': [
                        { 'ram:ID': { '#text': string; '@schemeID': string } },
                        { 'ram:ID': { '#text': string; '@schemeID': string } }?
                    ]
                }
                'ram:BuyerTradeParty': {
                    'ram:ID'?: StandardStringType
                    'ram:GlobalID'?: StandardStringTypeWithRequiredSchemeID
                    'ram:Name': { '#text': string }
                    'ram:SpecifiedLegalOrganization'?: {
                        'ram:ID'?: { '#text': string; '@schemeID'?: string }
                    }
                    'ram:PostalTradeAddress': {
                        'ram:PostcodeCode'?: { '#text': string }
                        'ram:LineOne'?: { '#text': string }
                        'ram:LineTwo'?: { '#text': string }
                        'ram:LineThree'?: { '#text': string }
                        'ram:CityName'?: { '#text': string }
                        'ram:CountryID': { '#text': string }
                        'ram:CountrySubDivisionName'?: { '#text': string }
                    }
                    'ram:URIUniversalCommunication'?: {
                        'ram:URIID': StandardStringTypeWithRequiredSchemeID
                    }
                    'ram:SpecifiedTaxRegistration': { 'ram:ID': { '#text': string; '@schemeID': string } }
                }
                'ram:SellerTaxRepresentativeTradeParty'?: {
                    'ram:Name': { '#text': string }
                    'ram:PostalTradeAddress': {
                        'ram:PostcodeCode'?: { '#text': string }
                        'ram:LineOne'?: { '#text': string }
                        'ram:LineTwo'?: { '#text': string }
                        'ram:LineThree'?: { '#text': string }
                        'ram:CityName'?: { '#text': string }
                        'ram:CountryID': { '#text': string }
                        'ram:CountrySubDivisionName'?: { '#text': string }
                    }
                    'ram:SpecifiedTaxRegistration': { 'ram:ID': { '#text': string; '@schemeID': string } }
                }
                'ram:BuyerOrderReferencedDocument'?: {
                    'ram:IssuerAssignedID': { '#text': string }
                }
                'ram:ContractReferencedDocument'?: {
                    'ram:IssuerAssignedID': { '#text': string }
                }
            }
            'ram:ApplicableHeaderTradeDelivery': {
                'ram:ShipToTradeParty'?: {
                    'ram:ID'?: StandardStringType
                    'ram:GlobalID'?: StandardStringTypeWithRequiredSchemeID
                    'ram:Name': { '#text': string }
                    'ram:PostalTradeAddress': {
                        'ram:PostcodeCode'?: { '#text': string }
                        'ram:LineOne'?: { '#text': string }
                        'ram:LineTwo'?: { '#text': string }
                        'ram:LineThree'?: { '#text': string }
                        'ram:CityName'?: { '#text': string }
                        'ram:CountryID': { '#text': string }
                        'ram:CountrySubDivisionName'?: { '#text': string }
                    }
                }
                'ram:ActualDeliverySupplyChainEvent': {
                    'ram:OccurrenceDateTime': {
                        'udt:DateTimeString': { '#text': string; '@format': string }
                    }
                }
                'ram:DespatchAdviceReferencedDocument'?: {
                    'ram:IssuerAssignedID': { '#text': string }
                }
            }
            'ram:ApplicableHeaderTradeSettlement': {
                'ram:CreditorReferenceID'?: { '#text': string }
                'ram:PaymentReference'?: { '#text': string }
                'ram:TaxCurrencyCode'?: { '#text': string }
                'ram:InvoiceCurrencyCode': { '#text': string }
                'ram:PayeeTradeParty'?: {
                    'ram:ID'?: StandardStringType
                    'ram:GlobalID'?: StandardStringTypeWithRequiredSchemeID
                    'ram:Name': { '#text': string }
                    'ram:SpecifiedLegalOrganization'?: {
                        'ram:ID'?: { '#text': string; '@schemeID'?: string }
                    }
                }
                'ram:SpecifiedTradeSettlementPaymentMeans'?:
                    | SpecifiedTradeSettlementPaymentMeansType
                    | SpecifiedTradeSettlementPaymentMeansType[]
                'ram:ApplicableTradeTax': ApplicableTradeTaxType | ApplicableTradeTaxType[]
                'ram:BillingSpecifiedPeriod'?: {
                    'ram:StartDateTime'?: {
                        'udt:DateTimeString': { '#text': string; '@format': string }
                    }
                    'ram:EndDateTime'?: {
                        'udt:DateTimeString': { '#text': string; '@format': string }
                    }
                }
                'ram:SpecifiedTradeAllowanceCharge'?:
                    | SpecifiedTradeAllowanceChargeType
                    | SpecifiedTradeAllowanceChargeType[]
                'ram:SpecifiedTradePaymentTerms'?: {
                    'ram:Description'?: { '#text': string }
                    'ram:DueDateDateTime'?: {
                        'udt:DateTimeString': { '#text': string; '@format': string }
                    }
                    'ram:DirectDebitMandateID'?: { '#text': string }
                }
                'ram:SpecifiedTradeSettlementHeaderMonetarySummation': {
                    'ram:LineTotalAmount': { '#text': string }
                    'ram:ChargeTotalAmount'?: { '#text': string }
                    'ram:AllowanceTotalAmount'?: { '#text': string }
                    'ram:TaxBasisTotalAmount'?: { '#text': string }
                    'ram:TaxTotalAmount'?: TaxAmountType | [TaxAmountType, TaxAmountType]
                    'ram:GrandTotalAmount': { '#text': string }
                    'ram:TotalPrepaidAmount'?: { '#text': string }
                    'ram:DuePayableAmount': { '#text': string }
                }
                'ram:InvoiceReferencedDocument'?: InvoiceReferencedDocumentType | InvoiceReferencedDocumentType[]
                'ram:ReceivableSpecifiedTradeAccountingAccount'?: {
                    'ram:ID': { '#text': string }
                }
            }
        }
        '@xmlns:rsm': 'urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100'
        '@xmlns:qdt': 'urn:un:unece:uncefact:data:standard:QualifiedDataType:100'
        '@xmlns:ram': 'urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100'
        '@xmlns:xs': 'http://www.w3.org/2001/XMLSchema'
        '@xmlns:udt': 'urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100'
    }
}

 */
