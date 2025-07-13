import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import WorkingExperiencesList from '@/components/WorkingExperiencesList';
import RedirectButton from './RedirectButton';
import styles from './index-about-working-experiences.module.css';

export default function IndexAboutWorkingExperiences() {
  return (
    <section id="work-experiences" className={styles.container}>
      <div className="margin-auto">
        <IndexSectionTitle level={2}>WORKING EXPERIENCES</IndexSectionTitle>

        <WorkingExperiencesList />

        <RedirectButton />
      </div>
    </section>
  );
}
