import './input.css';

import React, { FunctionComponent } from 'react';

import { InputProps } from './input.types';

const Input: FunctionComponent<InputProps> = ({ size = 'medium', ...rest }) => (
  <input data-testid="input" className={`input ${size}`} {...rest} />
);

export default Input;
