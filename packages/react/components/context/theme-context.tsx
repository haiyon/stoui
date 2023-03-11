import React, { createContext, useContext, useEffect, useState } from 'react';

import defaultTheme from '@/themes/default';
import { windowExists } from '@/utils/window-exists';

import { Mode, ThemeContextProps, ThemeProviderProps } from './theme-context.types';

const LOCAL_STORAGE_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme
});

export const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  return useContext(ThemeContext);
};

export const useThemeMode = (usePreferences: boolean): [Mode, () => void] => {
  const [mode, setMode] = useState<Mode>(() => {
    if (usePreferences) {
      const userPreference =
        windowExists() && !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return userPreference ? 'dark' : 'light';
    } else {
      return undefined;
    }
  });

  const savePreference = (m: Mode) => localStorage.setItem(LOCAL_STORAGE_KEY, m as string);

  const toggleMode = () => {
    if (mode === 'auto') {
      return;
    }

    const newMode = mode === 'dark' ? 'light' : 'dark';

    if (windowExists()) {
      document.documentElement.classList.toggle('dark', newMode === 'dark');
    }

    savePreference(newMode);
    setMode(newMode);
  };

  useEffect(() => {
    if (usePreferences && mode === 'auto' && windowExists() && !!window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => {
        if (mediaQuery.matches) {
          savePreference('dark');
          setMode('dark');
        } else {
          savePreference('light');
          setMode('light');
        }
      };
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [usePreferences, mode, savePreference]);

  useEffect(() => {
    if (usePreferences && mode && mode !== 'auto') {
      savePreference(mode);

      if (!windowExists()) {
        return;
      }

      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  }, [usePreferences, mode]);

  return [mode, toggleMode];
};
