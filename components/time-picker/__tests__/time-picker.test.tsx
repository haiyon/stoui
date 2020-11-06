import React from 'react';
import { render } from '@testing-library/react';

import TimePicker from '../time-picker';
import { TimePickerProps } from '../time-picker.types';

describe('Test TimePicker', () => {
  let props: TimePickerProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<TimePicker {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('time-picker');
    expect(component).toHaveTextContent('harvey was here');
  });
});
