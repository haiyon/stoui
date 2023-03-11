import './affix.css';

import React, { FunctionComponent } from 'react';

import { AffixProps } from './affix.types';

const Affix: FunctionComponent<AffixProps> = ({ foo }) => (
  <div data-testid="affix" className="foo-bar">
    {foo}
  </div>
);

export default Affix;
