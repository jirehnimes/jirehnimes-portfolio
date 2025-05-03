import styles from './header.module.css';
import HeaderNavigationButton from './HeaderNavigationButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles['logo-container']}></button>
      <HeaderNavigationButton />
    </header>
  );
}
