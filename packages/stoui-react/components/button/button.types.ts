export type ButtonColor = 'primary' | 'success' | 'danger' | 'warning' | 'indigo' | 'dark' | 'link' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonRef = React.ForwardedRef<HTMLButtonElement>;

interface ButtonPropsWithChildren {}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonPropsWithChildren {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  color?: ButtonColor;
  rounded?: boolean;
  size?: ButtonSize;
  submit?: boolean;
}
