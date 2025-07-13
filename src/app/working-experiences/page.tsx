import WorkingExperiencesList from '@/components/WorkingExperiencesList';
import styles from './working-experiences.module.css';

export default function WorkingExperiences() {
  return (
    <div className={styles.page}>
      <h1>Working Experiences</h1>

      <WorkingExperiencesList />
    </div>
  );
}
