import React from 'react';
import { PopcanfirmProps } from './popcanfirm.types';

import './popcanfirm.scss';

const Popcanfirm: React.FC<PopcanfirmProps> = ({ foo }) => (
  <div data-testid="popcanfirm" className="foo-bar">
    {foo}
  </div>
);

export default Popcanfirm;
