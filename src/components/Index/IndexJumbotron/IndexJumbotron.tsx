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
            <p>A Technical Lead based from the Philippines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
