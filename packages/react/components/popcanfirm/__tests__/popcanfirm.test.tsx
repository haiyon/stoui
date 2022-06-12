import { render } from '@testing-library/react';
import React from 'react';

import Popcanfirm from '../popcanfirm';
import { PopcanfirmProps } from '../popcanfirm.types';

describe('Test Popcanfirm', () => {
  let props: PopcanfirmProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Popcanfirm {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('popcanfirm');
    expect(component.textContent).toBe('harvey was here');
  });
});
