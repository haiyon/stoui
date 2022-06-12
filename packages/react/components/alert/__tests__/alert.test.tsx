import { render } from '@testing-library/react';
import React from 'react';

import Alert from '../alert';
import { AlertProps } from '../alert.types';

describe('Test Alert', () => {
  let props: AlertProps;

  beforeEach(() => {
    props = {
      title: 'alert testing'
    };
  });

  const renderComponent = () => render(<Alert {...props} />);

  it('should render foo text correctly', () => {
    props.children = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('alert');
    expect(component.textContent).toBe('harvey was here');
  });
});
