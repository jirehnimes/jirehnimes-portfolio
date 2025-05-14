'use client';

import { useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { scrollPositionAtom } from '@/stores/global.store';

export const useScrollListenerHook = () => {
  const setScrollPosition = useSetAtom(scrollPositionAtom);

  const handleScroll = useCallback(
    (event: Event) => {
      const scrollElement = (event?.target as Document)?.scrollingElement;

      if (!!scrollElement === true) {
        const { scrollTop, scrollHeight, clientHeight } = scrollElement;

        const position = Math.ceil(
          (scrollTop / (scrollHeight - clientHeight)) * 100
        );

        console.log('Scroll position', position);
        setScrollPosition(position);
      } else {
        console.error("Scrolling element can't be detected.");
      }
    },
    [setScrollPosition]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);
};
