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
  type?: 'success' | 'danger' | 'warning' | 'info';
  className?: string;
  title: string;
  withIcon?: boolean;
  closable?: boolean;
  children?: React.ReactNode;
}
