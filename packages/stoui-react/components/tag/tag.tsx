import './tag.scss';

import React from 'react';

import { TagProps } from './tag.types';

const Tag: React.FC<TagProps> = ({ foo }) => (
  <div data-testid="tag" className="foo-bar">
    {foo}
  </div>
);

export default Tag;
