import React from 'react';
import Tag from '@stoui/tag/tag';

export default {
  title: 'View/Tag',
  component: Tag
};

export const WithBar = () => <Tag foo="bar" />;

export const WithBaz = () => <Tag foo="baz" />;
