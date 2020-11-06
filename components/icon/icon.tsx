import React from 'react';
import { IconProps } from './icon.types';

import './icon.scss';

const Icon: React.FC<IconProps> = ({ foo }) => (
  <div data-testid="icon" className="foo-bar">
    {foo}
  </div>
);

export default Icon;
