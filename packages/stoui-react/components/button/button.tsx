import './button.scss';

import clsx from 'clsx';
import React from 'react';

import { ButtonProps, ButtonRef } from './button.types';

const Button = React.forwardRef(
  (
    { children, className, disabled = false, color, rounded = true, size = 'medium', submit, ...rest }: ButtonProps,
    ref: ButtonRef
  ) => (
    <button
      data-testid="button"
      ref={ref}
      {...rest}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={clsx(
        className,
        'button',
        disabled ? 'disabled' : '',
        'default',
        rounded ? 'rounded' : '',
        size,
        color
      )}>
      {children}
    </button>
  )
);

export default Button;
