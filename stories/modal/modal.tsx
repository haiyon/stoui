import React from 'react';
import Modal from '@stoui/modal/modal';

export default {
  title: 'View/Modal',
  component: Modal
};

export const WithBar = () => <Modal foo="bar" />;

export const WithBaz = () => <Modal foo="baz" />;
