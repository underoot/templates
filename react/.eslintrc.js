module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 0,
    'import/extensions': [2, 'never'],
    'import/no-default-export': 2,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
    {
      files: ['*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
  env: {
    browser: true,
  },
};
