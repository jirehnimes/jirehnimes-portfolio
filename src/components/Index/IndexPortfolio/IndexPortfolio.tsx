'use client';

import WavesDivider from '@/components/WavesDivider';
import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import styles from './index-portfolio.module.css';

type IndexPortfolioType = {
  sectionStyles: string;
};

export default function IndexPortfolio({ sectionStyles }: IndexPortfolioType) {
  return (
    <section className={styles.portfolio}>
      <WavesDivider />
      <div className={styles['portfolio__content']}>
        <IndexSectionTitle>PORTFOLIO</IndexSectionTitle>
      </div>
    </section>
  );
}
