import './checkbox.scss';

import React from 'react';

import { CheckboxProps } from './checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({ foo }) => (
  <div data-testid="checkbox" className="foo-bar">
    {foo}
  </div>
);

export default Checkbox;
