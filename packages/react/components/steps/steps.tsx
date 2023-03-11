import './steps.css';

import React, { FunctionComponent } from 'react';

import { StepsProps } from './steps.types';

const Steps: FunctionComponent<StepsProps> = ({ foo }) => (
  <div data-testid="steps" className="foo-bar">
    {foo}
  </div>
);

export default Steps;
