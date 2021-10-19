import './button.scss';

import clsx from 'clsx';
import React from 'react';

import { ButtonProps, ButtonRef } from './button.types';

const defaultProps: Partial<ButtonProps> = {
  disabled: false,
  rounded: true,
  size: 'medium'
};

const Button = React.forwardRef(
  ({ children, className, disabled, color, rounded, size, submit, ...rest }: ButtonProps, ref: ButtonRef) => (
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
      )}
    >
      {children}
    </button>
  )
);

export default Button;
