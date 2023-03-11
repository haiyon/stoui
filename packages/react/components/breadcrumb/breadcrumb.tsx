import './breadcrumb.css';

import React, { FunctionComponent } from 'react';

import { BreadcrumbProps } from './breadcrumb.types';

const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ foo }) => (
  <div data-testid="breadcrumb" className="foo-bar">
    {foo}
  </div>
);

export default Breadcrumb;
