import React from 'react';
import { NoticeProps } from './notice.types';

import './notice.scss';

const Notice: React.FC<NoticeProps> = ({ foo }) => (
  <div data-testid="notice" className="foo-bar">
    {foo}
  </div>
);

export default Notice;
