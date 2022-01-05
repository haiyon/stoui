import React from 'react';

import Steps from '@/components/steps/steps';

export default {
  title: 'Navigation/Steps',
  component: Steps
};

export const WithBar = () => <Steps foo="bar" />;

export const WithBaz = () => <Steps foo="baz" />;
