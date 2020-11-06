import React from 'react';
import Affix from '@stoui/affix/affix';

export default {
  title: 'Other/Affix',
  component: Affix
};

export const WithBar = () => <Affix foo="bar" />;

export const WithBaz = () => <Affix foo="baz" />;
