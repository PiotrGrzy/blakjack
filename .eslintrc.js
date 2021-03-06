module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'linebreak-style': 'off',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
      },
    ],
  },
};
