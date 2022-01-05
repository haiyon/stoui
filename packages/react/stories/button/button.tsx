// import { action } from '@storybook/addon-actions';
import React, { useRef, useState } from 'react';

import Button from '@/components/button/button';

export default {
  title: 'General/Button',
  component: Button
};

export const Default = (args: any) => <Button {...args}>Button text</Button>;
export const withStyles = (args: any) => <Button {...args}>Button text</Button>;
export const withIcon = (args: any) => <Button {...args}>Button text</Button>;
export const withIconRight = (args: any) => <Button {...args}>Button text</Button>;
export const withBlock = (args: any) => <Button {...args}>Button text</Button>;
export const withOnlyIcon = (args: any) => <Button {...args} />;
export const withOnlyLoading = (args: any) => <Button {...args} />;
export const withLoadingCentered = (args: any) => <Button {...args}>Loading icon is centered</Button>;

export const withRef = () => {
  const buttonRef = useRef(null);
  const [msg, setMsg] = useState('Click button to console.log Ref');

  const onClick = () => {
    const message = `container: ${buttonRef?.current?.['container']} button: ${buttonRef.current?.['button']}`;
    setMsg(message);
    console.log(message);
  };

  return (
    <>
      <Button ref={buttonRef} onClick={onClick}>
        Button with forwardRef
      </Button>
      <p style={{ color: 'gray' }}>{msg}</p>
    </>
  );
};

export const allButton = (args: any) => (
  <>
    <div>
      {' '}
      {/* direction="vertical" size="6" */}
      <div>
        <Button {...args} size="small" color="primary">
          Button Text
        </Button>
        <Button {...args} size="small" color="success">
          Button Text
        </Button>
        <Button {...args} size="small" color="danger">
          Button Text
        </Button>
        <Button {...args} size="small" color="warning">
          Button Text
        </Button>
        <Button {...args} size="small" color="indigo">
          Button Text
        </Button>
        <Button {...args} size="small" color="dark">
          Button Text
        </Button>
        <Button {...args} size="small" color="link">
          Button Text
        </Button>
        <Button {...args} size="small" color="text">
          Button Text
        </Button>
      </div>
      <div>
        <Button {...args} size="medium" color="primary">
          Button Text
        </Button>
        <Button {...args} size="medium" color="success">
          Button Text
        </Button>
        <Button {...args} size="medium" color="danger">
          Button Text
        </Button>
        <Button {...args} size="medium" color="warning">
          Button Text
        </Button>
        <Button {...args} size="medium" color="indigo">
          Button Text
        </Button>
        <Button {...args} size="medium" color="dark">
          Button Text
        </Button>
        <Button {...args} size="medium" color="link">
          Button Text
        </Button>
        <Button {...args} size="medium" color="text">
          Button Text
        </Button>
      </div>
      <div>
        <Button {...args} size="large" color="primary">
          Button Text
        </Button>
        <Button {...args} size="large" color="success">
          Button Text
        </Button>
        <Button {...args} size="large" color="danger">
          Button Text
        </Button>
        <Button {...args} size="large" color="warning">
          Button Text
        </Button>
        <Button {...args} size="large" color="indigo">
          Button Text
        </Button>
        <Button {...args} size="large" color="dark">
          Button Text
        </Button>
        <Button {...args} size="large" color="link">
          Button Text
        </Button>
        <Button {...args} size="large" color="text">
          Button Text
        </Button>
      </div>
    </div>
  </>
);

Default.args = {
  color: 'primary',
  size: 'medium',
  rounded: true,
  disabled: false
};

allButton.args = {
  rounded: true,
  disabled: false
};
