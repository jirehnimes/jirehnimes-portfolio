import Link from 'next/link';
import { STYLE } from '@/constants/styles.constants';
import { formatClasses } from '@/utils/common.util';
import styles from './index-blog-card.module.css';

export default function IndexBlogCard() {
  return (
    <div className={styles.card}>
      <Link href="/#blog">
        <div
          className={formatClasses([
            STYLE.BOX_SIZING__BORDER_BOX,
            styles.container,
          ])}
        >
          <div className={styles.preview}></div>
          <div className={styles.details}>
            <h1>
              Test Title Test Title Test Title Test Title Test Title Test Title
              Test Title Test Title
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
