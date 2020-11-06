import React from 'react';
import { render } from '@testing-library/react';

import Tooltip from '../tooltip';
import { TooltipProps } from '../tooltip.types';

describe('Test Tooltip', () => {
  let props: TooltipProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Tooltip {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('tooltip');
    expect(component).toHaveTextContent('harvey was here');
  });
});
