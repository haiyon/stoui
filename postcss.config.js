// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  prefix: 'sto-',
  important: true,
  plugins: {
    'postcss-preset-env': {
      stage: 1
    },
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {}
  }
};
