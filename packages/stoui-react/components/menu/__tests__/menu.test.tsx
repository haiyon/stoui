import { render } from '@testing-library/react';
import React from 'react';

import Menu from '../menu';
import { MenuProps } from '../menu.types';

describe('Test Menu', () => {
  let props: MenuProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Menu {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('menu');
    expect(component).toHaveTextContent('harvey was here');
  });
});
