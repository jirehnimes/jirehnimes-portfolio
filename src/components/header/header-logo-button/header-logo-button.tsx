'use client';

import Image from 'next/image';
import styles from './header-logo-button.module.css';

export const HeaderLogoButton = () => {
  return (
    <button className={styles.button}>
      <Image src="/icons/icon.png" alt="Jireh Nimes" width={52} height={52} />
    </button>
  );
};
