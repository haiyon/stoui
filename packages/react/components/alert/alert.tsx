import './alert.css';

import React, { FunctionComponent } from 'react';

import { AlertProps } from './alert.types';

const Alert: FunctionComponent<AlertProps> = ({ foo }) => (
  <div data-testid="alert" className="foo-bar">
    {foo}
  </div>
);

export default Alert;
