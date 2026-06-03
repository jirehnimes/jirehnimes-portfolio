'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TPortfolio } from '@/types/portfolio.type';
import { IndexPortfolioCardModal } from './index-portfolio-card-modal';
import styles from './index-portfolio-card.module.css';

type TProps = {
  portfolio?: TPortfolio;
};

export const IndexPortfolioCard = ({ portfolio }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!portfolio) {
    return (
      <div className={styles.card}>
        <span className={styles['coming-soon']}>Coming Soon</span>
      </div>
    );
  }

  return (
    <>
      <div className={styles.card} onClick={() => setIsModalOpen(true)}>
        <div className={styles['card__content']}>
          <div className={styles['card__icon-wrapper']}>
            <Image
              src={portfolio.icon}
              alt={portfolio.name}
              width={64}
              height={64}
              className={styles['card__icon']}
            />
          </div>
          <span className={styles['card__name']}>{portfolio.name}</span>
          <p className={styles['card__description']}>{portfolio.description}</p>
        </div>
      </div>

      {isModalOpen && (
        <IndexPortfolioCardModal
          portfolio={portfolio}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
