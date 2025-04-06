import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import IndexAboutWorkingExperiencesRow from './IndexAboutWorkingExperiencesRow';
import styles from './index-about-working-experiences.module.css';

export default function IndexAboutWorkingExperiences() {
  return (
    <section className={styles.container}>
      <IndexSectionTitle level={2}>WORKING EXPERIENCES</IndexSectionTitle>

      <div className={styles.experiences}>
        <IndexAboutWorkingExperiencesRow />
        <IndexAboutWorkingExperiencesRow />
        <IndexAboutWorkingExperiencesRow />
      </div>
    </section>
  );
}
