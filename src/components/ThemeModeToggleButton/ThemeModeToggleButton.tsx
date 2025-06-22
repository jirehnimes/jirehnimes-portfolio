'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeModeToggleButtonDropdown from './ThemeModeToggleButtonDropdown';
import useThemeModeToggleButtonHook from './theme-mode-toggle-button.hook';
import styles from './theme-mode-toggle-button.module.css';

export default function ThemeModeToggleButton() {
  const { themeIcon, showDropdown, toggleDropdown } =
    useThemeModeToggleButtonHook();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={themeIcon} className={styles.icon} />
      </button>

      <ThemeModeToggleButtonDropdown
        show={showDropdown}
        toggleDropdown={toggleDropdown}
      />
    </div>
  );
}
