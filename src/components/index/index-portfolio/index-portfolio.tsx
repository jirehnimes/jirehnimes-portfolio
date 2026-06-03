import { WavesDivider } from '@/components/waves-divider';
import { IndexSectionTitle } from '@/components/index/index-section-title';
import { portfolios } from '@/data/portfolio.data';
import { TPortfolio } from '@/types/portfolio.type';
import { IndexPortfolioCard } from './index-portfolio-card';
import styles from './index-portfolio.module.css';

const MIN_CARDS = 4;

export const IndexPortfolio = () => {
  const cards: (TPortfolio | undefined)[] = [
    ...portfolios,
    ...Array<undefined>(Math.max(0, MIN_CARDS - portfolios.length)).fill(
      undefined
    ),
  ];

  return (
    <section id="portfolio" className={styles.container}>
      <WavesDivider />
      <div className={styles['content-container']}>
        <IndexSectionTitle className={styles['section-title']}>
          PORTFOLIO
        </IndexSectionTitle>

        <div className={styles.portfolios}>
          {cards.map((portfolio, index) => (
            <IndexPortfolioCard key={index} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
};
