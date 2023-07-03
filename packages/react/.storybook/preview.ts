import 'tailwindcss/tailwind.css';
import { themes } from '@storybook/theming';
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.normal }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    dependencies: {
      withStoriesOnly: true,
      hideEmpty: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
