import './button.css';

import clsx from 'clsx';
import React, { forwardRef, FunctionComponent, useImperativeHandle, useRef } from 'react';

import { ButtonColor, ButtonProps, ButtonSize, RefHandle } from './button.types';

const defaultProps = {
  color: 'primary' as ButtonColor,
  disabled: false,
  rounded: true,
  size: 'medium' as ButtonSize
};

const Button: FunctionComponent<ButtonProps> = forwardRef<RefHandle, ButtonProps>(
  (
    {
      children,
      className,
      disabled = defaultProps.disabled,
      color = defaultProps.color,
      rounded = defaultProps.rounded,
      size = defaultProps.size,
      submit
    }: ButtonProps,
    ref
  ) => {
    const containerRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
      container: () => containerRef.current,
      button: () => buttonRef.current
    }));

    const cls = clsx('button', disabled && 'disabled', 'default', rounded && 'rounded', size, color, className);

    const RenderedButton = ({ children }: any) => (
      <button
        data-testid="button"
        ref={buttonRef}
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        className={cls}
      >
        {children}
      </button>
    );

    return (
      <span ref={containerRef}>
        <RenderedButton>{children && <span>{children}</span>}</RenderedButton>
      </span>
    );
  }
);

export default Button;
