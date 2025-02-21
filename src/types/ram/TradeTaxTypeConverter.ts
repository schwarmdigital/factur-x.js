import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { CodeTypeConverter, ZCodeType } from '../CodeTypeConverter'
import { EXEMPTION_REASON_CODES, TAX_CATEGORY_CODES, TAX_TYPE_CODE, TIME_REFERENCE_CODES } from '../codes'
import { AmountTypeConverter, ZAmountType, ZAmountTypeXml } from '../udt/AmountTypeConverter'
import { PercentTypeConverter, ZPercentType, ZPercentTypeXml } from '../udt/PercentTypeConverter'
import { TextTypeConverter, ZTextType, ZTextTypeXml } from '../udt/TextTypeConverter'

export const ZTradeTaxType = z.object({
    calculatedAmount: ZAmountType,
    typeCode: ZCodeType(TAX_TYPE_CODE),
    exemptionReason: ZTextType.optional(),
    basisAmount: ZAmountType,
    categoryCode: ZCodeType(TAX_CATEGORY_CODES),
    exemptionReasonCode: ZCodeType(EXEMPTION_REASON_CODES).optional(),
    dueDateTypeCode: ZCodeType(TIME_REFERENCE_CODES).optional(),
    rateApplicablePercent: ZPercentType.optional()
})

export type TradeTaxType = z.infer<typeof ZTradeTaxType>

export const ZTradeTaxTypeXml = z.object({
    'ram:CalculatedAmount': ZAmountTypeXml,
    'ram:TypeCode': ZTextTypeXml,
    'ram:ExemptionReason': ZTextTypeXml.optional(),
    'ram:BasisAmount': ZAmountTypeXml,
    'ram:CategoryCode': ZTextTypeXml,
    'ram:ExemptionReasonCode': ZTextTypeXml.optional(),
    'ram:DueDateTypeCode': ZTextTypeXml.optional(),
    'ram:RateApplicablePercent': ZPercentTypeXml.optional()
})

export type TradeTaxTypeXml = z.infer<typeof ZTradeTaxTypeXml>

export class TradeTaxTypeConverter extends BaseTypeConverter<TradeTaxType, TradeTaxTypeXml> {
    amountTypeConverter = new AmountTypeConverter()
    textTypeConverter = new TextTypeConverter()

    taxTypeCodeConverter = new CodeTypeConverter(TAX_TYPE_CODE)
    taxCategoryCodeConverter = new CodeTypeConverter(TAX_CATEGORY_CODES)
    exemptionReasonCodeConverter = new CodeTypeConverter(EXEMPTION_REASON_CODES)
    timeReferenceCodeConvereter = new CodeTypeConverter(TIME_REFERENCE_CODES)

    percentTypeConverter = new PercentTypeConverter()

    _toValue(xml: TradeTaxTypeXml) {
        const { success: success_xml } = ZTradeTaxTypeXml.safeParse(xml)
        if (!success_xml) {
            throw new TypeConverterError('INVALID_XML')
        }

        const value: TradeTaxType = {
            calculatedAmount: this.amountTypeConverter.toValue(xml['ram:CalculatedAmount']),
            typeCode: this.taxTypeCodeConverter.toValue(xml['ram:TypeCode']),
            exemptionReason: xml['ram:ExemptionReason']
                ? this.textTypeConverter.toValue(xml['ram:ExemptionReason'])
                : undefined,
            basisAmount: this.amountTypeConverter.toValue(xml['ram:BasisAmount']),
            categoryCode: this.taxCategoryCodeConverter.toValue(xml['ram:CategoryCode']),
            exemptionReasonCode: xml['ram:ExemptionReasonCode']
                ? this.exemptionReasonCodeConverter.toValue(xml['ram:ExemptionReasonCode'])
                : undefined,
            dueDateTypeCode: xml['ram:DueDateTypeCode']
                ? this.timeReferenceCodeConvereter.toValue(xml['ram:DueDateTypeCode'])
                : undefined,
            rateApplicablePercent: xml['ram:RateApplicablePercent']
                ? this.percentTypeConverter.toValue(xml['ram:RateApplicablePercent'])
                : undefined
        }
        return value
    }

    _toXML(value: TradeTaxType) {
        const { success, data } = ZTradeTaxType.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const xml = {
            'ram:CalculatedAmount': this.amountTypeConverter.toXML(data.calculatedAmount),
            'ram:TypeCode': this.taxTypeCodeConverter.toXML(data.typeCode),
            'ram:ExemptionReason': data.exemptionReason
                ? this.textTypeConverter.toXML(data.exemptionReason)
                : undefined,
            'ram:BasisAmount': this.amountTypeConverter.toXML(data.basisAmount),
            'ram:CategoryCode': this.taxCategoryCodeConverter.toXML(data.categoryCode),
            'ram:ExemptionReasonCode': data.exemptionReasonCode
                ? this.exemptionReasonCodeConverter.toXML(data.exemptionReasonCode)
                : undefined,
            'ram:DueDateTypeCode': data.dueDateTypeCode
                ? this.timeReferenceCodeConvereter.toXML(data.dueDateTypeCode)
                : undefined,
            'ram:RateApplicablePercent':
                data.rateApplicablePercent != undefined
                    ? this.percentTypeConverter.toXML(data.rateApplicablePercent)
                    : undefined
        }
        return xml
    }
}
