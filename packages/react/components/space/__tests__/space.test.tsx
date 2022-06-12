import { render } from '@testing-library/react';
import React from 'react';

import Space from '../space';
import { SpaceProps } from '../space.types';

describe('Test Space', () => {
  let props: SpaceProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Space {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('space');
    expect(component.textContent).toBe('harvey was here');
  });
});
