import './popcanfirm.css';

import React, { FunctionComponent } from 'react';

import { PopcanfirmProps } from './popcanfirm.types';

const Popcanfirm: FunctionComponent<PopcanfirmProps> = ({ foo }) => (
  <div data-testid="popcanfirm" className="foo-bar">
    {foo}
  </div>
);

export default Popcanfirm;
