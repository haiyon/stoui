import './breadcrumb.css';

import React from 'react';

import { BreadcrumbProps } from './breadcrumb.types';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ foo }) => (
  <div data-testid="breadcrumb" className="foo-bar">
    {foo}
  </div>
);

export default Breadcrumb;
