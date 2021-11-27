import React from 'react';

// import defaultTheme from '../introduction/themes/default';
import { ThemeContextInterface, ThemeProviderProps } from './theme-context.types';

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: {} });

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
