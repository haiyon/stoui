import React from 'react';
import TimePicker from '@stoui/time-picker/time-picker';

export default {
  title: 'Form/TimePicker',
  component: TimePicker
};

export const WithBar = () => <TimePicker foo="bar" />;

export const WithBaz = () => <TimePicker foo="baz" />;
