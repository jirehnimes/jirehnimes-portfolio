'use client';

import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { navigationAtom } from '@/stores/global.store';
import styles from './navigation-bar.module.css';
import { TNavigationBarItem } from '@/types/app.type';
import {
  faBusinessTime,
  faGripVertical,
  faNewspaper,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons';

export const useNavigationBarHook = () => {
  const NAVIGATION_ITEMS: TNavigationBarItem[] = [
    {
      name: 'About Me',
      icon: faUserNinja,
      target: '/#about',
    },
    {
      name: 'Work Experiences',
      icon: faBusinessTime,
      target: '/#work-experiences',
    },
    {
      name: 'Portfolio',
      icon: faGripVertical,
      target: '/#portfolio',
    },
    {
      name: 'Blog',
      icon: faNewspaper,
      target: '/#blog',
    },
  ];

  const showNavigation = useAtomValue<boolean>(navigationAtom);

  const hideClass = useMemo(
    () => (showNavigation === true ? styles.show : ''),
    [showNavigation]
  );

  return {
    NAVIGATION_ITEMS,
    hideClass,
  };
};
