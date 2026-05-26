import { workingExperiences } from '@/data/working-experience.data';
import { TWorkingExperience } from '@/types/working-experience.type';
import { IndexSectionTitle } from '@/components/index/index-section-title';
import { IndexAboutWorkingExperiencesRow } from './index-about-working-experiences-row';
import styles from './index-about-working-experiences.module.css';

export const IndexAboutWorkingExperiences = () => {
  const workingExperiencesRows = workingExperiences.map(
    (workingExperience: TWorkingExperience, index: number) => (
      <IndexAboutWorkingExperiencesRow
        key={index}
        workingExperience={workingExperience}
      />
    )
  );

  return (
    <section id="work-experiences" className={styles.container}>
      <div className="margin-auto">
        <IndexSectionTitle level={2}>WORKING EXPERIENCES</IndexSectionTitle>
        <div className={styles.experiences}>{workingExperiencesRows}</div>
      </div>
    </section>
  );
};
