import './icon.css';

import React, { FunctionComponent } from 'react';

import { IconProps } from './icon.types';

const Icon: FunctionComponent<IconProps> = ({ foo }) => (
  <div data-testid="icon" className="foo-bar">
    {foo}
  </div>
);

export default Icon;
