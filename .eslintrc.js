module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
