import { render } from '@testing-library/react';
import React from 'react';

import Progress from '../progress';
import { ProgressProps } from '../progress.types';

describe('Test Progress', () => {
  let props: ProgressProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Progress {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('progress');
    expect(component).toHaveTextContent('harvey was here');
  });
});
