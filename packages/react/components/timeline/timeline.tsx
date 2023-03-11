import './timeline.css';

import React, { FunctionComponent } from 'react';

import { TimelineProps } from './timeline.types';

const Timeline: FunctionComponent<TimelineProps> = ({ foo }) => (
  <div data-testid="timeline" className="foo-bar">
    {foo}
  </div>
);

export default Timeline;
