import React from 'react';

import Timeline from '@/components/timeline/timeline';

export default {
  title: 'Display/Timeline',
  component: Timeline
};

export const WithBar = () => <Timeline foo="bar" />;

export const WithBaz = () => <Timeline foo="baz" />;
