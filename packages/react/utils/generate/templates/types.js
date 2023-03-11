/* eslint-disable */
import { firstUpperCase } from '../helper';

export default componentName => ({
  type: 'component',
  content: `export interface ${firstUpperCase(componentName)}Props {
  foo: string;
}
`,
  extension: '.types.ts'
});
