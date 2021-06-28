import './input.scss';

import React from 'react';

import { InputProps } from './input.types';

const Input: React.FC<InputProps> = ({ size = 'medium', ...rest }) => (
  <input data-testid="input" className={`input ${size}`} {...rest} />
);

export default Input;
