'use client';

import { useAtom } from 'jotai';
import { LOCAL_STORAGE_KEY } from '@/constants/global.constants';
import { themeModeAtom } from '@/stores/global.store';

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
