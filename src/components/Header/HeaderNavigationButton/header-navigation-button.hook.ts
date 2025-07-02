'use client';

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAtom } from 'jotai';
import { useMemo, useRef } from 'react';
import { navigationAtom } from '@/stores/global.store';

export default function useHeaderNavigationButtonHook() {
  const componentRef = useRef(null);
  const [showNavigation, setShowNavigation] = useAtom(navigationAtom);

  const navigationIcon = useMemo(
    () => (showNavigation === true ? faXmark : faBars),
    [showNavigation]
  );

  const toggleNavigation = () => {
    if (showNavigation === true) {
      return setShowNavigation(false);
    }

    return setShowNavigation(true);
  };

  return {
    componentRef,
    navigationIcon,
    toggleNavigation,
  };
}
