import SocialMediaList from '@/components/SocialMediaList';
import IndexJumbotronBackground from './IndexJumbotronBackground';
import styles from './index-jumbotron.module.css';

export default function IndexJumbotron() {
  return (
    <section className={styles.container}>
      <IndexJumbotronBackground />

      <div className={styles.content}>
        <div className={styles['content-container']}>
          <div className={styles.name}>
            <h1 className={styles.firstname}>JIREH</h1>
            <h1 className={styles.lastname}>NIMES</h1>
          </div>

          <div className={styles.description}>
            <p>
              I&apos;m currently a Technical Lead based from the Philippines.
              Experienced in full stack development for more than 9 years. A BS
              Computer Engineering graduate. And someone who loves coffee!
            </p>
          </div>

          <SocialMediaList />
        </div>
      </div>
    </section>
  );
}
