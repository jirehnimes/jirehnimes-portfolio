import { IndexSectionTitle } from '@/components/index/index-section-title';
import { IndexBlogCard } from './index-blog-card';
import styles from './index-blog.module.css';

export const IndexBlog = () => {
  const blogs = [{}, {}, {}, {}];

  const blogsList = blogs.map((_, index: number) => (
    <IndexBlogCard key={index} />
  ));

  return (
    <section id="blog" className={styles.section}>
      <IndexSectionTitle>BLOG</IndexSectionTitle>

      <div className={styles.list}>{blogsList}</div>
    </section>
  );
};
