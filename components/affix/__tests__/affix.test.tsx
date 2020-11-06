import React from 'react';
import { render } from '@testing-library/react';

import Affix from '../affix';
import { AffixProps } from '../affix.types';

describe('Test Affix', () => {
  let props: AffixProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Affix {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('affix');
    expect(component).toHaveTextContent('harvey was here');
  });
});
