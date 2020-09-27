module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
        "react/jsx-filename-extension": 0,
        "react/state-in-constructor": 0,
        "react/forbid-prop-types": 0,
        "no-console": 0,
        "react/no-array-index-key": 0,
        "react/prop-types": 0,
        "react/no-nested-ternary": 0
       },
  };
