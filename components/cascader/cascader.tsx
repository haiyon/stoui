import React from 'react';
import { CascaderProps } from './cascader.types';

import './cascader.scss';

const Cascader: React.FC<CascaderProps> = ({ foo }) => (
  <div data-testid="cascader" className="foo-bar">
    {foo}
  </div>
);

export default Cascader;
