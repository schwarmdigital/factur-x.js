# Factur-X

[![NPM version](https://img.shields.io/npm/v/factur-x.svg?style=flat-square)](https://www.npmjs.org/package/factur-x)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/schwarmdigital/factur-x.js)

Read and Write Hybrid Invoice Documents (EN 16931 / Factur-X / ZUGFeRD / eRechnung / XRechnung) in Javascript / Typescript.

:construction: This library is heavily under development - contributions are very welcome.

## Usage

```bash
npm install factur-x
```

A Factur-X instance can be created from PDF, XML or an Object and exported to PDF, XML or an Object.

### FacturX.fromPDF

```js
const pdf = await fs.readFile('./e-invoice.pdf')
const doc = await FacturX.fromPDF(pdf)
```

### FacturX.fromXML

```js
const xml = await fs.readFile('./invoice-data.xml', 'utf-8')
const doc = await FacturX.fromXML(xml)
```

### FacturX.fromObject

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

### FacturX.getPDF

```js
const normalInvoice = await fs.readFile('./normal-invoice.pdf')
const hybridInvoice = await doc.getPDF(normalInvoice)

await fs.writeFile('./hybrid-invoice.pdf', hybridInvoice)
```

### FacturX.getXML

```js
const xml = await doc.getXML()
console.log(xml) // "<?xml version="1.0" encoding="UTF-8" ...

await fs.writeFile('./invoice-data.xml', xml)
```

### FacturX.getObject

```js
const obj = await FacturX.getObject()
console.log(obj) // { document: { id: "471102" }, seller: { name: "Lieferant GmbH", ...

await fs.writeFile('./invoice-data.json', JSON.stringify(obj, null, 4))
```
