import React from 'react';
import { render } from '@testing-library/react';

import Timeline from '../timeline';
import { TimelineProps } from '../timeline.types';

describe('Test Timeline', () => {
  let props: TimelineProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Timeline {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('timeline');
    expect(component).toHaveTextContent('harvey was here');
  });
});
