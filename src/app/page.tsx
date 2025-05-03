import IndexAbout from '@/components/Index/IndexAbout';
import IndexBlog from '@/components/Index/IndexBlog';
import IndexPortfolio from '@/components/Index/IndexPortfolio';
import IndexJumbotron from '@/components/Index/IndexJumbotron';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <NavigationBar />
      <div className={styles.page}>
        <IndexJumbotron />
        <IndexAbout sectionStyles={styles.section} />
        <IndexPortfolio sectionStyles={styles.section} />
        <IndexBlog />
      </div>
    </>
  );
}
