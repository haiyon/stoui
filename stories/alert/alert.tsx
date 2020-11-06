import React from 'react';
import Alert from '@stoui/alert/alert';

export default {
  title: 'View/Alert',
  component: Alert
};

export const WithBar = () => <Alert foo="bar" />;

export const WithBaz = () => <Alert foo="baz" />;
