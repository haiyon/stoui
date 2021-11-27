import './divider.scss';

import React from 'react';

import { DividerProps } from './divider.types';

const Divider: React.FC<DividerProps> = ({ foo }) => (
  <div data-testid="divider" className="foo-bar">
    {foo}
  </div>
);

export default Divider;
