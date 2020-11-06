import React from 'react';
import Checkbox from '@stoui/checkbox/checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox
};

export const WithBar = () => <Checkbox foo="bar" />;

export const WithBaz = () => <Checkbox foo="baz" />;
