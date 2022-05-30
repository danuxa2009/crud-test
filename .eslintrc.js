module.exports = {

  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': ['error', { multiline: true, minProperties: 5 }],
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', { code: 120 }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
