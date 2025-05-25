'use client';

import { useNavigationBarHook } from './navigation-bar.hook';
import styles from './navigation-bar.module.css';
import { formatClasses } from '@/hooks/utils.hook';
import NavigationBarItem from './NavigationBarItem';
import { TNavigationBarItem } from '@/types/app.type';

export default function NavigationBar() {
  const { NAVIGATION_ITEMS, hideClass } = useNavigationBarHook();

  const navigationBarItems = NAVIGATION_ITEMS.map(
    (navigationBarItem: TNavigationBarItem, index: number) => (
      <NavigationBarItem key={index} navigationBarItem={navigationBarItem} />
    )
  );

  return (
    <section className={formatClasses([styles.section, hideClass])}>
      {navigationBarItems}
    </section>
  );
}
