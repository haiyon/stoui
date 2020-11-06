import React from 'react';
import Progress from '@stoui/progress/progress';

export default {
  title: 'View/Progress',
  component: Progress
};

export const WithBar = () => <Progress foo="bar" />;

export const WithBaz = () => <Progress foo="baz" />;
