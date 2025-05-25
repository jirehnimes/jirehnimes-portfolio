'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header-navigation-button.module.css';
import useHeaderNavigationButtonHook from './header-navigation-button.hook';
import { formatClasses } from '@/hooks/utils.hook';

export default function HeaderNavigationButton() {
  const { componentRef, faBars, faXmark, toggleNavigation } =
    useHeaderNavigationButtonHook();

  return (
    <button
      ref={componentRef}
      className={formatClasses(['box-sizing__border-box', styles.button])}
      onClick={toggleNavigation}
    >
      <div className={formatClasses(['box-sizing__border-box', styles.icon])}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div
        className={formatClasses([
          'box-sizing__border-box',
          styles.icon,
          styles['icon__xmark'],
        ])}
      >
        <FontAwesomeIcon icon={faXmark} className={styles.icon} />
      </div>
    </button>
  );
}
