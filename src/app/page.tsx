import { IndexAbout } from '@/components/index/index-about';
import { IndexBlog } from '@/components/index/index-blog';
import { IndexJumbotron } from '@/components/index/index-jumbotron';
import { IndexPortfolio } from '@/components/index/index-portfolio';
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
