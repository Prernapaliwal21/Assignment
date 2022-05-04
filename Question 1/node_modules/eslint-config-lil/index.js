module.exports = {
  extends: ['xo-space/esnext', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': ['error'],
    'capitalized-comments': 'off',
    'object-curly-spacing': 'off',
    'new-cap': 'warn',
    camelcase: 'warn',
    radix: 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-await-in-loop': 'warn',
    'object-shorthand': 'error',
    'array-callback-return': 'error',
    'prefer-destructuring': 'error'
  }
};
