import { FooterStatusBadge } from '../footer-status-badge';
import styles from './footer-header.module.css';

export const FooterHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>JIREH NIMES</h1>
        <hr className={styles['titleDivider']} />
      </div>

      <FooterStatusBadge />
    </div>
  );
};
