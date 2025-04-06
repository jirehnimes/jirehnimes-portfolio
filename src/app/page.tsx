import IndexPortfolio from '@/components/Index/IndexPortfolio';
import IndexAbout from '@/components/Index/IndexAbout';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* prettier-ignore */}
      <section className={`${styles.section} ${styles.jumbotron}`}>
        Test
      </section>
      <IndexAbout sectionStyles={styles.section} />
      <IndexPortfolio sectionStyles={styles.section} />
    </div>
  );
}
