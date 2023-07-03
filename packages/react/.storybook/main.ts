import { resolve } from 'path';
import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-dark-mode',
    '@storybook/addon-storysource',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true
      }
    }
  ],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        'process.env': {}
      },
      resolve: {
        alias: [
          {
            find: '@/components',
            replacement: resolve(__dirname, '../components')
          },
          {
            find: '@/themes',
            replacement: resolve(__dirname, '../themes')
          },
          {
            find: '@/types',
            replacement: resolve(__dirname, '../types')
          },
          {
            find: '@/utils',
            replacement: resolve(__dirname, '../utils')
          }
        ]
      }
    };
  },
  features: {
    storyStoreV7: false
  }
};
export default config;
