import { Converter } from '../convert.js'
import { type BasicWithoutLinesProfile, ZBasicWithoutLinesProfile } from './BasicWithoutLinesProfile.js'
import { type BasicWithoutLinesProfileXml, ZBasicWithoutLinesProfileXml } from './BasicWithoutLinesProfileXml.js'
import mapping from './mapping.js'

export class BasicWithoutLinesProfileConverter extends Converter<
    BasicWithoutLinesProfile,
    BasicWithoutLinesProfileXml
> {
    map = mapping
    protected isProperObjectScheme(object: any): object is BasicWithoutLinesProfile {
        const result = ZBasicWithoutLinesProfile.safeParse(object)

        if (!result.success) {
            console.log(result.error.errors)
        }
        return result.success
    }

    protected isProperXMLScheme(xmlObject: any): xmlObject is BasicWithoutLinesProfileXml {
        const result = ZBasicWithoutLinesProfileXml.safeParse(xmlObject)

        if (!result.success) {
            console.log(result.error.errors)
        }
        return result.success
    }
}
