'use client';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

import styles from './index-about-working-experiences-row-details.module.css';

type TIndexAboutWorkingExperiencesRowDetailsProps = {
  details?: ReactNode;
  isVisible: boolean;
  onClose: () => void;
};

export const IndexAboutWorkingExperiencesRowDetails = ({
  details,
  isVisible,
  onClose,
}: TIndexAboutWorkingExperiencesRowDetailsProps) => {
  return (
    <div
      className={`${styles['more-details']} ${!isVisible ? styles['more-details--hidden'] : ''}`.trim()}
    >
      <div className={styles['more-details__content']}>
        {details || 'No additional details provided.'}
      </div>
      <button
        className={styles['more-details__close']}
        onClick={onClose}
        aria-label="Close details"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
};
