# factur-x

[![NPM version](https://img.shields.io/npm/v/factur-x.svg?style=flat-square)](https://www.npmjs.org/package/factur-x)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/schwarmdigital/factur-x.js)

Read and Write Hybrid Invoice Documents (EN 16931 / Factur-X / ZUGFeRD / eRechnung / XRechnung) in Javascript / Typescript.

:construction: This library is heavily under development - contributions are very welcome.

## Quick Start

```bash
npm install factur-x
```

Reading an existing invoice document:

```js
import { FacturX } from 'factur-x'
import fs from 'node:fs/promises'

const pdf = await fs.readFile('./e-invoice.pdf')

const doc = await FacturX.fromPDF(pdf)

const obj = await doc.getObject() // { document: { id: "471102" }, seller: { name: "Lieferant GmbH", ...
const xml = await doc.getXML() // <?xml version="1.0" encoding="UTF-8" ...
```

Creating a hybrid invoice document from data and an existing invoice pdf:

```js
import { FacturX } from 'factur-x'
import fs from 'node:fs/promises'

const doc = await FacturX.fromObject({
    document: {
        id: '471102'
    },
    seller: {
        name: 'Lieferant GmbH'
    }
    // ...
})

const classicInvoice = await fs.readFile('./classic-invoice.pdf')

const eInvoice = await doc.getPDF(classicInvoice)

await fs.writeFile('./e-invoice.pdf', eInvoice)
```

## Factur-X API

A Factur-X instance can be created via PDF, XML or an Object.

```js
const pdf = await fs.readFile('./e-invoice.pdf')
const doc = await FacturX.fromPDF(pdf)
```

```js
const xml = await fs.readFile('./invoice-data.xml', { encoding: 'utf-8' })
const doc = await FacturX.fromXML(xml)
```

```js
const doc = await FacturX.fromObject({
    document: {
        id: '471102'
    },
    seller: {
        name: 'Lieferant GmbH'
    }
    // ...
})
```

A PDF, XML or Object can then be retrieved from the Factur-X instance.

```js
const classicInvoice = await fs.readFile('./classic-invoice.pdf')
const eInvoice = await doc.getPDF(classicInvoice)

await fs.writeFile('./e-invoice.pdf', eInvoice)
```

```js
const xml = await doc.getXML()
await fs.writeFile('./invoice-data.xml', xml)
```

```js
const obj = await FacturX.getObject()
console.log(obj)

await fs.writeFile('./invoice-data.json', JSON.stringify(obj, null, 4))
```
