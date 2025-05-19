'use client';

import WavesDivider from '@/components/WavesDivider';
import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import styles from './index-portfolio.module.css';
import IndexPortfolioCard from './IndexPortfolioCard';

export default function IndexPortfolio() {
  return (
    <section className={styles.container}>
      <WavesDivider />
      <div className={styles['content-container']}>
        <IndexSectionTitle styles={styles['section-title']}>
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
}
