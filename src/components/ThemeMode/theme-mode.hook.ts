'use client';

import useThemeService from '@/services/theme.service';
import { useEffect, useState } from 'react';

export default function useThemeModeHook() {
  const { themeMode, checkInLocalStorage, toggleThemeMode } = useThemeService();
  const [systemTheme, setSystemTheme] = useState<MediaQueryList | undefined>();

  const detectTheme = (systemTheme: MediaQueryList) => {
    // Verify if it's dark mode.
    if (systemTheme.matches) {
      toggleThemeMode(true);
    } else {
      toggleThemeMode(false);
    }
  };

  useEffect(() => {
    // Get system theme mode as dark.
    const _systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(_systemTheme);
  }, []);

  useEffect(() => {
    // If theme is not yet stored in local storage, use system settings instead.
    if (systemTheme !== undefined && checkInLocalStorage() === false) {
      detectTheme(systemTheme);
    }
  }, [systemTheme]);

  useEffect(() => {
    // Detect when user change the theme in system settings.
    if (systemTheme !== undefined) {
      const eventName: string = 'change';

      systemTheme.addEventListener(eventName, () => detectTheme(systemTheme));

      return () => {
        systemTheme.removeEventListener(eventName, () => {});
      };
    }
  }, [systemTheme, themeMode]);

  return {};
}
