import './tabs.scss';

import React from 'react';

import { TabsProps } from './tabs.types';

const Tabs: React.FC<TabsProps> = ({ foo }) => (
  <div data-testid="tabs" className="foo-bar">
    {foo}
  </div>
);

export default Tabs;
