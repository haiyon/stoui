import React from 'react';
import { StepsProps } from './steps.types';

import './steps.scss';

const Steps: React.FC<StepsProps> = ({ foo }) => (
  <div data-testid="steps" className="foo-bar">
    {foo}
  </div>
);

export default Steps;
