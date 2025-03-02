import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../../BaseTypeConverter'
import { CodeTypeConverter } from '../../CodeTypeConverter'
import { ALLOWANCE_REASONS_CODES, CHARGE_REASONS_CODES, TAX_CATEGORY_CODES, TAX_TYPE_CODE } from '../../codes'
import { AmountTypeConverter } from '../../udt/AmountTypeConverter'
import { IndicatorTypeConverter } from '../../udt/IndicatorTypeConverter'
import { PercentTypeConverter } from '../../udt/PercentTypeConverter'
import { TextTypeConverter } from '../../udt/TextTypeConverter'
import {
    BasicTradeProductType,
    BasicTradeProductTypeXml,
    ZBasicTradeProductType,
    ZBasicTradeProductTypeXml
} from './BasicTradeProductType'

type allowedValueTypes = BasicTradeProductType
type allowedXmlTypes = BasicTradeProductTypeXml

export class TradeProductTypeConverter<
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

        const value = this.mapXmlToValue(xml)

        const { success: successValue, data } = this.valueSchema.safeParse(value)

        if (!successValue) {
            throw new TypeConverterError('INVALID_XML')
        }

        return data as ValueType
    }

    mapXmlToValue(xml: any) {
        return {
            calculationPercent: xml['ram:CalculationPercent']
                ? this.percentTypeConverter.toValue(xml['ram:CalculationPercent'])
                : undefined,
            basisAmount: xml['ram:BasisAmount'] ? this.amountTypeConverter.toValue(xml['ram:BasisAmount']) : undefined,
            actualAmount: xml['ram:ActualAmount']
                ? this.amountTypeConverter.toValue(xml['ram:ActualAmount'])
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

        const xml = this.mapValueToXml(data)

        const { success: xmlSuccess, data: xmlData } = this.xmlSchema.safeParse(xml)
        if (!xmlSuccess) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return xmlData as XmlType
    }

    mapValueToXml(value: any) {
        return {
            'ram:CalculationPercent':
                value.calculationPercent != undefined
                    ? this.percentTypeConverter.toXML(value.calculationPercent)
                    : undefined,
            'ram:BasisAmount':
                value.basisAmount != undefined ? this.amountTypeConverter.toXML(value.basisAmount) : undefined,
            'ram:ActualAmount': this.amountTypeConverter.toXML(value.actualAmount),
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

    public static basic(): TradeProductTypeConverter<BasicTradeProductType, BasicTradeProductTypeXml> {
        return new TradeProductTypeConverter(ZBasicTradeProductType, ZBasicTradeProductTypeXml)
    }
}
