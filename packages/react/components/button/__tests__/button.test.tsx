import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from '../button';

describe('Button', () => {
  it('renders a button with default props', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('default');
    expect(button).toHaveClass('rounded');
    expect(button).toHaveClass('primary');
    expect(button).not.toBeDisabled();
  });

  it('renders a button with custom props', () => {
    const { getByTestId } = render(
      <Button color="success" disabled rounded={false} size="large">
        Click me!
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('success');
    expect(button).toHaveClass('large');
    expect(button).not.toHaveClass('rounded');
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});
