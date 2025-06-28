'use client';

import { TNavigationBarItem } from '@/types/app.type';
import { formatClasses } from '@/utils/common.util';
import NavigationBarItem from './NavigationBarItem';
import { useNavigationBarHook } from './navigation-bar.hook';
import styles from './navigation-bar.module.css';

export default function NavigationBar() {
  const { NAVIGATION_ITEMS, domRef, hideClass } = useNavigationBarHook();

  const navigationBarItems = NAVIGATION_ITEMS.map(
    (navigationBarItem: TNavigationBarItem, index: number) => (
      <NavigationBarItem key={index} navigationBarItem={navigationBarItem} />
    )
  );

  return (
    <section
      ref={domRef}
      className={formatClasses([styles.section, hideClass])}
    >
      {navigationBarItems}
    </section>
  );
}
