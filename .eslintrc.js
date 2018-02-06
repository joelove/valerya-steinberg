module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  env: {
    jasmine: true,
    browser: true,
  },
  globals: {
    sinon: false,
  },
  parser: 'babel-eslint',
  rules: {
    'default-case': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-constant-condition': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/extensions': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'comma-dangle': ['error', {
      functions: 'ignore',
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
    }],
  },
};