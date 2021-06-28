import { render } from '@testing-library/react';
import React from 'react';

import Notice from '../notice';
import { NoticeProps } from '../notice.types';

describe('Test Notice', () => {
  let props: NoticeProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Notice {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('notice');
    expect(component).toHaveTextContent('harvey was here');
  });
});
