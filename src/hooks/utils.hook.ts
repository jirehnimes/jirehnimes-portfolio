import { useCallback } from 'react';
import { DOCUMENT_EVENT_LISTENER } from '@/constants/global.constants';

// Stateless Hook
export const useUtilsHook = () => {
  const removeOutsideClickListener = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (targetFunction: (this: Window, ev: MouseEvent) => any) => {
      window.removeEventListener(
        DOCUMENT_EVENT_LISTENER.MOUSEDOWN,
        targetFunction,
        true
      );
    },
    []
  );

  return {
    removeOutsideClickListener,
  };
};
