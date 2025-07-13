'use client';

import { TWorkingExperience } from '@/types/working-experience.type';
import { useListItemHook } from './list-item.hook';
import styles from './list-item.module.css';

type TListItemProps = {
  workingExperience: TWorkingExperience;
};

export default function ListItem({ workingExperience }: TListItemProps) {
  const { showMore, computeRange, toggleMoreDetails } = useListItemHook();

  return (
    <div className={styles.row}>
      <div className={styles.main} onClick={toggleMoreDetails}>
        <div className={styles['main__container']}>
          {/* <div className={styles.logo}></div> */}

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
