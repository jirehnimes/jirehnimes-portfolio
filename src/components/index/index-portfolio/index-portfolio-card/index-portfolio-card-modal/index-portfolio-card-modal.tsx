'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LaptopDisplay } from '@/components/laptop-display';
import { MobileDisplay } from '@/components/mobile-display';
import { TPortfolio } from '@/types/portfolio.type';
import styles from './index-portfolio-card-modal.module.css';

type TProps = {
  portfolio: TPortfolio;
  onClose: () => void;
};

export const IndexPortfolioCardModal = ({ portfolio, onClose }: TProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles['close-button']}
          onClick={onClose}
          aria-label="Close"
        >
          &#x2715;
        </button>

        {portfolio.url && (
          <div className={styles.devices}>
            <LaptopDisplay url={portfolio.url} />
            <MobileDisplay url={portfolio.url} />
          </div>
        )}

        <div className={styles.info}>
          <div className={styles['info__header']}>
            <Image
              src={portfolio.icon}
              alt={portfolio.name}
              width={48}
              height={48}
              className={styles['info__icon']}
            />
            <h2 className={styles['info__name']}>{portfolio.name}</h2>
          </div>
          <p className={styles['info__description']}>{portfolio.description}</p>
          <div className={styles['info__technologies']}>
            {portfolio.technologies.map((tech) => (
              <span key={tech} className={styles['info__tech-tag']}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
