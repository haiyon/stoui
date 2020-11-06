import React from 'react';
import { CollapseProps } from './collapse.types';

import './collapse.scss';

const Collapse: React.FC<CollapseProps> = ({ foo }) => (
  <div data-testid="collapse" className="foo-bar">
    {foo}
  </div>
);

export default Collapse;
