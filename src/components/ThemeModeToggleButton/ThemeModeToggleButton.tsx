'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useThemeModeToggleButtonHook from './theme-mode-toggle-button.hook';
import styles from './theme-mode-toggle-button.module.css';

export default function ThemeModeToggleButton() {
  const { themeIcon, toggleThemeMode } = useThemeModeToggleButtonHook();

  return (
    <button className={styles.button} onClick={() => toggleThemeMode()}>
      <FontAwesomeIcon icon={themeIcon} className={styles.icon} />
    </button>
  );
}
