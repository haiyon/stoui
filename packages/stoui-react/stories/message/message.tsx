import React from 'react';

import Message from '@/components/message/message';

export default {
  title: 'View/Message',
  component: Message
};

export const WithBar = () => <Message foo="bar" />;

export const WithBaz = () => <Message foo="baz" />;
