import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import styles from './index-blog.module.css';

export default function IndexBlog() {
  return (
    <section className={styles['index-blog']}>
      <IndexSectionTitle>BLOG</IndexSectionTitle>
    </section>
  );
}
