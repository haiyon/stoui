import './message.scss';

import React from 'react';

import { MessageProps } from './message.types';

const Message: React.FC<MessageProps> = ({ foo }) => (
  <div data-testid="message" className="foo-bar">
    {foo}
  </div>
);

export default Message;
