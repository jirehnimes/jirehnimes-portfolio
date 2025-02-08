'use client';

import { THEME_MODE } from '@/constants/global.constants';
import useThemeService from '@/services/theme.service';
import {
  faMoon,
  faSun,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function useThemeModeToggleButtonHook() {
  const { themeMode, toggleThemeMode } = useThemeService();

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
