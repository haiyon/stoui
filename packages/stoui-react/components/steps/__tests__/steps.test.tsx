import { render } from '@testing-library/react';
import React from 'react';

import Steps from '../steps';
import { StepsProps } from '../steps.types';

describe('Test Steps', () => {
  let props: StepsProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Steps {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('steps');
    expect(component).toHaveTextContent('harvey was here');
  });
});
