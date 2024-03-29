import { render } from '@testing-library/react';
import React from 'react';

import Cascader from '../cascader';
import { CascaderProps } from '../cascader.types';

describe('Test Cascader', () => {
  let props: CascaderProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Cascader {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('cascader');
    expect(component.textContent).toBe('harvey was here');
  });
});
