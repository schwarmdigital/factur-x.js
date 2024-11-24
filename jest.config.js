const jestConfig = {
    preset: 'ts-jest/presets/default-esm',
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1' // Map .js imports to omit the extension
    },
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true // Enable ESM support
            }
        ]
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testEnvironment: 'node'
}

export default jestConfig
