import styles from './footer-status-badge.module.css';

export const FooterStatusBadge = () => {
  return (
    <span className={styles.badge}>
      <span className={styles.indicator} aria-hidden="true" />
      AVAILABLE
    </span>
  );
};
