import { formatClasses } from '@/utils/common.util';
import { FooterStatusBadge } from '../footer-status-badge';
import styles from './footer-header.module.css';

export const FooterHeader = () => {
  return (
    <div className={styles.container}>
      <div className={formatClasses([styles.innerContainer, 'margin-auto'])}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>JIREH NIMES</h1>
          <h3 className={styles.subtitle}>
            Computer Engineer | Technical Lead | Developer | Marathoner
          </h3>
          <hr className={styles['titleDivider']} />
        </div>

        <FooterStatusBadge />
      </div>
    </div>
  );
};
