module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  ignorePatterns: [
    "!.eslintrc.*js",
    "!.prettierrc.js",
    "!.nuxt",
    "dist",
    "node_modules",
  ],
  rules: {},
};
