/**
enum AlertEnum {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  neutral = 'neutral',
}
*/

export interface AlertProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  foo: string;
  type?: 'success' | 'danger' | 'warning' | 'info' | 'neutral'; // keyof typeof AlertEnum
  onClose?: () => void;
}
