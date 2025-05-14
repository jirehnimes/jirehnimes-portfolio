'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header-navigation-button.module.css';
import useHeaderNavigationButtonHook from './header-navigation-button.hook';

export default function HeaderNavigationButton() {
  const { componentRef, toggleIcon, toggleNavigation } =
    useHeaderNavigationButtonHook();

  return (
    <button
      ref={componentRef}
      className={styles['header-navigation-button']}
      onClick={toggleNavigation}
    >
      <FontAwesomeIcon icon={toggleIcon} className={`${styles.icon}`} />
      {/* <FontAwesomeIcon
        icon={faXmark}
        className={`${styles.icon} ${styles['icon-xmark']}`}
      /> */}
    </button>
  );
}
