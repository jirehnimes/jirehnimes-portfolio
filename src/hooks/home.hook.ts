import { THEME_MODE } from '@/constants/global.constants';
import { useEffect, useState } from 'react';
import useThemeHook from './theme.hook';

export default function useHomeHook() {
  const { themeMode, toggleThemeMode } = useThemeHook();
  const [themeText, setThemeText] = useState<THEME_MODE>(THEME_MODE.LIGHT);

  useEffect(() => {
    if (themeMode === true) {
      setThemeText(THEME_MODE.DARK);
    } else {
      setThemeText(THEME_MODE.LIGHT);
    }
  }, [themeMode]);

  return {
    themeText,
    toggleThemeMode,
  };
}
