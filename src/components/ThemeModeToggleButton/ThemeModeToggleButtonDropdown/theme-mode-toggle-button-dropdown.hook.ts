'use client';

import { useAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  DOCUMENT_EVENT_LISTENER,
  THEME_MODE,
} from '@/constants/global.constants';
import { useUtilsHook } from '@/hooks/utils.hook';
import { themeModeAtom } from '@/stores/global.store';
import styles from './theme-mode-toggle-button-dropdown.module.css';

export default function useThemeModeToggleButtonDropdownHook(
  show: boolean,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toggleDropdown: Function
) {
  const domRef = useRef(null);
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);
  const { removeOutsideClickListener } = useUtilsHook();

  const hideClass = useMemo(() => (show === true ? '' : styles.hide), [show]);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (domRef.current && !(domRef.current as any).contains(event.target)) {
        removeOutsideClickListener(handleOutsideClick);
        toggleDropdown();
      }
    },
    [toggleDropdown, removeOutsideClickListener]
  );

  const selectThemeMode = (mode: THEME_MODE = THEME_MODE.SYSTEM) => {
    if (mode === THEME_MODE.SYSTEM) {
      setThemeMode({ ...themeMode, mode, isDark: themeMode.systemDark });
    } else if (mode === THEME_MODE.LIGHT) {
      setThemeMode({ ...themeMode, mode, isDark: false });
    } else {
      setThemeMode({ ...themeMode, mode, isDark: true });
    }

    removeOutsideClickListener(handleOutsideClick);
    toggleDropdown();
  };

  useEffect(() => {
    if (show === true) {
      window.addEventListener(
        DOCUMENT_EVENT_LISTENER.MOUSEDOWN,
        handleOutsideClick,
        true
      );
    } else {
      removeOutsideClickListener(handleOutsideClick);
    }
  }, [domRef, show, handleOutsideClick, removeOutsideClickListener]);

  return { domRef, hideClass, selectThemeMode };
}
