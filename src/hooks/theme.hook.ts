'use client';

import { useAtom } from 'jotai';
import { themeModeAtom } from '@/stores/global.store';
import { LOCAL_STORAGE_KEY } from '@/constants/global.constants';

export default function useThemeHook() {
  const [themeMode, setThemeMode] = useAtom<boolean>(themeModeAtom);

  const checkInLocalStorage = (): boolean =>
    !!window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_MODE);

  const toggleThemeMode = (isDark?: boolean) => {
    if (isDark !== undefined) {
      setThemeMode(isDark);
    } else {
      setThemeMode(!themeMode);
    }
  };

  return {
    themeMode,
    checkInLocalStorage,
    toggleThemeMode,
  };
}
