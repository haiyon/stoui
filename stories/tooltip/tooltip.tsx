import React from 'react';
import Tooltip from '@stoui/tooltip/tooltip';

export default {
  title: 'View/Tooltip',
  component: Tooltip
};

export const WithBar = () => <Tooltip foo="bar" />;

export const WithBaz = () => <Tooltip foo="baz" />;
