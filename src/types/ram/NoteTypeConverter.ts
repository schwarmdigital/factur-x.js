import { z } from 'zod'

import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'
import { ZTextTypeXml } from '../udt/TextTypeConverter'

export const ZNoteType = z.object({
    content: z.string(),
    subject: z.string().optional()
})

export type NoteType = z.infer<typeof ZNoteType>

export const ZNoteTypeXml = z.object({
    'ram:Content': ZTextTypeXml,
    'ram:SubjectCode': ZTextTypeXml.optional()
})

export type NoteTypeXml = z.infer<typeof ZNoteTypeXml>

export class NoteTypeConverter extends BaseTypeConverter<NoteType> {
    fromXML(xml: NoteTypeXml) {
        const content = xml['ram:Content']['#text']
        if (!content) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new NoteTypeConverter({
            content,
            subject: xml['ram:SubjectCode']?.['#text']
        }) as this // cast to this
    }

    toXML(): NoteTypeXml {
        if (!this.value?.content) {
            throw new TypeConverterError('NO_VALUE')
        }

        const xml: NoteTypeXml = {
            'ram:Content': {
                '#text': this.value.content
            }
        }

        if (this.value.subject) {
            xml['ram:SubjectCode'] = {
                '#text': this.value.subject
            }
        }

        return xml
    }
}
