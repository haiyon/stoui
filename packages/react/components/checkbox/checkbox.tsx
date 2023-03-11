import './checkbox.css';

import React, { FunctionComponent } from 'react';

import { CheckboxProps } from './checkbox.types';

const Checkbox: FunctionComponent<CheckboxProps> = ({ foo }) => (
  <div data-testid="checkbox" className="foo-bar">
    {foo}
  </div>
);

export default Checkbox;
