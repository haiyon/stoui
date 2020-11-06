import React from 'react';
import Transfer from '@stoui/transfer/transfer';

export default {
  title: 'Form/Transfer',
  component: Transfer
};

export const WithBar = () => <Transfer foo="bar" />;

export const WithBaz = () => <Transfer foo="baz" />;
