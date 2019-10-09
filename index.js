module.exports = {
  extends: [
    'eslint-config-frontwerk',
    './rules/react',
    './rules/jsx',
    './plugins/react-a11y',
    './plugins/react-hooks'
  ].map(require.resolve),
  rules: {}
};
