module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@spartanbio',
  ],
  overrides: [
    {
      files: [
        '**/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        '@spartanbio',
      ],
      rules: {
        'no-useless-constructor': 'off',
        semi: ['error', 'always'],
        '@typescript-eslint/no-useless-constructor': 'error',
      },
    },
    {
      files: [
        '**/*.d.ts',
      ],
      rules: {
        'max-len': 'off',
      },
    },
  ],
};
