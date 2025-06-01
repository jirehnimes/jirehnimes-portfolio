'use client';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { scrollPositionAtom } from '@/stores/global.store';
import styles from './scroll-top-button.module.css';

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
        <FontAwesomeIcon icon={faChevronUp} />
        <FontAwesomeIcon icon={faChevronUp} className={styles.arrow2} />
      </button>
    </div>
  );
}
