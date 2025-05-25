'use client';

import {
  utils,
  createScope,
  DOMTargetsArray,
  createTimeline,
  animate,
} from 'animejs';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { navigationAtom } from '@/stores/global.store';

export default function useHeaderNavigationButtonHook() {
  const componentRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scope = useRef<any>(null);
  const paths = useRef<DOMTargetsArray>([]);
  const [showNavigation, setShowNavigation] = useAtom(navigationAtom);

  const toggleNavigation = () => {
    const [barsPath, xmarkPath] = paths.current;
    const newValue = !showNavigation;
    const fromIcon = newValue === true ? barsPath : xmarkPath;
    const toIcon = newValue === true ? xmarkPath : barsPath;

    const fromIconTimeline = animate(fromIcon, {
      opacity: 0,
      duration: 200,
    });

    createTimeline().sync(fromIconTimeline).add(toIcon, {
      opacity: 1,
      duration: '-=200',
    });

    setShowNavigation(newValue);
  };

  // Anime.js detect all SVG path element.
  useEffect(() => {
    scope.current = createScope({ root: componentRef }).add(() => {
      paths.current = utils.$('path');
    });

    return () => scope.current.revert();
  }, []);

  return {
    componentRef,
    faBars,
    faXmark,
    toggleNavigation,
  };
}
