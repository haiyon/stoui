import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../loading';
import { LoadingProps } from '../loading.types';

describe('Test Loading', () => {
  let props: LoadingProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Loading {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('loading');
    expect(component).toHaveTextContent('harvey was here');
  });
});
