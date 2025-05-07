import ThemeModeToggleButton from '../ThemeModeToggleButton';
import HeaderLogoButton from './HeaderLogoButton';
import HeaderNavigationButton from './HeaderNavigationButton';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogoButton />

      <div className={styles['action-container']}>
        <ThemeModeToggleButton />
        <HeaderNavigationButton />
      </div>
    </header>
  );
}
