import './layout.css';

import React, { FunctionComponent } from 'react';

import { LayoutProps } from './layout.types';

const Layout: FunctionComponent<LayoutProps> = ({ foo }) => (
  <div data-testid="layout" className="foo-bar">
    {foo}
  </div>
);

export default Layout;
