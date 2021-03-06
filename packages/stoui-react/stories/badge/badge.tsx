import React from 'react';

import Badge from '@/components/badge/badge';

export default {
  title: 'View/Badge',
  component: Badge
};

export const WithBar = () => <Badge foo="bar" />;

export const WithBaz = () => <Badge foo="baz" />;
