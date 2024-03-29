import { render } from '@testing-library/react';
import React from 'react';

import Message from '../message';
import { MessageProps } from '../message.types';

describe('Test Message', () => {
  let props: MessageProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Message {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('message');
    expect(component.textContent).toBe('harvey was here');
  });
});
