'use client';

import { useRef, useState } from 'react';
import { workingExperiences } from '@/data/working-experience.data';
import { TWorkingExperience } from '@/types/working-experience.type';
import { IndexSectionTitle } from '@/components/index/index-section-title';
import { IndexAboutWorkingExperiencesRow } from './index-about-working-experiences-row';
import styles from './index-about-working-experiences.module.css';

const INITIAL_VISIBLE_COUNT = 4;

export const IndexAboutWorkingExperiences = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const visibleItems = workingExperiences.slice(0, INITIAL_VISIBLE_COUNT);
  const extraItems = workingExperiences.slice(INITIAL_VISIBLE_COUNT);
  const hasExtra = extraItems.length > 0;

  const renderRow = (workingExperience: TWorkingExperience, index: number) => (
    <IndexAboutWorkingExperiencesRow
      key={index}
      workingExperience={workingExperience}
    />
  );

  return (
    <section id="work-experiences" className={styles.container} ref={topRef}>
      <div className="margin-auto">
        <IndexSectionTitle level={2}>WORKING EXPERIENCES</IndexSectionTitle>
        <div className={styles.experiences}>
          {visibleItems.map(renderRow)}

          {hasExtra && (
            <div
              className={`${styles['extra-items']} ${isExpanded ? styles['extra-items--expanded'] : ''}`}
            >
              <div className={styles['extra-items__inner']}>
                {extraItems.map((exp, i) =>
                  renderRow(exp, INITIAL_VISIBLE_COUNT + i)
                )}
              </div>
            </div>
          )}

          {hasExtra && (
            <button
              className={styles['view-more-btn']}
              onClick={() => {
                if (isExpanded) {
                  topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setIsExpanded((prev) => !prev);
              }}
            >
              {isExpanded ? 'View Less' : 'View More'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
