import React from 'react';
import Menu from '@stoui/menu/menu';

export default {
  title: 'Navigation/Menu',
  component: Menu
};

export const WithBar = () => <Menu foo="bar" />;

export const WithBaz = () => <Menu foo="baz" />;
