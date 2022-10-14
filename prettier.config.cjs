/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  jsxSingleQuote: true,
  singleQuote: true,
  singleAttributePerLine: true,
  endOfLine: 'auto',
  tabWidth: 2,
  semi: false,
  trailingComma: 'es5',
  bracketSpacing: true,
}
