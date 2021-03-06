import React from 'react';

import Icon from '@/components/icon/icon';

export default {
  title: 'Base/Icon',
  component: Icon
};

export const WithBar = () => <Icon foo="bar" />;

export const WithBaz = () => <Icon foo="baz" />;
