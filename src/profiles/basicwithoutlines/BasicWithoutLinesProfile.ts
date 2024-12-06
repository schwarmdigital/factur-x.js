import type { DeepMerge } from '../../types/helpers.js'
import type { NoteType } from '../../types/ram/index.js'
import type { IDType, IDTypeWithScheme } from '../../types/udt/index.js'
import type { MinimumProfile } from '../minimum/index.js'

export interface BasicWithoutLinesProfileAdditions {
    meta: {
        guidelineSpecifiedDocumentContextParameter: 'urn:factur-x.eu:1p0:basicwl'
    }
    notes?: NoteType[]
    seller: MinimumProfile['seller'] & {
        id?: IDType
        globalId?: IDTypeWithScheme
        specifiedLegalOrganizationName?: string
    }
    buyer: MinimumProfile['buyer'] & {
        id?: IDType
        globalId?: IDTypeWithScheme
        specifiedLegalOrganizationName?: string
    }
}

/** @see {isBasicWithoutLinesProfile} ts-auto-guard:type-guard */
export type BasicWithoutLinesProfile = DeepMerge<MinimumProfile, BasicWithoutLinesProfileAdditions>
