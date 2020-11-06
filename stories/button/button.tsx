import React from 'react';
import Button from '@stoui/button/button';

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export const Primary = () => <Button type="primary">Primary</Button>;
export const Secondary = () => <Button type="secondary">Secondary</Button>;
export const Success = () => <Button type="success">Success</Button>;
export const Danger = () => <Button type="danger">Danger</Button>;
