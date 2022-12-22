module.exports = {
  ...require('@shopify/prettier-config'),
  semi: false,
  printWidth: 100,
  plugins: [
    require('prettier-plugin-tailwindcss'),
  ],
};
