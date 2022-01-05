import { render } from '@testing-library/react';
import React from 'react';

import Select from '../select';
import { SelectProps } from '../select.types';

describe('Test Select', () => {
  let props: SelectProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Select {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('select');
    expect(component).toHaveTextContent('harvey was here');
  });
});
