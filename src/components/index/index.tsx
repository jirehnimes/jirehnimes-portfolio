import { IndexAbout } from './index-about';
import { IndexBlog } from './index-blog';
import { IndexJumbotron } from './index-jumbotron';
import { IndexPortfolio } from './index-portfolio';
import styles from './index.module.css';

export default function Index() {
  return (
    <div className={styles.page}>
      <IndexJumbotron />
      <IndexAbout />
      <IndexPortfolio />
      <IndexBlog />
    </div>
  );
}
