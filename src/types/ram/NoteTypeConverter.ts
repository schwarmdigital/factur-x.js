import { BaseTypeConverter, TypeConverterError } from '../BaseTypeConverter'

export interface NoteType {
    content: string
    subject?: string
}

export interface NoteTypeXML {
    'ram:Content': {
        '#text': string
    }
    'ram:SubjectCode'?: {
        '#text': string
    }
}

export class NoteTypeConverter extends BaseTypeConverter<NoteType> {
    fromXML(xml: NoteTypeXML) {
        const content = xml['ram:Content']['#text']
        if (!content) {
            throw new TypeConverterError('INVALID_XML')
        }

        return new NoteTypeConverter({
            content,
            subject: xml['ram:SubjectCode']?.['#text']
        }) as this // cast to this
    }

    toXML(): NoteTypeXML {
        if (!this.value?.content) {
            throw new TypeConverterError('NO_VALUE')
        }

        const xml: NoteTypeXML = {
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
