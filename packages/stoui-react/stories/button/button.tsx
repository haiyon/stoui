import { action } from '@storybook/addon-actions';
import React from 'react';

import Button from '@/components/button/button';

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    color: {
      default: 'primary',
      options: ['primary', 'success', 'danger', 'warning', 'indigo', 'dark', 'link', 'text'],
      control: { type: 'select' }
    }
  }
};

export const Primary = () => (
  <Button color="primary" onClick={action('clicked')} type="submit">
    Button
  </Button>
);
