'use client';

import styles from './navigation-bar-item.module.css';
import { STYLE } from '@/constants/styles.constants';
import { formatClasses } from '@/hooks/utils.hook';
import { TNavigationBarItem } from '@/types/app.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
