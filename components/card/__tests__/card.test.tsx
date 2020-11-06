import React from 'react';
import { render } from '@testing-library/react';

import Card from '../card';
import { CardProps } from '../card.types';

describe('Test Card', () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('card');
    expect(component).toHaveTextContent('harvey was here');
  });
});
