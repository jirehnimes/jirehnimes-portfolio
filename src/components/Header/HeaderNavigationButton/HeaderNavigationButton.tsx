'use client';

import { useAtom } from 'jotai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { navigationAtom } from '@/stores/global.store';
import styles from './header-navigation-button.module.css';

export default function HeaderNavigationButton() {
  const [showNavigation, setShowNavigation] = useAtom(navigationAtom);

  const toggleNavigation = () => setShowNavigation(!showNavigation);

  return (
    <button
      className={styles['header-navigation-button']}
      onClick={toggleNavigation}
    >
      <FontAwesomeIcon icon={faBars} className={styles.icon} />
    </button>
  );
}
