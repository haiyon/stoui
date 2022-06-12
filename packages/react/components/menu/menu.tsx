import './menu.css';

import React from 'react';

import { MenuProps } from './menu.types';

const Menu: React.FC<MenuProps> = ({ foo }) => (
  <div data-testid="menu" className="foo-bar">
    {foo}
  </div>
);

export default Menu;
