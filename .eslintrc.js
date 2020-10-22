module.exports = {
  root: true, // Искать конфиг только в корне проекта
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "react/prop-types": 0,
    "@typescript-eslint/no-var-requires": 0, //использование операторов require
    "no-console": 1, //запретить использование `console`
    "no-extra-parens": 1, //запретить ненужные скобки
    "array-callback-return": 1, //применять операторы return в обратных вызовах методов массива
    "default-case": 1, //требовать регистры default в операторах switch
  },
  settings: {
    // общие настройки
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  reportUnusedDisableDirectives: true, //сообщить о неиспользованных eslint-disable комментариях
};
