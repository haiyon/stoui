import './message.css';

import React, { FunctionComponent } from 'react';

import { MessageProps } from './message.types';

const Message: FunctionComponent<MessageProps> = ({ foo }) => (
  <div data-testid="message" className="foo-bar">
    {foo}
  </div>
);

export default Message;
