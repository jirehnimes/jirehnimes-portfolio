'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { colorAtomListener, scrollPositionAtom } from '@/stores/global.store';

export const useScrollListenerHook = () => {
  const setScrollPosition = useSetAtom(scrollPositionAtom);
  const [colorAtom] = colorAtomListener;
  const [color] = useAtom(colorAtom);

  console.log(color);

  const computeScrollPosition = useCallback(
    (targetDOM: Document) => {
      try {
        const scrollElement = targetDOM?.scrollingElement;

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
      } catch (error) {
        console.error(error);
      }
    },
    [setScrollPosition]
  );

  const handleScroll = useCallback(
    (event: Event) => {
      computeScrollPosition(event?.target as Document);
    },
    [computeScrollPosition]
  );

  useEffect(() => {
    computeScrollPosition(document);

    window.addEventListener('scroll', handleScroll);
  }, [handleScroll, computeScrollPosition]);
};
