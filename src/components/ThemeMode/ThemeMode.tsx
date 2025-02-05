'use client';

import { ReactNode } from 'react';
import useThemeModeHook from './theme-mode.hook';

type ThemeModeType = {
  children: ReactNode;
};

export default function ThemeMode({ children }: ThemeModeType) {
  useThemeModeHook();

  return <>{children}</>;
}
