const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.tsx', '../stories/**/*.tsx'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
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
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/utils': path.resolve(__dirname, '../utils')
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
