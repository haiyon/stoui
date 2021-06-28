import React from 'react';

import Popcanfirm from '@/components/popcanfirm/popcanfirm';

export default {
  title: 'View/Popcanfirm',
  component: Popcanfirm
};

export const WithBar = () => <Popcanfirm foo="bar" />;

export const WithBaz = () => <Popcanfirm foo="baz" />;
