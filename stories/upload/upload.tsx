import React from 'react';
import Upload from '@stoui/upload/upload';

export default {
  title: 'Form/Upload',
  component: Upload
};

export const WithBar = () => <Upload foo="bar" />;

export const WithBaz = () => <Upload foo="baz" />;
