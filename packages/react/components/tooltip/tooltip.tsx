import './tooltip.scss';

import React from 'react';

import { TooltipProps } from './tooltip.types';

const Tooltip: React.FC<TooltipProps> = ({ foo }) => (
  <div data-testid="tooltip" className="foo-bar">
    {foo}
  </div>
);

export default Tooltip;
