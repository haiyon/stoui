import React from 'react';
import Notice from '@stoui/notice/notice';

export default {
  title: 'View/Notice',
  component: Notice
};

export const WithBar = () => <Notice foo="bar" />;

export const WithBaz = () => <Notice foo="baz" />;
