import './alert.css';

import React from 'react';

import { AlertProps } from './alert.types';

const Alert: React.FC<AlertProps> = ({ foo }) => (
  <div data-testid="alert" className="foo-bar">
    {foo}
  </div>
);

export default Alert;
