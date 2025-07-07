import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    ignores: ["node_modules", "dist", "build", "coverage"],
  },
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        React: true,
        document: true,
        window: true,
        fetch: true,
        URLSearchParams: true,
        localStorage: true,
        console: true,
        setTimeout: true,
        setInterval: true,
        module: true,
        HTMLInputElement: true,
        navigator: true
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // TypeScript
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-unused-vars": "off",

      // React
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/order": "off",

      // Marca el uso de console como warning
      "no-console": ["warn", { "allow": ["warn", "error"] }],
    },
  },
];
