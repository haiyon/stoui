import React from 'react';

export type Mode = string | undefined | 'light' | 'dark';

export interface ThemeContextProps {
  theme: any;
  mode?: Mode;
  toggleMode?: () => void | boolean | null;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}
