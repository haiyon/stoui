import React from 'react';
import { TooltipProps } from './tooltip.types';

import './tooltip.scss';

const Tooltip: React.FC<TooltipProps> = ({ foo }) => (
  <div data-testid="tooltip" className="foo-bar">
    {foo}
  </div>
);

export default Tooltip;
