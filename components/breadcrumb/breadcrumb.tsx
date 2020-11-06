import React from 'react';
import { BreadcrumbProps } from './breadcrumb.types';

import './breadcrumb.scss';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ foo }) => (
  <div data-testid="breadcrumb" className="foo-bar">
    {foo}
  </div>
);

export default Breadcrumb;
