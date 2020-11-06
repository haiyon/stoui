import React from 'react';
import { ProgressProps } from './progress.types';

import './progress.scss';

const Progress: React.FC<ProgressProps> = ({ foo }) => (
  <div data-testid="progress" className="foo-bar">
    {foo}
  </div>
);

export default Progress;
