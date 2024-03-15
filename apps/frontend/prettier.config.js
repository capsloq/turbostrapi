
/** @type {import("prettier").Config} */
module.exports = {
    plugins: ["prettier-plugin-packagejson", "prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
    /**
     * Fixes prettier formatting for tsconfig.json files with trailing commas.
     * @todo Remove this fix after https://github.com/prettier/prettier/issues/15956 is resolved.
     */
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    pluginSearchDirs: false,
    importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
    // overrides: [
    //     {
    //         files: ["tsconfig.json"],
    //         options: {
    //             trailingComma: "none",
    //         },
    //     },
    // ],
};
