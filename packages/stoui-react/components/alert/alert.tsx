import './alert.scss';

import clsx from 'clsx';
import React, { useContext } from 'react';

import { ThemeContext } from '../context/theme-context';
import { AlertProps } from './alert.types';

const Alert: React.FC<AlertProps> = ({ foo, type = 'neutral', className, ...rest }) => {
  const {
    theme: { alert }
  } = useContext(ThemeContext);

  const baseStyle = alert.base;
  const typeStyle = alert[type];

  const cls = clsx([baseStyle, typeStyle[type], className]);

  return (
    <div data-testid="alert" className={cls} {...rest}>
      {foo}
    </div>
  );
};

export default Alert;
