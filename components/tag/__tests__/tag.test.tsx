import React from 'react';
import { render } from '@testing-library/react';

import Tag from '../tag';
import { TagProps } from '../tag.types';

describe('Test Tag', () => {
  let props: TagProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Tag {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('tag');
    expect(component).toHaveTextContent('harvey was here');
  });
});
