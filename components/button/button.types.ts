export type ButtonType = 'danger' | 'primary' | 'secondary' | 'success' | 'link' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large' | undefined;

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
}
