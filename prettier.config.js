export default {
    semi: false,
    tabWidth: 4,
    trailingComma: 'none',
    singleQuote: true,
    printWidth: 120,
    arrowParens: 'avoid',
    plugins: ['@miller-svt/prettier-plugin-sort-imports', 'prettier-plugin-packagejson'],
    importOrder: ['^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderGroupNamespaceSpecifiers: true
}
