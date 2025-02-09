'use client';

import useThemeHook from '@/hooks/theme.hook';
import {
  faMoon,
  faSun,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function useThemeModeToggleButtonHook() {
  const { themeMode, toggleThemeMode } = useThemeHook();
  const [themeIcon, setThemeIcon] = useState<IconDefinition>(faSun);

  useEffect(() => {
    if (themeMode === true) {
      setThemeIcon(faMoon);
    } else {
      setThemeIcon(faSun);
    }
  }, [themeMode]);

  return {
    themeIcon,
    toggleThemeMode,
  };
}
