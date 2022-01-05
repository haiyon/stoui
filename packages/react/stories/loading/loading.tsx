import React from 'react';

import Loading from '@/components/loading/loading';

export default {
  title: 'Display/Loading',
  component: Loading
};

export const Default = (args: any) => (
  <Loading {...args}>
    <span>this loading content</span>
  </Loading>
);

Default.args = {
  active: true
};
