import React from 'react';
import { render } from '@testing-library/react';

import Layout from '../layout';
import { LayoutProps } from '../layout.types';

describe('Test Layout', () => {
  let props: LayoutProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Layout {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('layout');
    expect(component).toHaveTextContent('harvey was here');
  });
});
