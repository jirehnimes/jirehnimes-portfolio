'use client';

import { useAtom } from 'jotai';
import { themeModeAtom } from '@/stores/global.store';
import { THEME_MODE } from '@/constants/global.constants';

export default function useThemeService() {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);
  const themeModeText = themeMode === true ? THEME_MODE.DARK : THEME_MODE.LIGHT;

  const toggleThemeMode = () => setThemeMode(!themeMode);

  return {
    themeMode,
    themeModeText,
    toggleThemeMode,
  };
}
