'use client';

import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { scrollPositionAtom } from '@/stores/global.store';
import ThemeModeToggleButton from '../ThemeModeToggleButton';
import { HeaderLogoButton } from './header-logo-button';
import { HeaderNavigationButton } from './header-navigation-button';
import styles from './header.module.css';

export const Header = () => {
  const scrollPosition = useAtomValue<number>(scrollPositionAtom);

  const scrolledClass = useMemo(
    () => (scrollPosition > 4 ? 'scrolled' : ''),
    [scrollPosition]
  );

  return (
    <header className={`${styles.header} ${styles[scrolledClass]}`}>
      <HeaderLogoButton />

      <div className={styles['action-container']}>
        <ThemeModeToggleButton />
        <HeaderNavigationButton />
      </div>
    </header>
  );
};
