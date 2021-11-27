import React from 'react';

import Popcanfirm from '@/components/popcanfirm/popcanfirm';

export default {
  title: 'Display/Popcanfirm',
  component: Popcanfirm
};

export const WithBar = () => <Popcanfirm foo="bar" />;

export const WithBaz = () => <Popcanfirm foo="baz" />;
