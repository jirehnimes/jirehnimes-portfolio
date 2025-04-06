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
  const rootClass = 'index-section-title';
  const levelClass = `${rootClass}__level-${level}`;

  return (
    <div className={`${styles[rootClass]} ${styles[levelClass] || ''}`}>
      <h1>{children}</h1>
    </div>
  );
}
