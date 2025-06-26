import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { THEME_MODE } from '@/constants/global.constants';

export type TNavigationBarItem = {
  name: string;
  icon: IconDefinition;
  target: string;
};

export type TThemeModeAtom = {
  mode: THEME_MODE;
  isDark: boolean;
  systemDark: boolean;
};
