import './badge.scss';

import React from 'react';

import { BadgeProps } from './badge.types';

const Badge: React.FC<BadgeProps> = ({ foo }) => (
  <div data-testid="badge" className="foo-bar">
    {foo}
  </div>
);

export default Badge;
