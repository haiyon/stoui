import './progress.css';

import React, { FunctionComponent } from 'react';

import { ProgressProps } from './progress.types';

const Progress: FunctionComponent<ProgressProps> = ({ foo }) => (
  <div data-testid="progress" className="foo-bar">
    {foo}
  </div>
);

export default Progress;
