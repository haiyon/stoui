import { themes } from '@storybook/theming';

export const parameters = {
  layout: 'centered',
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal }
  },
  actions: { argTypesRegex: '^on[A-Z].*' }
};
