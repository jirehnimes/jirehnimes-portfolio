import SocialMediaList from '../SocialMediaList';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.name}>
        <h1>JIREH NIMES</h1>
      </div>
      <SocialMediaList />
    </section>
  );
}
