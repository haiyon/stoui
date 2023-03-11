import './modal.css';

import React, { FunctionComponent } from 'react';

import { ModalProps } from './modal.types';

const Modal: FunctionComponent<ModalProps> = ({ foo }) => (
  <div data-testid="modal" className="foo-bar">
    {foo}
  </div>
);

export default Modal;
