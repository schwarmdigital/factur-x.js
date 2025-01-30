import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { SUBJECT_CODES } from '../codes'
import { ZTextTypeXml } from '../udt/TextTypeConverter'

export const ZNoteType = z.object({
    content: z.string(),
    subject: z.nativeEnum(SUBJECT_CODES).optional()
})

export type NoteType = z.infer<typeof ZNoteType>

export const ZNoteTypeXml = z.object({
    'ram:Content': ZTextTypeXml,
    'ram:SubjectCode': ZTextTypeXml.optional()
})

export type NoteTypeXml = z.infer<typeof ZNoteTypeXml>

export class NoteTypeConverter extends BaseTypeConverter<NoteType, NoteTypeXml> {
    _toValue(xml: NoteTypeXml) {
        const content = xml['ram:Content']['#text']
        if (!content) {
            throw new TypeConverterError('INVALID_XML')
        }

        const value = {
            content,
            subject: xml['ram:SubjectCode']?.['#text']
        }

        const { success, data } = ZNoteType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        return data
    }

    _toXML(value: NoteType): NoteTypeXml {
        const { success, data } = ZNoteType.safeParse(value)

        if (!success) {
            throw new TypeConverterError('INVALID_VALUE')
        }

        const xml: NoteTypeXml = {
            'ram:Content': {
                '#text': data.content
            }
        }

        if (data.subject) {
            xml['ram:SubjectCode'] = {
                '#text': data.subject
            }
        }

        return xml
    }
}
