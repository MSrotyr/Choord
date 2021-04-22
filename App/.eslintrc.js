module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'react/no-unescaped-entities': 0,
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'react/prop-types': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
  },

};
