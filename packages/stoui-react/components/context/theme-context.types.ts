import React from 'react';

export interface ThemeContextInterface {
  theme: any;
  // mode?: Mode;
  toggleMode?: boolean;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}
