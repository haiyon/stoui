import React from 'react';
import { render } from '@testing-library/react';

import Slider from '../slider';
import { SliderProps } from '../slider.types';

describe('Test Slider', () => {
  let props: SliderProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Slider {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('slider');
    expect(component).toHaveTextContent('harvey was here');
  });
});
