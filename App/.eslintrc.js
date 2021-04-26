module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    'no-plusplus': 'off',
    'no-continue': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'arrow-parens': 'off',
    'no-console': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-multiple-empty-lines': 'off',
    'react/destructuring-assignment': 'off',

  },

};
