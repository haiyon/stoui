import { render } from '@testing-library/react';
import React from 'react';

import Breadcrumb from '../breadcrumb';
import { BreadcrumbProps } from '../breadcrumb.types';

describe('Test Breadcrumb', () => {
  let props: BreadcrumbProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Breadcrumb {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('breadcrumb');
    expect(component).toHaveTextContent('harvey was here');
  });
});
