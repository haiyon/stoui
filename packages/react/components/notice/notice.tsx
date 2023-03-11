import './notice.css';

import React, { FunctionComponent } from 'react';

import { NoticeProps } from './notice.types';

const Notice: FunctionComponent<NoticeProps> = ({ foo }) => (
  <div data-testid="notice" className="foo-bar">
    {foo}
  </div>
);

export default Notice;
