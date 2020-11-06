import React from 'react';

export interface ThemeContextInterface {
  theme: any;
  // mode?: Mode;
  toggleMode?: any;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}
