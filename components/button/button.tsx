import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './button.types';

import './button.scss';

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  children,
  ...rest
}) => (
  <button
    data-testid="button"
    className={clsx('button', `button-${type}`, `button-${size}`)}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
