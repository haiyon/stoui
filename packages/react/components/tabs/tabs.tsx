import './tabs.css';

import React, { FunctionComponent } from 'react';

import { TabsProps } from './tabs.types';

const Tabs: FunctionComponent<TabsProps> = ({ foo }) => (
  <div data-testid="tabs" className="foo-bar">
    {foo}
  </div>
);

export default Tabs;
