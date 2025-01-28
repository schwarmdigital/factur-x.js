import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { CodeTypeConverter, ZCodeType } from '../CodeTypeConverter'
import { ALLOWANCE_REASONS_CODES, CHARGE_REASONS_CODES, TAX_CATEGORY_CODES, TAX_TYPE_CODE } from '../codes'
import { AmountTypeConverter, ZAmountType, ZAmountTypeXml } from '../udt/AmountTypeConverter'
import { IndicatorTypeConverter, ZIndicatorTypeXml } from '../udt/IndicatorTypeConverter'
import { PercentTypeConverter, ZPercentType, ZPercentTypeXml } from '../udt/PercentTypeConverter'
import { TextTypeConverter, ZTextType, ZTextTypeXml } from '../udt/TextTypeConverter'

const ZTradeAllowanceChargeBasisType = z.object({
    calculationPercent: ZPercentType.optional(),
    basisAmount: ZAmountType.optional(),
    actualAmount: ZAmountType,
    reasonCode: z.union([z.nativeEnum(CHARGE_REASONS_CODES), z.nativeEnum(ALLOWANCE_REASONS_CODES)]).optional(),
    reason: ZTextType.optional(),
    categoryTradeTax: z.object({
        typeCode: ZCodeType(TAX_TYPE_CODE),
        categoryCode: ZCodeType(TAX_CATEGORY_CODES),
        rateApplicablePercent: ZPercentType.optional()
    })
})

type TradeAllowanceChargeBasisType = z.infer<typeof ZTradeAllowanceChargeBasisType>

export const ZTradeAllowanceType = ZTradeAllowanceChargeBasisType.extend({
    reasonCode: ZCodeType(ALLOWANCE_REASONS_CODES).optional()
})

type TradeAllowanceType = z.infer<typeof ZTradeAllowanceType>

export const ZTradeChargeType = ZTradeAllowanceChargeBasisType.extend({
    reasonCode: ZCodeType(CHARGE_REASONS_CODES).optional()
})

type TradeChargeType = z.infer<typeof ZTradeChargeType>

export const ZTradeAllowanceChargeType = z.object({
    allowances: ZTradeAllowanceType.array().optional(),
    charges: ZTradeChargeType.array().optional()
})

export type TradeAllowanceChargeType = z.infer<typeof ZTradeAllowanceChargeType>

const ZTradeAllowanceChargeBasisTypeXml = z.object({
    'ram:ChargeIndicator': ZIndicatorTypeXml,
    'ram:CalculationPercent': ZPercentTypeXml.optional(),
    'ram:BasisAmount': ZAmountTypeXml.optional(),
    'ram:ActualAmount': ZAmountTypeXml,
    'ram:ReasonCode': ZTextTypeXml.optional(),
    'ram:Reason': ZTextTypeXml.optional(),
    'ram:CategoryTradeTax': z.object({
        'ram:TypeCode': ZTextTypeXml,
        'ram:CategoryCode': ZTextTypeXml,
        'ram:RateApplicablePercent': ZPercentTypeXml.optional()
    })
})

type TradeAllowanceChargeBasisTypeXml = z.infer<typeof ZTradeAllowanceChargeBasisTypeXml>

export const ZTradeAllowanceChargeTypeXml = z.union([
    ZTradeAllowanceChargeBasisTypeXml,
    ZTradeAllowanceChargeBasisTypeXml.array()
])

export type TradeAllowanceChargeTypeXml = z.infer<typeof ZTradeAllowanceChargeTypeXml>

export class TradeAllowanceChargeTypeConverter extends BaseTypeConverter<
    TradeAllowanceChargeType,
    TradeAllowanceChargeTypeXml
