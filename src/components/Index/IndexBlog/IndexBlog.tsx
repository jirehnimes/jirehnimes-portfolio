import IndexSectionTitle from '@/components/Index/IndexSectionTitle';
import IndexBlogCard from './IndexBlogCard';
import styles from './index-blog.module.css';

export default function IndexBlog() {
  const blogs = [{}, {}, {}, {}];

  const blogsList = blogs.map((blog, index: number) => (
    <IndexBlogCard key={index} />
  ));

  return (
    <section id="blog" className={styles.section}>
      <IndexSectionTitle>BLOG</IndexSectionTitle>

      <div className={styles.list}>{blogsList}</div>
    </section>
  );
}
