const baseConfig = require('../../tailwind.config.js');

module.exports = {
  ...baseConfig,
  purge: ['./components/*.{js,jsx,ts,tsx}', './stories/*.{js,jsx,ts,tsx}']
};
