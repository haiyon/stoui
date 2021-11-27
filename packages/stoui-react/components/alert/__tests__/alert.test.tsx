import { render } from '@testing-library/react';
import React from 'react';

import Alert from '../alert';
import { AlertProps } from '../alert.types';

describe('Test Alert', () => {
  let props: AlertProps;

  beforeEach(() => {
    // props = {};
  });

  const renderComponent = () => render(<Alert {...props} />);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('alert');
    expect(component).toHaveTextContent('harvey was here');
  });
});
