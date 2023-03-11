import { render } from '@testing-library/react';
import React from 'react';

import Divider from '../divider';
import { DividerProps } from '../divider.types';

describe('Test Divider', () => {
  let props: DividerProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Divider {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('divider');
    expect(component.textContent).toBe('harvey was here');
  });
});
