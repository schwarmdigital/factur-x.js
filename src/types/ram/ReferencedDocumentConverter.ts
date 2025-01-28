import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { DateTimeTypeConverter_qdt, ZDateTimeTypeXml_qdt } from '../qdt/DateTimeTypeConverter'
import { ZDateTimeType } from '../udt/DateTimeTypeConverter'
import { ZIdType } from '../udt/IdTypeConverter'
import { ZTextTypeXml } from '../udt/TextTypeConverter'
import { IdTypeConverter } from '../xs/TokenConverter'

export const ZReferencedDocumentType = z.object({
    documentId: ZIdType,
    issueDate: ZDateTimeType.optional()
})

export type ReferencedDocumentType = z.infer<typeof ZReferencedDocumentType>

export const ZReferencedDocumentTypeXml = z.object({
    'ram:IssuerAssignedID': ZTextTypeXml,
    'ram:FormattedIssueDateTime': ZDateTimeTypeXml_qdt.optional()
})

export type ReferencedDocumentTypeXml = z.infer<typeof ZReferencedDocumentTypeXml>

export class ReferencedDocumentTypeConverter extends BaseTypeConverter<
    ReferencedDocumentType,
    ReferencedDocumentTypeXml
> {
    idTypeConverter = new IdTypeConverter()
    dateTimeTypeConverter = new DateTimeTypeConverter_qdt()
    toValue(xml: ReferencedDocumentTypeXml): ReferencedDocumentType {
        const { success } = ZReferencedDocumentTypeXml.safeParse(xml)
        if (!success) {
            throw new TypeConverterError('INVALID_XML')
        }
        return {
            documentId: this.idTypeConverter.toValue(xml['ram:IssuerAssignedID']),
            issueDate: xml['ram:FormattedIssueDateTime']
                ? this.dateTimeTypeConverter.toValue(xml['ram:FormattedIssueDateTime'])
                : undefined
        }
    }

    toXML(value: ReferencedDocumentType): ReferencedDocumentTypeXml {
        const { success, data } = ZReferencedDocumentType.safeParse(value)
        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return {
            'ram:IssuerAssignedID': this.idTypeConverter.toXML(data.documentId),
            'ram:FormattedIssueDateTime': data.issueDate ? this.dateTimeTypeConverter.toXML(data.issueDate) : undefined
        }
    }
}
