import './date-picker.css';

import React, { FunctionComponent } from 'react';

import { DatePickerProps } from './date-picker.types';

const DatePicker: FunctionComponent<DatePickerProps> = ({ foo }) => (
  <div data-testid="date-picker" className="foo-bar">
    {foo}
  </div>
);

export default DatePicker;
