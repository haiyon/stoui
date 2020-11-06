import React from 'react';
import { ModalProps } from './modal.types';

import './modal.scss';

const Modal: React.FC<ModalProps> = ({ foo }) => (
  <div data-testid="modal" className="foo-bar">
    {foo}
  </div>
);

export default Modal;
