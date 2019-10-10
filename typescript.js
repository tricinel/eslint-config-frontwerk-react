module.exports = {
  extends: ['./index'].map(require.resolve),
  rules: {
    // Allow props without PropTypes because we use TypeScript
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

    // Require the .jsx or .tsx extension for files that have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }]
  }
};
