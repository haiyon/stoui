/* eslint-disable */
import { firstUpperCase } from '../helper';

export default componentName => ({
  type: 'stories',
  content: `import React from 'react';
import ${firstUpperCase(componentName)} from '@/components/${componentName}/${componentName}';

export default {
  title: '${firstUpperCase(componentName)}',
  component: ${firstUpperCase(componentName)}
};

export const WithBar = () => <${firstUpperCase(componentName)} foo="bar" />;

export const WithBaz = () => <${firstUpperCase(componentName)} foo="baz" />;
`,
  extension: '.tsx'
});
