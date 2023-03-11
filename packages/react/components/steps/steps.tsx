import './steps.css';

import React from 'react';

import { StepsProps } from './steps.types';

const Steps: React.FC<StepsProps> = ({ foo }) => (
  <div data-testid="steps" className="foo-bar">
    {foo}
  </div>
);

export default Steps;
