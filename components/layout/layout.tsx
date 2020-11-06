import React from 'react';
import { LayoutProps } from './layout.types';

import './layout.scss';

const Layout: React.FC<LayoutProps> = ({ foo }) => (
  <div data-testid="layout" className="foo-bar">
    {foo}
  </div>
);

export default Layout;
