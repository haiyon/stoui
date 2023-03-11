import './menu.css';

import React, { FunctionComponent } from 'react';

import { MenuProps } from './menu.types';

const Menu: FunctionComponent<MenuProps> = ({ foo }) => (
  <div data-testid="menu" className="foo-bar">
    {foo}
  </div>
);

export default Menu;
