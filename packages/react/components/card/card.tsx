import './card.css';

import React, { FunctionComponent } from 'react';

import { CardProps } from './card.types';

const Card: FunctionComponent<CardProps> = ({ foo }) => (
  <div data-testid="card" className="foo-bar">
    {foo}
  </div>
);

export default Card;
