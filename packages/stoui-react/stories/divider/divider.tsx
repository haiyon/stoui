import React from 'react';

import Divider from '@/components/divider/divider';

export default {
  title: 'Display/Divider',
  component: Divider
};

export const WithBar = () => <Divider foo="bar" />;

export const WithBaz = () => <Divider foo="baz" />;
