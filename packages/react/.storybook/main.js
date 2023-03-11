const path = require('path');
const postcss = require('postcss');

const stories = ['../stories/**/*.@(tsx|mdx|jsx)'];

const framework = '@storybook/react';

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
      cssLoaderOptions: {
        // When you have splitted your css over multiple files
        // and use @import('./other-styles.css')
        importLoaders: 1
      },
      postcssLoaderOptions: {
        // When using postCSS 8
        implementation: postcss
      }
    }
  }
];

// webpack final
const webpackFinal = async config => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@/types': path.resolve(__dirname, '../types'),
    '@/components': path.resolve(__dirname, '../components'),
    '@/themes': path.resolve(__dirname, '../themes'),
    '@/utils': path.resolve(__dirname, '../utils')
  };
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

module.exports = { stories, framework, core, addons, webpackFinal };
