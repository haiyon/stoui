import React from 'react';
import defaultTheme from '../style/themes/default';
import { ThemeContextInterface, ThemeProviderProps } from './theme-context.types';

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: defaultTheme });

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
