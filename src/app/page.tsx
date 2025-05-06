import IndexAbout from '@/components/Index/IndexAbout';
import IndexBlog from '@/components/Index/IndexBlog';
import IndexPortfolio from '@/components/Index/IndexPortfolio';
import IndexJumbotron from '@/components/Index/IndexJumbotron';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <IndexJumbotron />
      <IndexAbout />
      <IndexPortfolio />
      <IndexBlog />
    </div>
  );
}
