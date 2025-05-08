import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:import/recommended",
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-ins (e.g., fs, path)
            "external", // External libraries (e.g., react, lodash)
            "internal", // Internal imports (e.g., utils, config)
            "parent", // Parent imports (e.g., ../file)
            "sibling", // Sibling imports (e.g., ./file)
            "index", // Index file imports (e.g., ./)
          ],
          "newlines-between": "always", // Enforce newlines between groups
          alphabetize: { order: "asc", caseInsensitive: true }, // Sort alphabetically
        },
      ],
    },
  }
);
