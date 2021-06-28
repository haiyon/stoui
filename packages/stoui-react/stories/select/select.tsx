import React from 'react';

import Select from '@/components/select/select';

export default {
  title: 'Form/Select',
  component: Select
};

export const WithBar = () => <Select foo="bar" />;

export const WithBaz = () => <Select foo="baz" />;
