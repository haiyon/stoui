import { render } from '@testing-library/react';
import React from 'react';

import Icon from '../icon';
import { IconProps } from '../icon.types';

describe('Test Icon', () => {
  let props: IconProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Icon {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('icon');
    expect(component.textContent).toBe('harvey was here');
  });
});
