import React from 'react';
import { render } from '@testing-library/react';

import Collapse from '../collapse';
import { CollapseProps } from '../collapse.types';

describe('Test Collapse', () => {
  let props: CollapseProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Collapse {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('collapse');
    expect(component).toHaveTextContent('harvey was here');
  });
});