> {
    amountTypeConverter = new AmountTypeConverter()
    textTypeConverter = new TextTypeConverter()

    taxTypeCodeConverter = new CodeTypeConverter(TAX_TYPE_CODE)
    taxCategoryCodeConverter = new CodeTypeConverter(TAX_CATEGORY_CODES)
    allowanceReasonCodeConverter = new CodeTypeConverter(ALLOWANCE_REASONS_CODES)
    chargeReasonCodeConvereter = new CodeTypeConverter(CHARGE_REASONS_CODES)

    percentTypeConverter = new PercentTypeConverter()
    indicatorTypeConverter = new IndicatorTypeConverter()

    toValue(xml: TradeAllowanceChargeTypeXml): TradeAllowanceChargeType {
        const { success } = ZTradeAllowanceChargeTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }

        if (!Array.isArray(xml)) xml = [xml]
        const xmlAllowances = xml.filter(item => {
            return !this.indicatorTypeConverter.toValue(item['ram:ChargeIndicator'])
        })
        const xmlCharges = xml.filter(item => {
            return this.indicatorTypeConverter.toValue(item['ram:ChargeIndicator'])
        })
        return {
            allowances: xmlAllowances.map(xml => this.mapXmlToValue(xml, false)) as TradeAllowanceType[],
            charges: xmlCharges.map(xml => this.mapXmlToValue(xml, true)) as TradeChargeType[]
        }
    }

    mapXmlToValue(
        xml: TradeAllowanceChargeBasisTypeXml,
        allowance_false_charge_true: boolean
    ): TradeAllowanceChargeBasisType {
        const allowanceChargeReasonCodeConverter = allowance_false_charge_true
            ? this.chargeReasonCodeConvereter
            : this.allowanceReasonCodeConverter
        return {
            calculationPercent: xml['ram:CalculationPercent']
                ? this.percentTypeConverter.toValue(xml['ram:CalculationPercent'])
                : undefined,
            basisAmount: xml['ram:BasisAmount'] ? this.amountTypeConverter.toValue(xml['ram:BasisAmount']) : undefined,
            actualAmount: this.amountTypeConverter.toValue(xml['ram:ActualAmount']),
            reasonCode: xml['ram:ReasonCode']
                ? allowanceChargeReasonCodeConverter.toValue(xml['ram:ReasonCode'])
                : undefined,
            reason: xml['ram:Reason'] ? this.textTypeConverter.toValue(xml['ram:Reason']) : undefined,
            categoryTradeTax: {
                typeCode: this.taxTypeCodeConverter.toValue(xml['ram:CategoryTradeTax']['ram:TypeCode']),
                categoryCode: this.taxCategoryCodeConverter.toValue(xml['ram:CategoryTradeTax']['ram:CategoryCode']),
                rateApplicablePercent: xml['ram:CategoryTradeTax']['ram:RateApplicablePercent']
                    ? this.percentTypeConverter.toValue(xml['ram:CategoryTradeTax']['ram:RateApplicablePercent'])
                    : undefined
            }
        }
    }

    toXML(value: TradeAllowanceChargeType): TradeAllowanceChargeTypeXml {
        const { success, data } = ZTradeAllowanceChargeType.safeParse(value)
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
        return [...xml_allowances, ...xml_charges]
    }

    mapValueToXml(
        value: TradeAllowanceChargeBasisType,
        allowance_false_charge_true: boolean
    ): TradeAllowanceChargeBasisTypeXml {
        const allowanceChargeReasonCodeConverter = allowance_false_charge_true
            ? this.chargeReasonCodeConvereter
            : this.allowanceReasonCodeConverter
        return {
            'ram:ChargeIndicator': this.indicatorTypeConverter.toXML(allowance_false_charge_true),
            'ram:CalculationPercent': value.calculationPercent
                ? this.percentTypeConverter.toXML(value.calculationPercent)
                : undefined,
            'ram:BasisAmount': value.basisAmount ? this.amountTypeConverter.toXML(value.basisAmount) : undefined,
            'ram:ActualAmount': this.amountTypeConverter.toXML(value.actualAmount),
            'ram:ReasonCode': value.reasonCode ? allowanceChargeReasonCodeConverter.toXML(value.reasonCode) : undefined,
            'ram:Reason': value.reason ? this.textTypeConverter.toXML(value.reason) : undefined,
            'ram:CategoryTradeTax': {
                'ram:TypeCode': this.taxTypeCodeConverter.toXML(value.categoryTradeTax.typeCode),
                'ram:CategoryCode': this.taxCategoryCodeConverter.toXML(value.categoryTradeTax.categoryCode),
                'ram:RateApplicablePercent': value.categoryTradeTax.rateApplicablePercent
                    ? this.percentTypeConverter.toXML(value.categoryTradeTax.rateApplicablePercent)
                    : undefined
            }
        }
    }
}
