import './loading.scss';

import React from 'react';

import { LoadingProps } from './loading.types';

const Loading: React.FC<LoadingProps> = ({ foo }) => (
  <div data-testid="loading" className="foo-bar">
    {foo}
  </div>
);

export default Loading;
