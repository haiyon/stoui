import React from 'react';

import Collapse from '@/components/collapse/collapse';

export default {
  title: 'Display/Collapse',
  component: Collapse
};

export const WithBar = () => <Collapse foo="bar" />;

export const WithBaz = () => <Collapse foo="baz" />;
