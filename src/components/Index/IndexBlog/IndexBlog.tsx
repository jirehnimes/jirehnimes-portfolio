import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import styles from './index-blog.module.css';

export default function IndexBlog() {
  return (
    <section id="blog" className={styles['index-blog']}>
      <IndexSectionTitle>BLOG</IndexSectionTitle>
    </section>
  );
}
