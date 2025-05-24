'use client';

import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { navigationAtom } from '@/stores/global.store';
import styles from './navigation-bar.module.css';

export default function NavigationBar() {
  const showNavigation = useAtomValue<boolean>(navigationAtom);
  const hideClass = useMemo(
    () => (showNavigation === true ? styles.show : ''),
    [showNavigation]
  );

  return (
    <section className={`${styles['navigation-bar']} ${hideClass}`}>
      TEST
    </section>
  );
}
