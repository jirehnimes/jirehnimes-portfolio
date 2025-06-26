'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import {
  COLOR,
  COLOR_DARK,
  LOCAL_STORAGE_KEY,
  THEME_MODE,
} from '@/constants/global.constants';
import { colorAtom, themeModeAtom } from '@/stores/global.store';

export default function useThemeModeHook() {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);
  const setColorAtom = useSetAtom(colorAtom);
  const [systemTheme, setSystemTheme] = useState<MediaQueryList | undefined>();

  const checkInLocalStorage = useCallback(
    (): boolean => !!window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_MODE),
    []
  );

  const detectTheme = useCallback(
    (systemThemeQuery?: MediaQueryList) => {
      let isDark = false;
      let systemDark = themeMode.systemDark;

      // Verify if toggled mode is system setting.
      if (
        themeMode.mode === THEME_MODE.SYSTEM ||
        systemThemeQuery !== undefined
      ) {
        themeMode.mode = THEME_MODE.SYSTEM;

        if (systemThemeQuery!.matches === true) {
          isDark = true;
          systemDark = true;
        } else {
          isDark = false;
          systemDark = false;
        }
      } else {
        if (themeMode.mode === THEME_MODE.LIGHT) {
          themeMode.mode = THEME_MODE.LIGHT;
          isDark = false;
        } else {
          themeMode.mode = THEME_MODE.DARK;
          isDark = true;
        }
      }

      setThemeMode({ ...themeMode, isDark, systemDark });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setThemeMode]
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
