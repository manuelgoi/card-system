module.exports = {
  $schema: "https://json.schemastore.org/prettierrc",
  useTabs: false,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  tailwindConfig: "./tailwind.config.cjs",
  plugins: [require("prettier-plugin-tailwindcss")],
};
