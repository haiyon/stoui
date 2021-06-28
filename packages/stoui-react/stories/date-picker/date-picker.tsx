import React from 'react';

import DatePicker from '@/components/date-picker/date-picker';

export default {
  title: 'Form/DatePicker',
  component: DatePicker
};

export const WithBar = () => <DatePicker foo="bar" />;

export const WithBaz = () => <DatePicker foo="baz" />;
