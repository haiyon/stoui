import React from 'react';
import Collapse from '@stoui/collapse/collapse';

export default {
  title: 'View/Collapse',
  component: Collapse
};

export const WithBar = () => <Collapse foo="bar" />;

export const WithBaz = () => <Collapse foo="baz" />;
