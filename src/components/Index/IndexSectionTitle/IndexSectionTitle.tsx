import { ReactNode } from 'react';
import styles from './index-section-title.module.css';

type IndexSectionTitleProps = {
  children: string | ReactNode;
  level?: number;
};

export default function IndexSectionTitle({
  children,
  level = 1,
}: IndexSectionTitleProps) {
  const levelClass = `level-${level}`;

  return (
    <div className={`${styles['container']} ${styles[levelClass] || ''}`}>
      <h1>{children}</h1>
    </div>
  );
}
