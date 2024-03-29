import { render } from '@testing-library/react';
import React from 'react';

import Modal from '../modal';
import { ModalProps } from '../modal.types';

describe('Test Modal', () => {
  let props: ModalProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Modal {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('modal');
    expect(component.textContent).toBe('harvey was here');
  });
});
