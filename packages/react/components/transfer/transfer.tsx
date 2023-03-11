import './transfer.css';

import React, { FunctionComponent } from 'react';

import { TransferProps } from './transfer.types';

const Transfer: FunctionComponent<TransferProps> = ({ foo }) => (
  <div data-testid="transfer" className="foo-bar">
    {foo}
  </div>
);

export default Transfer;
