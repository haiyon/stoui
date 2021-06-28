import './button.scss';

import clsx from 'clsx';
import React from 'react';

import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ type = 'primary', size = 'medium', children, ...rest }) => (
  <button data-testid="button" className={clsx('button', `button-${type}`, `button-${size}`)} {...rest}>
    {children}
  </button>
);

export default Button;
