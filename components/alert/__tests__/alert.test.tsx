import React from 'react';
import { render } from '@testing-library/react';

import Alert from '../alert';
import { AlertProps } from '../alert.types';

describe('Test Alert', () => {
  let props: AlertProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Alert {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('alert');
    expect(component).toHaveTextContent('harvey was here');
  });
});
