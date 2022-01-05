import React from 'react';

import Input from '@/components/input/input';

export default {
  title: 'Form/Input',
  component: Input
};

export const Small = () => <Input size="small" />;
export const Medium = () => <Input size="medium" />;
export const Large = () => <Input size="large" />;
