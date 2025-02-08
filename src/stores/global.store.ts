'use client';

import { LOCAL_STORAGE_KEY } from '@/constants/global.constants';
import { atomWithStorage } from 'jotai/utils';

export const themeModeAtom = atomWithStorage<boolean>(
  LOCAL_STORAGE_KEY.THEME_MODE,
  false,
  undefined,
  { getOnInit: true }
);
