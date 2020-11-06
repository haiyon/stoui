import React from 'react';
import { TimelineProps } from './timeline.types';

import './timeline.scss';

const Timeline: React.FC<TimelineProps> = ({ foo }) => (
  <div data-testid="timeline" className="foo-bar">
    {foo}
  </div>
);

export default Timeline;
