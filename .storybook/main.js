const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.tsx', '../stories/**/*.tsx'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@stoui': path.resolve(__dirname, '../components'),
      '@/util': path.resolve(__dirname, '../util')
    };

    config.module.rules.push({
      test: /\.(css|sass|scss|less)$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      include: path.resolve(__dirname, '../')
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
