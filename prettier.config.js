// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    plugins: ['prettier-plugin-organize-imports'],
}

export default config
