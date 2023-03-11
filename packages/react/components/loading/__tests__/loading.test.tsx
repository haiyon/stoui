import { render } from '@testing-library/react';
import React from 'react';

import Loading from '../loading';
import { LoadingProps } from '../loading.types';

describe('Test Loading', () => {
  let props: LoadingProps;

  beforeEach(() => {
    props = {
      active: true
    };
  });

  const renderComponent = () => render(<Loading {...props} />);

  it('class should include active', () => {
    props.active = true;
    const { getByTestId } = renderComponent();
    const component = getByTestId('loading');
    expect(component.className).toMatch('active');
  });
});
