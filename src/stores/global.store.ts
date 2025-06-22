'use client';

import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import {
  COLOR,
  COLOR_DARK,
  LOCAL_STORAGE_KEY,
  THEME_MODE,
} from '@/constants/global.constants';
import { TThemeModeAtom } from '@/types/app.type';

export const themeModeAtom = atomWithStorage<TThemeModeAtom>(
  LOCAL_STORAGE_KEY.THEME_MODE,
  { mode: THEME_MODE.SYSTEM, isDark: false },
  undefined,
  { getOnInit: true }
);

export const navigationAtom = atom<boolean>(false);

export const scrollPositionAtom = atom<number>(0);

export const colorAtom = atom<typeof COLOR | typeof COLOR_DARK>(COLOR);
