import { render } from '@testing-library/react';
import React from 'react';

import Transfer from '../transfer';
import { TransferProps } from '../transfer.types';

describe('Test Transfer', () => {
  let props: TransferProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Transfer {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('transfer');
    expect(component).toHaveTextContent('harvey was here');
  });
});
