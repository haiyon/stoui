/* eslint-disable */
const { firstUpperCase } = require('../helper');
module.exports = (componentName) => ({
  type: 'component',
  content: `export interface ${firstUpperCase(componentName)}Props {
  foo: string;
}
`,
  extension: '.types.ts'
});
