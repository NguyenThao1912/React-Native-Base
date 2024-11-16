import pluginJs from '@eslint/js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    ignores: ['node_modules/*'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-var': 0,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
    }
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
