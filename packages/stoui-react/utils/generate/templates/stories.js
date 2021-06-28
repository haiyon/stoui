/* eslint-disable */
const { firstUpperCase } = require('../helper');
module.exports = componentName => ({
  type: 'stories',
  content: `import React from 'react';
import ${firstUpperCase(componentName)} from '@stoui/${componentName}/${componentName}';

export default {
  title: '${firstUpperCase(componentName)}',
  component: ${firstUpperCase(componentName)}
};

export const WithBar = () => <${firstUpperCase(componentName)} foo="bar" />;

export const WithBaz = () => <${firstUpperCase(componentName)} foo="baz" />;
`,
  extension: '.tsx'
});
