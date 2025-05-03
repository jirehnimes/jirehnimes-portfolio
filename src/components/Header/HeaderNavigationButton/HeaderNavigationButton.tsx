'use client';

import { useAtom } from 'jotai';
import { navigationAtom } from '@/stores/global.store';
import styles from './header-navigation-button.module.css';

export default function HeaderNavigationButton() {
  const [showNavigation, setShowNavigation] = useAtom(navigationAtom);

  const toggleNavigation = () => setShowNavigation(!showNavigation);

  return (
    <button
      className={styles['header-navigation-button']}
      onClick={toggleNavigation}
    ></button>
  );
}
