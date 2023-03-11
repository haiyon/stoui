import React from 'react';

import Tooltip from '@/components/tooltip/tooltip';

export default {
  title: 'Display/Tooltip',
  component: Tooltip
};

export const WithBar = () => <Tooltip foo="bar" />;

export const WithBaz = () => <Tooltip foo="baz" />;
