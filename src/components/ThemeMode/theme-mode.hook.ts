'use client';

import { useEffect } from 'react';

export default function useThemeModeHook() {
  console.log('THEME HOOK');

  const detectTheme = (systemTheme: MediaQueryList) => {
    // Verify if it's dark mode.
    if (systemTheme.matches) {
      console.log('Dark');
    } else {
      console.log('Light');
    }
  };

  useEffect(() => {
    // Get system theme mode as dark.
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Initial
    detectTheme(systemTheme);

    systemTheme.addEventListener('change', () => detectTheme(systemTheme));
  }, []);

  return {};
}
