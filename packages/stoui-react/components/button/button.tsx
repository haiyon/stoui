import './button.scss';

import clsx from 'clsx';
import React, { useImperativeHandle, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

import button from '../../stories/button/button';
import { ButtonProps, ButtonRef, RefHandle } from './button.types';

const defaultProps: Partial<ButtonProps> = {
  color: 'primary',
  disabled: false,
  rounded: true,
  size: 'medium'
};

const Button = React.forwardRef<RefHandle, ButtonProps>(
  ({ children, className, disabled, color, rounded, size, submit }: ButtonProps, ref) => {
    // button ref
    const containerRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
      container: () => {
        return containerRef.current;
      },
      button: () => {
        return buttonRef.current;
      }
    }));

    const cls = clsx(
      className,
      'button',
      disabled ? 'disabled' : defaultProps.disabled,
      'default',
      rounded ? 'rounded' : defaultProps.rounded,
      size ? size : defaultProps.size,
      color ? color : defaultProps.color
    );

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
