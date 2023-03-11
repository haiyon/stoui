import './divider.css';

import React, { FunctionComponent } from 'react';

import { DividerProps } from './divider.types';

const Divider: FunctionComponent<DividerProps> = ({ foo }) => (
  <div data-testid="divider" className="foo-bar">
    {foo}
  </div>
);

export default Divider;
