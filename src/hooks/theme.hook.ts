'use client';

import { useAtom } from 'jotai';
import { themeModeAtom } from '@/stores/global.store';
import { TThemeModeAtom } from '@/types/app.type';

export default function useThemeHook() {
  const [themeMode, setThemeMode] = useAtom<TThemeModeAtom>(themeModeAtom);

  const toggleThemeMode = (isDark?: boolean) => {
    // if (isDark !== undefined) {
    //   setThemeMode(isDark);
    // } else {
    //   setThemeMode(!themeMode);
    // }
  };

  return {
    themeMode,
    setThemeMode,
    toggleThemeMode,
  };
}
