'use client';

import styles from './footer-copyright.module.css';

export const FooterCopyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <p className={styles.copyright}>&copy; {year} Jireh Nimes</p>
    </div>
  );
};
