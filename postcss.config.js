module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'autoprefixer': {
      grid: false,
      remove: true,
      supports: true,
    },
    'cssnano': {},
    // 'postcss-reporter': require('postcss-reporter')({ clearMessages: true }),
  },
};