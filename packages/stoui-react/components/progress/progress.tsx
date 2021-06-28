import './progress.scss';

import React from 'react';

import { ProgressProps } from './progress.types';

const Progress: React.FC<ProgressProps> = ({ foo }) => (
  <div data-testid="progress" className="foo-bar">
    {foo}
  </div>
);

export default Progress;
