'use client';

import useThemeHook from '@/hooks/theme.hook';
import { useCallback, useEffect, useState } from 'react';

export default function useThemeModeHook() {
  const { themeMode, checkInLocalStorage, toggleThemeMode } = useThemeHook();
  const [systemTheme, setSystemTheme] = useState<MediaQueryList | undefined>();

  const detectTheme = useCallback(
    (systemTheme: MediaQueryList) => {
      // Verify if it's dark mode.
      if (systemTheme.matches) {
        toggleThemeMode(true);
      } else {
        toggleThemeMode(false);
      }
    },
    [toggleThemeMode]
  );

  // Get system theme mode as dark.
  useEffect(() => {
    const _systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(_systemTheme);
  }, []);

  // If theme is not yet stored in local storage, use system settings instead.
  useEffect(() => {
    if (systemTheme !== undefined && checkInLocalStorage() === false) {
      detectTheme(systemTheme);
    }
  }, [systemTheme, checkInLocalStorage, detectTheme]);

  // Detect when user change the theme in system settings.
  useEffect(() => {
    if (systemTheme !== undefined) {
      const eventName: string = 'change';

      systemTheme.addEventListener(eventName, () => detectTheme(systemTheme));

      return () => {
        systemTheme.removeEventListener(eventName, () => {});
      };
    }
  }, [systemTheme, themeMode, detectTheme]);

  // Update the HTML tag class.
  useEffect(() => {
    const HTML_TAG = 'html';
    const DARK_CLASS = 'dark';

    if (themeMode === true) {
      document.querySelector(HTML_TAG)?.classList.add(DARK_CLASS);
    } else {
      document.querySelector(HTML_TAG)?.classList.remove(DARK_CLASS);
    }
  }, [themeMode]);

  return {};
}
