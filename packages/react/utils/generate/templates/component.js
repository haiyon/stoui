const { firstUpperCase } = require('../helper');
module.exports = componentName => ({
  type: 'component',
  content: `import React, { FunctionComponent } from 'react';
import { ${firstUpperCase(componentName)}Props } from './${componentName}.types';

import './${componentName}.css';

const ${firstUpperCase(componentName)}: FunctionComponent<${firstUpperCase(componentName)}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className="foo-bar">
    {foo}
  </div>
);

export default ${firstUpperCase(componentName)};
`,
  extension: '.tsx'
});
