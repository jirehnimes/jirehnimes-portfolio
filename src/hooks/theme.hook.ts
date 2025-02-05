'use client';

import { useEffect } from 'react';

export default function useThemeHook() {
  console.log('THEME HOOK');

  useEffect(() => {
    // Get system theme mode as dark.
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

    systemTheme.addEventListener('change', () => {
      // Verify if it's dark mode.
      if (systemTheme.matches) {
        console.log('Dark');
      } else {
        console.log('Light');
      }
    });
  });

  return {};
}
