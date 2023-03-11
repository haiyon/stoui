import './transfer.css';

import React from 'react';

import { TransferProps } from './transfer.types';

const Transfer: React.FC<TransferProps> = ({ foo }) => (
  <div data-testid="transfer" className="foo-bar">
    {foo}
  </div>
);

export default Transfer;
