module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    "react",
  ],
  rules: {
    curly: 'error',
    "semi": [2, "always"],
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'no-proto': 'off',
  },
};