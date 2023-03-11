import './collapse.css';

import React, { FunctionComponent } from 'react';

import { CollapseProps } from './collapse.types';

const Collapse: FunctionComponent<CollapseProps> = ({ foo }) => (
  <div data-testid="collapse" className="foo-bar">
    {foo}
  </div>
);

export default Collapse;
