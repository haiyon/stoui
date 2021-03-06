import React from 'react';

import Layout from '@/components/layout/layout';

export default {
  title: 'Base/Layout',
  component: Layout
};

export const WithBar = () => <Layout foo="bar" />;

export const WithBaz = () => <Layout foo="baz" />;
