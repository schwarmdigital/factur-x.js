import { Schema } from 'node-schematron'
import fs from 'node:fs/promises'
import path from 'node:path'
import { printNode, zodToTs } from 'zod-to-ts'

import { ZBasicWithoutLinesProfile } from '../src/profiles/basicwithoutlines/BasicWithoutLinesProfile'
import { ZBasicWithoutLinesProfileXml } from '../src/profiles/basicwithoutlines/BasicWithoutLinesProfileXml'
import './profiles/codeDb/xPathDocumentFunction'

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

describe('factur-x validity check', () => {
    let xml: string
    beforeAll(async () => {
        xml = await fs.readFile('C:/Users/User/Documents/factur-x_bwl.xml', 'utf-8')
    })

    test('Builds Valid XML According to SCHEMATRON Schema', async () => {
        const schematron = (
            await fs.readFile(
                path.join(__dirname, 'profiles', 'schematronSchemes', 'Factur-X_1.0.07_BASICWL.sch'),
                'utf-8'
            )
        ).toString()

        const schema = Schema.fromString(schematron)

        const result = schema.validateString(xml)

        if (result.length > 0) console.log(result.map(res => res.message?.trim()))

        expect(result.length).toBe(0)
    })
})
