module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  globals: {
    module: 'writable',
    require: 'readonly',
    process: 'readonly',
    exports: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-unused-vars': ['error', { vars: 'local', args: 'after-used', ignoreRestSiblings: false }],
  },
  ignorePatterns: ['./.eslintrc.js', './node_modules/*', './deployment/node_modules/*', './web-ui/web-app/node_modules/*'],
};
