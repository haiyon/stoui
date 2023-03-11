import './radio.css';

import React, { FunctionComponent } from 'react';

import { RadioProps } from './radio.types';

const Radio: FunctionComponent<RadioProps> = ({ foo }) => (
  <div data-testid="radio" className="foo-bar">
    {foo}
  </div>
);

export default Radio;
