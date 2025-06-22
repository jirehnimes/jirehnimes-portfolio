'use client';

import { useSetAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import {
  COLOR,
  COLOR_DARK,
  LOCAL_STORAGE_KEY,
  THEME_MODE,
} from '@/constants/global.constants';
import useThemeHook from '@/hooks/theme.hook';
import { colorAtom } from '@/stores/global.store';

export default function useThemeModeHook() {
  const { themeMode, setThemeMode } = useThemeHook();
  const setColorAtom = useSetAtom(colorAtom);
  const [systemTheme, setSystemTheme] = useState<MediaQueryList | undefined>();

  const checkInLocalStorage = useCallback(
    (): boolean => !!window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_MODE),
    []
  );

  const detectTheme = useCallback(
    (systemTheme?: MediaQueryList) => {
      let isDark = false;

      // Verify if toggled mode is system setting.
      if (themeMode.mode === THEME_MODE.SYSTEM) {
        if (systemTheme !== undefined && systemTheme.matches === true) {
          isDark = true;
        }
      } else {
        if (themeMode.mode === THEME_MODE.LIGHT) {
          isDark = false;
        } else {
          isDark = true;
        }
      }

      setThemeMode({ ...themeMode, isDark });
    },
    [themeMode, setThemeMode]
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
  }, [systemTheme, detectTheme]);

  // Update the HTML tag class.
  useEffect(() => {
    const HTML_TAG = 'html';
    const DARK_CLASS = 'dark';

    if (themeMode.isDark === true) {
      document.querySelector(HTML_TAG)?.classList.add(DARK_CLASS);
      setColorAtom(COLOR_DARK);
    } else {
      document.querySelector(HTML_TAG)?.classList.remove(DARK_CLASS);
      setColorAtom(COLOR);
    }
  }, [themeMode, setColorAtom]);

  return {};
}
