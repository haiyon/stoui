import React from 'react';
import Loading from '@stoui/loading/loading';

export default {
  title: 'Navigation/Loading',
  component: Loading
};

export const WithBar = () => <Loading foo="bar" />;

export const WithBaz = () => <Loading foo="baz" />;
