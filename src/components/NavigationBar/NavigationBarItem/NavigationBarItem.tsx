'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { STYLE } from '@/constants/styles.constants';
import { TNavigationBarItem } from '@/types/app.type';
import { formatClasses } from '@/utils/common.util';
import styles from './navigation-bar-item.module.css';

type TNavigationBarItemProps = {
  key?: number;
  navigationBarItem: TNavigationBarItem;
};

export default function NavigationBarItem({
  navigationBarItem,
}: TNavigationBarItemProps) {
  return (
    <div className={formatClasses([STYLE.BOX_SIZING__BORDER_BOX, styles.item])}>
      <a href={navigationBarItem.target}>
        <FontAwesomeIcon
          icon={navigationBarItem.icon}
          className={styles.icon}
        />
      </a>
    </div>
  );
}
