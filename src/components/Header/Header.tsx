'use client';

import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import ThemeModeToggleButton from '../ThemeModeToggleButton';
import HeaderLogoButton from './HeaderLogoButton';
import HeaderNavigationButton from './HeaderNavigationButton';
import { scrollPositionAtom } from '@/stores/global.store';
import styles from './header.module.css';

export default function Header() {
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
}
