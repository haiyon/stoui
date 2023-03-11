import './time-picker.css';

import React, { FunctionComponent } from 'react';

import { TimePickerProps } from './time-picker.types';

const TimePicker: FunctionComponent<TimePickerProps> = ({ foo }) => (
  <div data-testid="time-picker" className="foo-bar">
    {foo}
  </div>
);

export default TimePicker;
