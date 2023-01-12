module.exports = {
  parser: "@typescript-eslint/parser",
  // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          // un-ban a type that's banned by default
          "{}": false,
        },
        extendDefaults: true,
      },
    ],
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  overrides: [
    {
      files: ["**/*.tsx"],
    },
  ],
};
