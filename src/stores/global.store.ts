'use client';

import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import {
  COLOR,
  COLOR_DARK,
  LOCAL_STORAGE_KEY,
} from '@/constants/global.constants';

export const themeModeAtom = atomWithStorage<boolean>(
  LOCAL_STORAGE_KEY.THEME_MODE,
  false,
  undefined,
  { getOnInit: true }
);

export const navigationAtom = atom<boolean>(false);

export const scrollPositionAtom = atom<number>(0);

export const colorAtom = atom<typeof COLOR | typeof COLOR_DARK>(COLOR);
