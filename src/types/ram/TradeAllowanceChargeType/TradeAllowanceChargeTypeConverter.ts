import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../../BaseTypeConverter'
import { CodeTypeConverter, ZCodeType } from '../../CodeTypeConverter'
import { ALLOWANCE_REASONS_CODES, CHARGE_REASONS_CODES, TAX_CATEGORY_CODES, TAX_TYPE_CODE } from '../../codes'
import { AmountTypeConverter, ZAmountType, ZAmountTypeXml } from '../../udt/AmountTypeConverter'
import { IndicatorTypeConverter, ZIndicatorTypeXml } from '../../udt/IndicatorTypeConverter'
import { PercentTypeConverter, ZPercentType, ZPercentTypeXml } from '../../udt/PercentTypeConverter'
import { TextTypeConverter, ZTextType, ZTextTypeXml } from '../../udt/TextTypeConverter'
import {
    TradeAllowanceChargeBasicDocumentType,
    TradeAllowanceChargeBasicDocumentTypeXml,
    ZTradeAllowanceChargeBasicDocumentType,
    ZTradeAllowanceChargeBasicDocumentTypeXml
} from './BasicDocumentLevelAllowanceChargeType'
import {
    TradeAllowanceChargeBasicItemType,
    TradeAllowanceChargeBasicItemTypeXml
} from './BasicItemLevelAllowanceChargeType'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ZTradeAllowanceChargeFullOptionalType = z.object({
    calculationPercent: ZPercentType.optional(),
    basisAmount: ZAmountType.optional(),
    actualAmount: ZAmountType.optional(),
    reasonCode: z.union([z.nativeEnum(CHARGE_REASONS_CODES), z.nativeEnum(ALLOWANCE_REASONS_CODES)]).optional(),
    reason: ZTextType.optional(),
    categoryTradeTax: z
        .object({
            typeCode: ZCodeType(TAX_TYPE_CODE).optional(),
            categoryCode: ZCodeType(TAX_CATEGORY_CODES).optional(),
            rateApplicablePercent: ZPercentType.optional()
        })
        .optional()
})

type TradeAllowanceChargeFullOptionalType = z.infer<typeof ZTradeAllowanceChargeFullOptionalType>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ZTradeAllowanceChargeFullOptionalTypeXml = z.object({
    'ram:ChargeIndicator': ZIndicatorTypeXml,
    'ram:CalculationPercent': ZPercentTypeXml.optional(),
    'ram:BasisAmount': ZAmountTypeXml.optional(),
    'ram:ActualAmount': ZAmountTypeXml.optional(),
    'ram:ReasonCode': ZTextTypeXml.optional(),
    'ram:Reason': ZTextTypeXml.optional(),
    'ram:CategoryTradeTax': z
        .object({
            'ram:TypeCode': ZTextTypeXml.optional(),
            'ram:CategoryCode': ZTextTypeXml.optional(),
            'ram:RateApplicablePercent': ZPercentTypeXml.optional()
        })
        .optional()
})

type TradeAllowanceChargeFullOptionalTypeXml = z.infer<typeof ZTradeAllowanceChargeFullOptionalTypeXml>

type allowedValueTypes = TradeAllowanceChargeBasicDocumentType | TradeAllowanceChargeBasicItemType
type allowedXmlTypes = TradeAllowanceChargeBasicDocumentTypeXml | TradeAllowanceChargeBasicItemTypeXml

export class TradeAllowanceChargeTypeConverter<
    ValueType extends allowedValueTypes,
    XmlType extends allowedXmlTypes
