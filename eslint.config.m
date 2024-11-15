import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...tseslint,
    pluginReact,
    pluginJs,
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ['node_modules/*'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-var': 0,
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    }
  }
];