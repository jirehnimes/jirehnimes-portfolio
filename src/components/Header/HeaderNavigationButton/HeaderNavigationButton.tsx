'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header-navigation-button.module.css';
import useHeaderNavigationButtonHook from './header-navigation-button.hook';
import { formatClasses } from '@/hooks/utils.hook';
import { STYLE } from '@/constants/styles.constants';

export default function HeaderNavigationButton() {
  const { componentRef, faBars, faXmark, toggleNavigation } =
    useHeaderNavigationButtonHook();

  return (
    <button
      ref={componentRef}
      className={formatClasses([STYLE.BOX_SIZING__BORDER_BOX, styles.button])}
      onClick={toggleNavigation}
    >
      <div
        className={formatClasses([STYLE.BOX_SIZING__BORDER_BOX, styles.icon])}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div
        className={formatClasses([
          STYLE.BOX_SIZING__BORDER_BOX,
          styles.icon,
          styles['icon__xmark'],
        ])}
      >
        <FontAwesomeIcon icon={faXmark} className={styles.icon} />
      </div>
    </button>
  );
}
