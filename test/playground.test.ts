import { printNode, zodToTs } from 'zod-to-ts'

import { ZBasicWithoutLinesProfile } from '../src/profiles/basicwithoutlines/BasicWithoutLinesProfile'
import { ZBasicWithoutLinesProfileXml } from '../src/profiles/basicwithoutlines/BasicWithoutLinesProfileXml'

// This is just a testcase which helps me printing out the ts-objects which are built from the zod types

describe('playground', () => {
    it('shall run', () => {
        const identifier = 'User'
        const { node } = zodToTs(ZBasicWithoutLinesProfile, identifier)
        const nodeString = printNode(node)
        //console.log(nodeString)

        const identifier2 = 'bas'
        const { node: node2 } = zodToTs(ZBasicWithoutLinesProfileXml, identifier2)
        const nodeString2 = printNode(node2)
        // console.log(nodeString2)
    })
})
