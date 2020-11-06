import React from 'react';
import { render } from '@testing-library/react';

import Input from '../input';
import { InputProps } from '../input.types';

describe('Test Input', () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      size: 'medium'
    };
  });

  const renderComponent = () => render(<Input {...props} />);

  it('should render correctly', () => {
    props.size = 'medium';
    const { getByTestId } = renderComponent();
    const component = getByTestId('input');
    expect(component).toHaveClass('input');
  });
});
