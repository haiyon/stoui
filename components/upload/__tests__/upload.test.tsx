import React from 'react';
import { render } from '@testing-library/react';

import Upload from '../upload';
import { UploadProps } from '../upload.types';

describe('Test Upload', () => {
  let props: UploadProps;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Upload {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('upload');
    expect(component).toHaveTextContent('harvey was here');
  });
});
