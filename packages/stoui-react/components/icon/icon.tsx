import './icon.scss';

import React from 'react';

import { IconProps } from './icon.types';

const Icon: React.FC<IconProps> = ({ foo }) => (
  <div data-testid="icon" className="foo-bar">
    {foo}
  </div>
);

export default Icon;
