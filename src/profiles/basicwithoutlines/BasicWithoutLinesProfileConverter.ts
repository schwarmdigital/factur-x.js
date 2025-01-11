import { Converter } from '../convert.js'
import type { BasicWithoutLinesProfile } from './BasicWithoutLinesProfile.js'
import type { BasicWithoutLinesProfileXml } from './BasicWithoutLinesProfileXml.js'
import mapping from './mapping.js'

export class BasicWithoutLinesProfileConverter extends Converter<
    BasicWithoutLinesProfile,
    BasicWithoutLinesProfileXml
> {
    map = mapping
}
