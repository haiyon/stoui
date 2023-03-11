import './tag.css';

import React, { FunctionComponent } from 'react';

import { TagProps } from './tag.types';

const Tag: FunctionComponent<TagProps> = ({ foo }) => (
  <div data-testid="tag" className="foo-bar">
    {foo}
  </div>
);

export default Tag;
