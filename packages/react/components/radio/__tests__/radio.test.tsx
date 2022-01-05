import { render } from '@testing-library/react';
import React from 'react';

import Radio from '../radio';
import { RadioProps } from '../radio.types';

describe('Test Radio', () => {
  let props: RadioProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Radio {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('radio');
    expect(component).toHaveTextContent('harvey was here');
  });
});
