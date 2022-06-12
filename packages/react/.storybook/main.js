const path = require('path');

const stories = ['../stories/**/*.@(tsx|mdx|jsx)'];

const core = {
  builder: 'webpack5'
};

// Add any Storybook addons you want here: https://storybook.js.org/addons/
const addons = [
  '@storybook/addon-a11y',
  '@storybook/addon-links',
  'storybook-dark-mode',
  '@storybook/addon-essentials',
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: { implementation: require('postcss') }
    }
  }
];

// webpack final
const webpackFinal = async config => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@/components': path.resolve(__dirname, '../components'),
    '@/utils': path.resolve(__dirname, '../utils'),
    '@/theme': path.resolve(__dirname, '../theme')
  };

  // config.module.rules.push({
  //   test: /\.(css)$/,
  //   use: [{
  //     loader: 'postcss-loader',
  //     options: {
  //       postcssOptions: {
  //         plugins: [
  //           require('tailwindcss'),
  //           require('autoprefixer')
  //         ]
  //       }
  //     }
  //   }],
  //   include: path.resolve(__dirname, '../')
  // });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};

module.exports = {
  stories,
  core,
  addons,
  webpackFinal
};
