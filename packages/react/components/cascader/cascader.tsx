import './cascader.css';

import React, { FunctionComponent } from 'react';

import { CascaderProps } from './cascader.types';

const Cascader: FunctionComponent<CascaderProps> = ({ foo }) => (
  <div data-testid="cascader" className="foo-bar">
    {foo}
  </div>
);

export default Cascader;
