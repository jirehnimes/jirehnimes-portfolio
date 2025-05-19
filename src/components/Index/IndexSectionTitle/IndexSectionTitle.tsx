import { ReactNode } from 'react';
import styles from './index-section-title.module.css';

type IndexSectionTitleProps = {
  children: string | ReactNode;
  styles?: string;
  level?: number;
};

export default function IndexSectionTitle({
  children,
  styles: customStyles = '',
  level = 1,
}: IndexSectionTitleProps) {
  const levelClass = `level-${level}`;

  return (
    <div
      className={`${styles['container']} ${styles[levelClass] || ''} ${customStyles}`}
    >
      <h1>{children}</h1>
    </div>
  );
}
