'use client';

import {
  faDesktop,
  faMoon,
  faSun,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { THEME_MODE } from '@/constants/global.constants';
import { themeModeAtom } from '@/stores/global.store';

export default function useThemeModeToggleButtonHook() {
  const themeMode = useAtomValue(themeModeAtom);
  const [themeIcon, setThemeIcon] = useState<IconDefinition>(faDesktop);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    if (themeMode.mode === THEME_MODE.SYSTEM) {
      setThemeIcon(faDesktop);
    } else if (themeMode.mode === THEME_MODE.LIGHT) {
      setThemeIcon(faSun);
    } else {
      setThemeIcon(faMoon);
    }
  }, [themeMode, setThemeIcon]);

  return {
    themeIcon,
    showDropdown,
    toggleDropdown,
  };
}
