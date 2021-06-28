import React from 'react';

import Cascader from '@/components/cascader/cascader';

export default {
  title: 'Form/Cascader',
  component: Cascader
};

export const WithBar = () => <Cascader foo="bar" />;

export const WithBaz = () => <Cascader foo="baz" />;
