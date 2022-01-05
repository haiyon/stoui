import { render } from '@testing-library/react';
import React from 'react';

import Checkbox from '../checkbox';
import { CheckboxProps } from '../checkbox.types';

describe('Test Checkbox', () => {
  let props: CheckboxProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Checkbox {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('checkbox');
    expect(component).toHaveTextContent('harvey was here');
  });
});
