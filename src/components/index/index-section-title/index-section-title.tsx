import { ReactNode } from 'react';
import styles from './index-section-title.module.css';

type TIndexSectionTitleProps = {
  children: string | ReactNode;
  className?: string;
  level?: number;
};

export const IndexSectionTitle = ({
  children,
  className = '',
  level = 1,
}: TIndexSectionTitleProps) => {
  const levelClass = `level-${level}`;

  return (
    <div
      className={`${styles['container']} ${styles[levelClass] || ''} ${className}`}
    >
      <h1>{children}</h1>
    </div>
  );
};
