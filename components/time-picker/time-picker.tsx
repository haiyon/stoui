import React from 'react';
import { TimePickerProps } from './time-picker.types';

import './time-picker.scss';

const TimePicker: React.FC<TimePickerProps> = ({ foo }) => (
  <div data-testid="time-picker" className="foo-bar">
    {foo}
  </div>
);

export default TimePicker;
