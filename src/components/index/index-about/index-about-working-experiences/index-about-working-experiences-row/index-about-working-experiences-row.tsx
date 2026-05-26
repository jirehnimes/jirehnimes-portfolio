'use client';

import { TWorkingExperience } from '@/types/working-experience.type';
import { IndexAboutWorkingExperiencesRowDetails } from './index-about-working-experiences-row-details';
import { useIndexAboutWorkingExperiencesRowHook } from './index-about-working-experiences-row.hook';
import styles from './index-about-working-experiences-row.module.css';

type TIndexAboutWorkingExperiencesRowProps = {
  workingExperience: TWorkingExperience;
};

export const IndexAboutWorkingExperiencesRow = ({
  workingExperience,
}: TIndexAboutWorkingExperiencesRowProps) => {
  const { isMoreDetailsVisible, computeRange, toggleMoreDetails } =
    useIndexAboutWorkingExperiencesRowHook();

  return (
    <div className={styles.row}>
      <div className={styles.main} onClick={toggleMoreDetails}>
        <div className={styles['main__container']}>
          <div className={styles['main__details']}>
            <div className={styles['main__details__job-title']}>
              {workingExperience.jobTitle}
            </div>

            <div className={styles['main__details__company']}>
              {workingExperience.company.name}
            </div>

            <div className={styles['main__details__range']}>
              {computeRange(
                workingExperience.startDate,
                workingExperience.endDate
              )}
            </div>
          </div>
        </div>
      </div>

      <IndexAboutWorkingExperiencesRowDetails
        details={workingExperience.details}
        isVisible={isMoreDetailsVisible}
        onClose={toggleMoreDetails}
      />
    </div>
  );
};
