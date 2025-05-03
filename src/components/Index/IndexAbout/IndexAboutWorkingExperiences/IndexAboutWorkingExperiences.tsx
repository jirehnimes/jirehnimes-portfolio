import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import IndexAboutWorkingExperiencesRow from './IndexAboutWorkingExperiencesRow';
import styles from './index-about-working-experiences.module.css';
import { workingExperiences } from '@/data/working-experience.data';
import { TWorkingExperience } from '@/types/working-experience.type';

export default function IndexAboutWorkingExperiences() {
  const workingExperiencesRows = workingExperiences.map(
    (workingExperience: TWorkingExperience, index: number) => (
      <IndexAboutWorkingExperiencesRow
        key={index}
        workingExperience={workingExperience}
      />
    )
  );

  return (
    <section className={styles.container}>
      <IndexSectionTitle level={2}>WORKING EXPERIENCES</IndexSectionTitle>

      <div className={styles.experiences}>{workingExperiencesRows}</div>
    </section>
  );
}
