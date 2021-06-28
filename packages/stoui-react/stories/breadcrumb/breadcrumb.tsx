import React from 'react';

import Breadcrumb from '@/components/breadcrumb/breadcrumb';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb
};

export const WithBar = () => <Breadcrumb foo="bar" />;

export const WithBaz = () => <Breadcrumb foo="baz" />;
