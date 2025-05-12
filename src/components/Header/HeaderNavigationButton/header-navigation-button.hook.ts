'use client';

import { utils, createScope, DOMTargetsArray, createTimeline } from 'animejs';
import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import {
  faBars,
  faXmark,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { navigationAtom } from '@/stores/global.store';

export default function useHeaderNavigationButtonHook() {
  const componentRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scope = useRef<any>(null);
  const paths = useRef<DOMTargetsArray>([]);
  const [showNavigation, setShowNavigation] = useAtom(navigationAtom);
  const [toggleIcon, setToggleIcon] = useState<IconDefinition>(faBars);

  // const toggleNavigation = () => setShowNavigation(!showNavigation);
  const toggleNavigation = () => {
    const newValue = !showNavigation;

    const [iconElement] = paths.current;

    createTimeline()
      .add(iconElement, {
        opacity: 0,
        duration: 800,
        onComplete: () => {
          if (newValue === true) {
            setToggleIcon(faXmark);
          } else {
            setToggleIcon(faBars);
          }
        },
      })
      .add(iconElement, { opacity: 100, duration: 800 });

    setShowNavigation(newValue);
  };

  // Anime.js detect all SVG path element.
  useEffect(() => {
    scope.current = createScope({ root: componentRef }).add(() => {
      paths.current = utils.$('path');
      console.log(paths.current);
    });

    return () => scope.current.revert();
  }, []);

  return {
    componentRef,
    toggleIcon,
    toggleNavigation,
  };
}
