'use client';

import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { THEME_MODE } from '@/constants/global.constants';
import { themeModeAtom } from '@/stores/global.store';
import styles from './theme-mode-toggle-button-dropdown.module.css';

export default function useThemeModeToggleButtonDropdownHook(
  show: boolean,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toggleDropdown: Function
) {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);

  const hideClass = useMemo(() => (show === true ? '' : styles.hide), [show]);

  const selectThemeMode = (mode: THEME_MODE = THEME_MODE.SYSTEM) => {
    if (mode === THEME_MODE.SYSTEM) {
      setThemeMode({ ...themeMode, mode, isDark: themeMode.systemDark });
    } else if (mode === THEME_MODE.LIGHT) {
      setThemeMode({ ...themeMode, mode, isDark: false });
    } else {
      setThemeMode({ ...themeMode, mode, isDark: true });
    }

    toggleDropdown();
  };

  return { hideClass, selectThemeMode };
}
