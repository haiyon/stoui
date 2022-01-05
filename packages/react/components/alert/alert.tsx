import './alert.scss';

import clsx from 'clsx';
import React from 'react';

import { AlertProps } from './alert.types';

const Alert: React.FC<AlertProps> = ({ type = 'success', className, children }) => {
  const cls = clsx();

  return (
    <div data-testid="alert" className={cls}>
      {children}
    </div>
  );
};

export default Alert;
