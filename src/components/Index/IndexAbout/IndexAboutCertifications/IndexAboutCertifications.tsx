import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import styles from './index-about-certifications.module.css';
import IndexAboutCertificationsList from './IndexAboutCertificationsList';

export default function IndexAboutCertifications() {
  return (
    <section className={styles.container}>
      <IndexSectionTitle level={2}>CERTIFICATIONS</IndexSectionTitle>

      <IndexAboutCertificationsList />
    </section>
  );
}
