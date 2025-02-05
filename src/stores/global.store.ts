import { atomWithStorage } from 'jotai/utils';

export const themeModeAtom = atomWithStorage<boolean>(
  'theme-mode',
  false,
  undefined,
  { getOnInit: true }
);
