import React from 'react';

import Radio from '@/components/radio/radio';

export default {
  title: 'Form/Radio',
  component: Radio
};

export const WithBar = () => <Radio foo="bar" />;

export const WithBaz = () => <Radio foo="baz" />;
