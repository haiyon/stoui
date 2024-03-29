import React from 'react';

import Progress from '@/components/progress/progress';

export default {
  title: 'Display/Progress',
  component: Progress
};

export const WithBar = () => <Progress foo="bar" />;

export const WithBaz = () => <Progress foo="baz" />;
