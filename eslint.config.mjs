import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/node_modules", "**/__mocks__*", "**/__tests__*", "**/*.spec.*", "next.config.js"],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
)), {
    plugins: {
        react: fixupPluginRules(react),
        prettier: fixupPluginRules(prettier),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            project: "tsconfig.json",
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {


        "import/prefer-default-export": "off",
        "import/no-cycle": "warn",
        "react/prop-types": "off",
        "react/state-in-constructor": "off",
        "react/static-property-placement": ["error", "static public field"],

        "react/destructuring-assignment": ["warn", "always", {
            ignoreClassFields: true,
        }],

        "no-nested-ternary": "off",
        "@typescript-eslint/restrict-template-expressions": "warn",
        "@typescript-eslint/no-explicit-any": "off",
    },
}];