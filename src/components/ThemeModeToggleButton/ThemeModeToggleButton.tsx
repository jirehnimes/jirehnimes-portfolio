'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useThemeModeToggleButtonHook from './theme-mode-toggle-button.hook';
import './theme-mode-toggle-button.css';

export default function ThemeModeToggleButton() {
  const { themeIcon, toggleThemeMode } = useThemeModeToggleButtonHook();

  return (
    <button
      className="theme-mode-toggle-button"
      onClick={() => toggleThemeMode()}
    >
      <FontAwesomeIcon icon={themeIcon} />
    </button>
  );
}
