import React, { FunctionComponent, useContext, useEffect, useState } from 'react';

import defaultTheme from '@/themes/default';
import { windowExists } from '@/utils/window-exists';

import { Mode, ThemeContextProps, ThemeProviderProps } from './theme-context.types';

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: defaultTheme
});

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}

export const useThemeMode = (
  usePreferences: boolean
): [Mode, React.Dispatch<React.SetStateAction<Mode>> | undefined, (() => void) | undefined] => {
  if (!usePreferences) return [undefined, undefined, undefined];
  const [mode, setMode] = useState<Mode>(undefined);

  const savePreference = (m: string) => localStorage.setItem('theme', m);

  const toggleMode = () => {
    if (!mode) {
      return;
    }

    if (windowExists()) {
      document.documentElement.classList.toggle('dark');
    }

    savePreference(mode);
    setMode(mode == 'dark' ? 'light' : 'dark');
  };

  if (usePreferences) {
    useEffect(() => {
      const userPreference =
        windowExists() && !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const userMode = localStorage.getItem('theme') || (userPreference ? 'dark' : 'light');

      if (userMode) {
        setMode(userMode);
      }
    }, []);

    useEffect(() => {
      if (!mode) {
        return;
      }

      savePreference(mode);

      if (!windowExists()) {
        return;
      }

      if (mode != 'dark') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }, [mode]);
  }

  return [mode, setMode, toggleMode];
};
