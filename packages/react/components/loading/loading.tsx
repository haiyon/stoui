import './loading.css';

import clsx from 'clsx';
import React from 'react';

import { LoadingProps } from './loading.types';

const defaultProps: Partial<LoadingProps> = {
  active: false
};

const Loading: React.FC<LoadingProps> = ({ className, children, active }) => {
  const cls = clsx(className, 'loading', active ? 'loading--active' : '');
  return (
    <div data-testid="loading" className={cls}>
      <div className="loading-content">{children}</div>
      {active && <span>Active Icon</span>}
    </div>
  );
};

export default Loading;
