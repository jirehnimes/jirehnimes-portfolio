import { IndexSectionTitle } from '@/components/index/index-section-title';
import { IndexAboutCertifications } from './index-about-certifications';
import { IndexAboutDescription } from './index-about-description';
import { IndexAboutWorkingExperiences } from './index-about-working-experiences';
import styles from './index-about.module.css';

export const IndexAbout = () => {
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <div className="margin-auto">
          <IndexSectionTitle>ABOUT ME</IndexSectionTitle>
          <IndexAboutDescription />
        </div>
      </div>
      <IndexAboutCertifications />
      <IndexAboutWorkingExperiences />
    </section>
  );
};
