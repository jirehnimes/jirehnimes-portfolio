'use client';

import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { LOCAL_STORAGE_KEY } from '@/constants/global.constants';

export const themeModeAtom = atomWithStorage<boolean>(
  LOCAL_STORAGE_KEY.THEME_MODE,
  false,
  undefined,
  { getOnInit: true }
);

export const navigationAtom = atom<boolean>(false);
