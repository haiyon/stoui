import React from 'react';
import { MenuProps } from './menu.types';

import './menu.scss';

const Menu: React.FC<MenuProps> = ({ foo }) => (
  <div data-testid="menu" className="foo-bar">
    {foo}
  </div>
);

export default Menu;
