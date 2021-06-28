import React from 'react';

import Card from '@/components/card/card';

export default {
  title: 'View/Card',
  component: Card
};

export const WithBar = () => <Card foo="bar" />;

export const WithBaz = () => <Card foo="baz" />;
