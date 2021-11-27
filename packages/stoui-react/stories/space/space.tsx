import React from 'react';

import Space from '@/components/space/space';

export default {
  title: 'Base/Space',
  component: Space
};

export const WithBar = () => <Space foo="bar" />;

export const WithBaz = () => <Space foo="baz" />;