> extends BaseTypeConverter<ValueType, XmlType> {
    amountTypeConverter = new AmountTypeConverter()
    textTypeConverter = new TextTypeConverter()
    taxTypeCodeConverter = new CodeTypeConverter(TAX_TYPE_CODE)
    taxCategoryCodeConverter = new CodeTypeConverter(TAX_CATEGORY_CODES)
    allowanceReasonCodeConverter = new CodeTypeConverter(ALLOWANCE_REASONS_CODES)
    chargeReasonCodeConvereter = new CodeTypeConverter(CHARGE_REASONS_CODES)
    percentTypeConverter = new PercentTypeConverter()
    indicatorTypeConverter = new IndicatorTypeConverter()

    private valueSchema: z.ZodType<ValueType>
    private xmlSchema: z.ZodType<XmlType>

    constructor(valueSchema: z.ZodType<ValueType>, xmlSchema: z.ZodType<XmlType>) {
        super()
        this.valueSchema = valueSchema
        this.xmlSchema = xmlSchema
    }

    _toValue(xml: XmlType): ValueType {
        const { success } = this.xmlSchema.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        const xml_arr = Array.isArray(xml) ? xml : [xml]

        const xmlAllowances = xml_arr.filter(item => {
            return !this.indicatorTypeConverter.toValue(item['ram:ChargeIndicator'])
        })
        const xmlCharges = xml_arr.filter(item => {
            return this.indicatorTypeConverter.toValue(item['ram:ChargeIndicator'])
        })
        const value = {
            allowances: xmlAllowances.map(xml => this.mapXmlToValue(xml, false)),
            charges: xmlCharges.map(xml => this.mapXmlToValue(xml, true))
        }

        const { success: successValue, data } = this.valueSchema.safeParse(value)

        if (!successValue) {
            throw new TypeConverterError('INVALID_XML')
        }

        return data as ValueType
    }

    mapXmlToValue(
        xml: TradeAllowanceChargeFullOptionalTypeXml,
        allowance_false_charge_true: boolean
    ): TradeAllowanceChargeFullOptionalType {
        const allowanceChargeReasonCodeConverter = allowance_false_charge_true
            ? this.chargeReasonCodeConvereter
            : this.allowanceReasonCodeConverter
        return {
            calculationPercent: xml['ram:CalculationPercent']
                ? this.percentTypeConverter.toValue(xml['ram:CalculationPercent'])
                : undefined,
            basisAmount: xml['ram:BasisAmount'] ? this.amountTypeConverter.toValue(xml['ram:BasisAmount']) : undefined,
            actualAmount: xml['ram:ActualAmount']
                ? this.amountTypeConverter.toValue(xml['ram:ActualAmount'])
                : undefined,
            reasonCode: xml['ram:ReasonCode']
                ? allowanceChargeReasonCodeConverter.toValue(xml['ram:ReasonCode'])
                : undefined,
            reason: xml['ram:Reason'] ? this.textTypeConverter.toValue(xml['ram:Reason']) : undefined,
            categoryTradeTax: xml['ram:CategoryTradeTax']
                ? {
                      typeCode: xml['ram:CategoryTradeTax']['ram:TypeCode']
                          ? this.taxTypeCodeConverter.toValue(xml['ram:CategoryTradeTax']['ram:TypeCode'])
                          : undefined,
                      categoryCode: xml['ram:CategoryTradeTax']['ram:CategoryCode']
                          ? this.taxCategoryCodeConverter.toValue(xml['ram:CategoryTradeTax']['ram:CategoryCode'])
                          : undefined,
                      rateApplicablePercent: xml['ram:CategoryTradeTax']['ram:RateApplicablePercent']
                          ? this.percentTypeConverter.toValue(xml['ram:CategoryTradeTax']['ram:RateApplicablePercent'])
                          : undefined
                  }
                : undefined
        }
    }

    _toXML(value: ValueType): XmlType {
        const { success, data } = this.valueSchema.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const xml_allowances = data.allowances
            ? data.allowances.map(obj => {
                  return this.mapValueToXml(obj, false)
              })
            : []

        const xml_charges = data.charges
            ? data.charges.map(obj => {
                  return this.mapValueToXml(obj, true)
              })
            : []
        const { success: xmlSuccess, data: xmlData } = this.xmlSchema.safeParse([...xml_allowances, ...xml_charges])
        if (!xmlSuccess) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return xmlData as XmlType
    }

    mapValueToXml(
        value: TradeAllowanceChargeFullOptionalType,
        allowance_false_charge_true: boolean
    ): TradeAllowanceChargeFullOptionalTypeXml {
        const allowanceChargeReasonCodeConverter = allowance_false_charge_true
            ? this.chargeReasonCodeConvereter
            : this.allowanceReasonCodeConverter
        return {
            'ram:ChargeIndicator': this.indicatorTypeConverter.toXML(allowance_false_charge_true),
            'ram:CalculationPercent':
                value.calculationPercent != undefined
                    ? this.percentTypeConverter.toXML(value.calculationPercent)
                    : undefined,
            'ram:BasisAmount':
                value.basisAmount != undefined ? this.amountTypeConverter.toXML(value.basisAmount) : undefined,
            'ram:ActualAmount': this.amountTypeConverter.toXML(value.actualAmount),
            'ram:ReasonCode': value.reasonCode ? allowanceChargeReasonCodeConverter.toXML(value.reasonCode) : undefined,
            'ram:Reason': value.reason ? this.textTypeConverter.toXML(value.reason) : undefined,
            'ram:CategoryTradeTax': value.categoryTradeTax
                ? {
                      'ram:TypeCode': value.categoryTradeTax.typeCode
                          ? this.taxTypeCodeConverter.toXML(value.categoryTradeTax.typeCode)
                          : undefined,
                      'ram:CategoryCode': value.categoryTradeTax.categoryCode
                          ? this.taxCategoryCodeConverter.toXML(value.categoryTradeTax.categoryCode)
                          : undefined,
                      'ram:RateApplicablePercent':
                          value.categoryTradeTax.rateApplicablePercent != undefined
                              ? this.percentTypeConverter.toXML(value.categoryTradeTax.rateApplicablePercent)
                              : undefined
                  }
                : undefined
        }
    }

    public static basicDocumentLevel(): TradeAllowanceChargeTypeConverter<
        TradeAllowanceChargeBasicDocumentType,
        TradeAllowanceChargeBasicDocumentTypeXml
    > {
        return new TradeAllowanceChargeTypeConverter(
            ZTradeAllowanceChargeBasicDocumentType,
            ZTradeAllowanceChargeBasicDocumentTypeXml
        )
    }
}
