import './date-picker.scss';

import React from 'react';

import { DatePickerProps } from './date-picker.types';

const DatePicker: React.FC<DatePickerProps> = ({ foo }) => (
  <div data-testid="date-picker" className="foo-bar">
    {foo}
  </div>
);

export default DatePicker;
