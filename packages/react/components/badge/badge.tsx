import './badge.css';

import React, { FunctionComponent } from 'react';

import { BadgeProps } from './badge.types';

const Badge: FunctionComponent<BadgeProps> = ({ foo }) => (
  <div data-testid="badge" className="foo-bar">
    {foo}
  </div>
);

export default Badge;
