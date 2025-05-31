import { formatClasses } from '@/hooks/utils.hook';
import styles from './index-blog-card.module.css';
import { STYLE } from '@/constants/styles.constants';

export default function IndexBlogCard() {
  return (
    <div className={styles.card}>
      <a href="/#blog">
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
      </a>
    </div>
  );
}
