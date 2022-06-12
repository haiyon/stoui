const defaultTheme = require('tailwindcss/defaultTheme');

const content = ['./components/*.{js,jsx,ts,tsx}', './stories/*.{js,jsx,ts,tsx}'];

const plugins = [];

const theme = {
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    }
  }
};

const variants = {
  extend: {}
};

module.exports = { content, theme, variants, plugins };
