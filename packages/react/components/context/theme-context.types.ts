import React from 'react';

import { StoTheme } from '@/types/theme';

export type Mode = string | undefined | 'light' | 'dark';

export interface ThemeContextProps {
  theme: StoTheme;
  mode?: Mode;
  toggleMode?: () => void | boolean | null;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}
