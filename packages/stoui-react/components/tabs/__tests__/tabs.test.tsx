import { render } from '@testing-library/react';
import React from 'react';

import Tabs from '../tabs';
import { TabsProps } from '../tabs.types';

describe('Test Tabs', () => {
  let props: TabsProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Tabs {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('tabs');
    expect(component).toHaveTextContent('harvey was here');
  });
});
