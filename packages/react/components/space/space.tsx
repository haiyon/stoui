import './space.css';

import React, { FunctionComponent } from 'react';

import { SpaceProps } from './space.types';

const Space: FunctionComponent<SpaceProps> = ({ foo }) => (
  <div data-testid="space" className="foo-bar">
    {foo}
  </div>
);

export default Space;
