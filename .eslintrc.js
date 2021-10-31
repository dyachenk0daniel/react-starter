module.exports = {
  root: true, // Искать конфиг только в корне проекта
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['/node_modules/*', '/build/*'],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 2, //Проверяет правила хуков
    'react-hooks/exhaustive-deps': 1, //Проверяет зависимости эффектов
    'react/prop-types': 0,
    '@typescript-eslint/no-var-requires': 0, //использование операторов require
    '@typescript-eslint/explicit-module-boundary-types': 0, //Требовать явного возврата и типов аргументов
    '@typescript-eslint/ban-types': 0,
    'no-console': 1, //запретить использование `console`
    'no-extra-parens': 1, //запретить ненужные скобки
    'array-callback-return': 1, //применять операторы return в обратных вызовах методов массива
    'default-case': 1, //требовать регистры default в операторах switch
    eqeqeq: 1, // требуют использования `===` и `! ==`
    'no-alert': 1, // запретить использование ʻalert`, `confirm` и` prompt`
    'no-constructor-return': 1, // запретить возвращение значения из конструктора
    'no-else-return': 1, // запретить блоки ʻelse` после операторов return в операторах ʻif`
    'no-empty-function': 1, // запретить пустые функции
    'no-eq-null': 1, // запретить сравнения null без операторов проверки типов
    'no-extra-bind': 1, // запретить ненужные вызовы `.bind ()`
    'no-lone-blocks': 1, //запретить ненужные вложенные блоки
    'no-multi-spaces': 1, //запретить использование нескольких пробелов
    'no-unused-expressions': 1, //запретить неиспользуемые выражения
    'require-await': 2, //запретить async функции, у которых нет выражения await
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    // общие настройки
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  reportUnusedDisableDirectives: true, //сообщить о неиспользованных eslint-disable комментариях
};
