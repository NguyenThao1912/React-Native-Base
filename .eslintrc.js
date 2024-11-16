// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['simple-import-sort', '@typescript-eslint', 'prettier'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  }
}
