/* eslint-disable */
import { firstUpperCase } from '../helper';

export default componentName => ({
  type: 'component',
  content: `import React from 'react';
import { ${firstUpperCase(componentName)}Props } from './${componentName}.types';

import './${componentName}.css';

const ${firstUpperCase(componentName)}: React.FC<${firstUpperCase(componentName)}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className="foo-bar">
    {foo}
  </div>
);

export default ${firstUpperCase(componentName)};
`,
  extension: '.tsx'
});
