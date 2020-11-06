import React from 'react';
import Timeline from '@stoui/timeline/timeline';

export default {
  title: 'View/Timeline',
  component: Timeline
};

export const WithBar = () => <Timeline foo="bar" />;

export const WithBaz = () => <Timeline foo="baz" />;
