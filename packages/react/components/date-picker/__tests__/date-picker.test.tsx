import { render } from '@testing-library/react';
import React from 'react';

import DatePicker from '../date-picker';
import { DatePickerProps } from '../date-picker.types';

describe('Test DatePicker', () => {
  let props: DatePickerProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<DatePicker {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('date-picker');
    expect(component.textContent).toBe('harvey was here');
  });
});
