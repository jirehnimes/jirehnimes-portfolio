'use client';

import {
  faBusinessTime,
  faGripVertical,
  faNewspaper,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { DOCUMENT_EVENT_LISTENER } from '@/constants/global.constants';
import { useUtilsHook } from '@/hooks/utils.hook';
import { navigationAtom } from '@/stores/global.store';
import { TNavigationBarItem } from '@/types/app.type';
import styles from './navigation-bar.module.css';

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
  const HEADER_NAVIGATION_BUTTON_CLASS = 'header-navigation-button-module';

  const domRef = useRef(null);
  const [showNavigation, setShowNavigation] = useAtom<boolean>(navigationAtom);
  const { removeOutsideClickListener } = useUtilsHook();

  const hideClass = useMemo(
    () => (showNavigation === true ? styles.show : ''),
    [showNavigation]
  );

  const checkIfHeaderNavigationButton = (
    targetClassList: DOMTokenList
  ): boolean => {
    const targetClassListString: string = [...targetClassList].join(',');

    return targetClassListString.includes(HEADER_NAVIGATION_BUTTON_CLASS);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      const domTarget = event.target as HTMLElement | null;

      if (!!domTarget === true) {
        if (
          domRef.current &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          !(domRef.current as any).contains(domTarget) &&
          checkIfHeaderNavigationButton(domTarget!.classList) === false
        ) {
          removeOutsideClickListener(handleOutsideClick);
          setShowNavigation(false);
        }
      }
    },
    [setShowNavigation, removeOutsideClickListener]
  );

  useEffect(() => {
    if (showNavigation === true) {
      window.addEventListener(
        DOCUMENT_EVENT_LISTENER.MOUSEDOWN,
        handleOutsideClick,
        true
      );
    } else {
      removeOutsideClickListener(handleOutsideClick);
    }
  }, [domRef, showNavigation, handleOutsideClick, removeOutsideClickListener]);

  return {
    NAVIGATION_ITEMS,
    domRef,
    hideClass,
  };
};
