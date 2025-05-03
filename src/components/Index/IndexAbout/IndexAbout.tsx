import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import IndexAboutCertifications from './IndexAboutCertifications';
import IndexAboutDescription from './IndexAboutDescription';
import IndexAboutWorkingExperiences from './IndexAboutWorkingExperiences';
import styles from './index-about.module.css';

export default function IndexAbout() {
  return (
    <section className={styles['index-about']}>
      <div className={styles['index-about-description']}>
        <div className="margin-auto">
          <IndexSectionTitle>ABOUT ME</IndexSectionTitle>
          <IndexAboutDescription />
        </div>
      </div>
      <IndexAboutCertifications />
      <IndexAboutWorkingExperiences />
    </section>
  );
}
