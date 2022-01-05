/* eslint-disable */
const { firstUpperCase } = require('../helper');
module.exports = componentName => ({
  type: 'test',
  content: `import React from 'react';
import { render } from '@testing-library/react';

import ${firstUpperCase(componentName)} from '../${componentName}';
import { ${firstUpperCase(componentName)}Props } from '../${componentName}.types';

describe('Test ${firstUpperCase(componentName)}', () => {
  let props: ${firstUpperCase(componentName)}Props;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<${firstUpperCase(componentName)} {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('${componentName}');
    expect(component).toHaveTextContent('harvey was here');
  });
});
`,
  extension: '.test.tsx'
});
