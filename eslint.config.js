import eslint from '@eslint/js'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
    {
        rules: {
            // warn instead of error on explicit any
            '@typescript-eslint/no-explicit-any': 'warn',
            // Allow unused variables starting with an underscore
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_[^_].*$|^_$',
                    varsIgnorePattern: '^_[^_].*$|^_$',
                    caughtErrorsIgnorePattern: '^_[^_].*$|^_$'
                }
            ],
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto'
                }
            ]
        }
    },
    pluginPrettier
)
