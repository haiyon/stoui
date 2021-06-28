import { render } from '@testing-library/react';
import React from 'react';

import Badge from '../badge';
import { BadgeProps } from '../badge.types';

describe('Test Badge', () => {
  let props: BadgeProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Badge {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('badge');
    expect(component).toHaveTextContent('harvey was here');
  });
});
