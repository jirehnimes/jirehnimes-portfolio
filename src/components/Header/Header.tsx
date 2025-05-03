import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles['logo-container']}></button>
      <button className={styles['navigation-container']}></button>
    </header>
  );
}
