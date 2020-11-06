import React from 'react';
import { SelectProps } from './select.types';

import './select.scss';

const Select: React.FC<SelectProps> = ({ foo }) => (
  <div data-testid="select" className="foo-bar">
    {foo}
  </div>
);

export default Select;
