import { WavesDivider } from '@/components/waves-divider';
import { IndexSectionTitle } from '@/components/index/index-section-title';
import { IndexPortfolioCard } from './index-portfolio-card';
import styles from './index-portfolio.module.css';

export const IndexPortfolio = () => {
  return (
    <section id="portfolio" className={styles.container}>
      <WavesDivider />
      <div className={styles['content-container']}>
        <IndexSectionTitle className={styles['section-title']}>
          PORTFOLIO
        </IndexSectionTitle>

        <div className={styles.portfolios}>
          <IndexPortfolioCard />
          <IndexPortfolioCard />
          <IndexPortfolioCard />
          <IndexPortfolioCard />
        </div>
      </div>
    </section>
  );
};
