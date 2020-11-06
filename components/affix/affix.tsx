import React from 'react';
import { AffixProps } from './affix.types';

import './affix.scss';

const Affix: React.FC<AffixProps> = ({ foo }) => (
  <div data-testid="affix" className="foo-bar">
    {foo}
  </div>
);

export default Affix;
