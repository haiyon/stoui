import './timeline.scss';

import React from 'react';

import { TimelineProps } from './timeline.types';

const Timeline: React.FC<TimelineProps> = ({ foo }) => (
  <div data-testid="timeline" className="foo-bar">
    {foo}
  </div>
);

export default Timeline;
