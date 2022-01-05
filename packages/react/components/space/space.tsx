import './space.scss';

import React from 'react';

import { SpaceProps } from './space.types';

const Space: React.FC<SpaceProps> = ({ foo }) => (
  <div data-testid="space" className="foo-bar">
    {foo}
  </div>
);

export default Space;
