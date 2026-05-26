import { IndexSectionTitle } from '@/components/index/index-section-title';
import { IndexAboutCertificationsList } from './index-about-certifications-list';
import styles from './index-about-certifications.module.css';

export const IndexAboutCertifications = () => {
  return (
    <section className={styles.container}>
      <IndexSectionTitle level={2}>CERTIFICATIONS</IndexSectionTitle>

      <IndexAboutCertificationsList />
    </section>
  );
};
