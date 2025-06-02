import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS y TS
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    languageOptions: {
      globals: globals.browser,
    },
    rules: js.configs.recommended.rules,
  },

  // TypeScript
  ...tseslint.configs.recommended,

  // Astro
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      astro,
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },
]);
