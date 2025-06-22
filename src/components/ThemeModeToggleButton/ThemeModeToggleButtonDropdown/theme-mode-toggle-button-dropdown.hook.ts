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

  const selectThemeMode = (_themeMode: THEME_MODE = THEME_MODE.SYSTEM) => {
    setThemeMode({ ...themeMode, mode: _themeMode });
    toggleDropdown();
  };

  return { hideClass, selectThemeMode };
}
