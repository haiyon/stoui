import './select.css';

import React, { FunctionComponent } from 'react';

import { SelectProps } from './select.types';

const Select: FunctionComponent<SelectProps> = ({ foo }) => (
  <div data-testid="select" className="foo-bar">
    {foo}
  </div>
);

export default Select;
