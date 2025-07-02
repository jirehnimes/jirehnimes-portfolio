'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { STYLE } from '@/constants/styles.constants';
import { formatClasses } from '@/utils/common.util';
import useHeaderNavigationButtonHook from './header-navigation-button.hook';
import styles from './header-navigation-button.module.css';

export default function HeaderNavigationButton() {
  const { componentRef, navigationIcon, toggleNavigation } =
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
        <FontAwesomeIcon
          icon={navigationIcon}
          className={styles['icon__svg']}
        />
      </div>
    </button>
  );
}
