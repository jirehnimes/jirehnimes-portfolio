'use client';

import { faDesktop, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { THEME_MODE } from '@/constants/global.constants';
import { formatClasses } from '@/hooks/utils.hook';
import useThemeModeToggleButtonDropdownHook from './theme-mode-toggle-button-dropdown.hook';
import styles from './theme-mode-toggle-button-dropdown.module.css';

type TThemeModeToggleButtonDropdownProps = {
  show?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toggleDropdown: Function;
};

export default function ThemeModeToggleButtonDropdown({
  show = false,
  toggleDropdown,
}: TThemeModeToggleButtonDropdownProps) {
  const { domRef, hideClass, selectThemeMode } =
    useThemeModeToggleButtonDropdownHook(show, toggleDropdown);

  return (
    <div ref={domRef} className={formatClasses([styles.container, hideClass])}>
      <button
        className={styles.button}
        onClick={() => selectThemeMode(THEME_MODE.SYSTEM)}
      >
        <FontAwesomeIcon icon={faDesktop} className={styles.icon} />
      </button>
      <button
        className={styles.button}
        onClick={() => selectThemeMode(THEME_MODE.LIGHT)}
      >
        <FontAwesomeIcon icon={faSun} className={styles.icon} />
      </button>
      <button
        className={styles.button}
        onClick={() => selectThemeMode(THEME_MODE.DARK)}
      >
        <FontAwesomeIcon icon={faMoon} className={styles.icon} />
      </button>
    </div>
  );
}
