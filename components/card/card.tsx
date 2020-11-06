import React from 'react';
import { CardProps } from './card.types';

import './card.scss';

const Card: React.FC<CardProps> = ({ foo }) => (
  <div data-testid="card" className="foo-bar">
    {foo}
  </div>
);

export default Card;
