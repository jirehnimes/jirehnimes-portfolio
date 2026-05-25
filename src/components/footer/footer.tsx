import { FooterHeader } from './footer-header';
import SocialMediaList from '../SocialMediaList';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <FooterHeader />
      <SocialMediaList />
    </section>
  );
};
