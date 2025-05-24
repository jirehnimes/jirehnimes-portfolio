'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import styles from './scroll-top-button.module.css';
import { useAtomValue } from 'jotai';
import { scrollPositionAtom } from '@/stores/global.store';
import { useMemo } from 'react';

export default function ScrollTopButton() {
  const scrollPosition = useAtomValue(scrollPositionAtom);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const showClass = useMemo(
    () => (scrollPosition > 10 ? styles.show : ''),
    [scrollPosition]
  );

  return (
    <div className={`${styles.container} ${showClass}`}>
      <button className={styles.button} onClick={handleScrollToTop}>
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </div>
  );
}
