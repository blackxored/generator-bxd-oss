module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  env: {
    jest: true,
  },
  rules: {
    'arrow-parens': 0, // does not work with Flow generic types.
    'global-require': 0, // used by react-native
    'no-confusing-arrow': 0, // this rule is confusing
    'no-duplicate-imports': 0, // handled by eslint-plugin-import
    'no-underscore-dangle': 0,
  },
};
