module.exports = {
  extends: ['plugin:hydrogen/recommended', 'plugin:hydrogen/typescript', '@sanity/eslint-config-studio'],
  rules: {
    'node/no-missing-import': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
};