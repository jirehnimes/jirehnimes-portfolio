'use client';

import { useState } from 'react';
import styles from './index-about-working-experiences-row.module.css';

enum TOGGLE_MORE_DETAILS {
  SHOW = '',
  HIDE = 'more-details__hide',
}

export default function IndexAboutWorkingExperiencesRow() {
  const [showMore, setShowMore] = useState<TOGGLE_MORE_DETAILS>(
    TOGGLE_MORE_DETAILS.HIDE
  );

  const toggleMoreDetails = () => {
    if (showMore === TOGGLE_MORE_DETAILS.SHOW) {
      setShowMore(TOGGLE_MORE_DETAILS.HIDE);
    } else {
      setShowMore(TOGGLE_MORE_DETAILS.SHOW);
    }
  };

  return (
    <div className={styles.row}>
      <div className={styles['main-dummy']}></div>
      <div className={styles.main} onClick={toggleMoreDetails}>
        <div className={styles['main__container']}>
          <div className={styles.logo}></div>
          <div className={styles['main-details']}>
            <div className={styles['main-details__job-title']}>JOB TITLE</div>
            <div className={styles['main-details__company']}>COMPANY NAME</div>
            <div className={styles['main-details__range']}>
              Jan. 01, 2025 - Dec. 31, 2025 (1 year)
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles['more-details']} ${styles[showMore]}`}>
        {/* prettier-ignore */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra
          laoreet leo, sit amet bibendum neque ullamcorper sit amet. Praesent ac
          malesuada est. Integer pretium tempor aliquet. Aliquam velit leo,
          blandit sit amet ultricies sit amet, aliquet vel quam.

          Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. In viverra laoreet leo,
          sit amet bibendum neque ullamcorper sit amet. Praesent ac malesuada
          est. Integer pretium tempor aliquet. Aliquam velit leo, blandit sit
          amet ultricies sit amet, aliquet vel quam.
        </p>
      </div>
    </div>
  );
}
