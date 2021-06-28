import './radio.scss';

import React from 'react';

import { RadioProps } from './radio.types';

const Radio: React.FC<RadioProps> = ({ foo }) => (
  <div data-testid="radio" className="foo-bar">
    {foo}
  </div>
);

export default Radio;
