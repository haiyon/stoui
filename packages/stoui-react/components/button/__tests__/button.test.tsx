import { render } from '@testing-library/react';
import React from 'react';

import Button from '../button';
import { ButtonProps } from '../button.types';

describe('Test Button', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      type: 'primary'
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('button');
    expect(component).toHaveClass('button');
  });
});
