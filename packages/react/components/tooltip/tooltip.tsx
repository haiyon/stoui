import './tooltip.css';

import React, { FunctionComponent } from 'react';

import { TooltipProps } from './tooltip.types';

const Tooltip: FunctionComponent<TooltipProps> = ({ foo }) => (
  <div data-testid="tooltip" className="foo-bar">
    {foo}
  </div>
);

export default Tooltip;
