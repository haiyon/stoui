import './time-picker.css';

import React from 'react';

import { TimePickerProps } from './time-picker.types';

const TimePicker: React.FC<TimePickerProps> = ({ foo }) => (
  <div data-testid="time-picker" className="foo-bar">
    {foo}
  </div>
);

export default TimePicker;
