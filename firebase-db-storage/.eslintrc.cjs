module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 권장 규칙 모음(패키지)
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  // 개별 규칙 (사용자 정의)
  rules: {
    'no-unused-vars': 'warn',
    'react/no-unknown-property': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-has-content': [
      'warn',
      {
        components: ['Link'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
      },
    ],
  },
};
