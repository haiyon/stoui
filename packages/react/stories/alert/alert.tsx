import React from 'react';

import Alert from '@/components/alert/alert';

export default {
  title: 'Alert',
  component: Alert
};

export const WithBar = () => <Alert foo="bar" />;

export const WithBaz = () => <Alert foo="baz" />;
