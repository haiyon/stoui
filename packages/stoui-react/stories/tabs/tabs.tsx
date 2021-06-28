import React from 'react';

import Tabs from '@/components/tabs/tabs';

export default {
  title: 'Navigation/Tabs',
  component: Tabs
};

export const WithBar = () => <Tabs foo="bar" />;

export const WithBaz = () => <Tabs foo="baz" />;
