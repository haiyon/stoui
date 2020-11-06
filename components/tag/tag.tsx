import React from 'react';
import { TagProps } from './tag.types';

import './tag.scss';

const Tag: React.FC<TagProps> = ({ foo }) => (
  <div data-testid="tag" className="foo-bar">
    {foo}
  </div>
);

export default Tag;
