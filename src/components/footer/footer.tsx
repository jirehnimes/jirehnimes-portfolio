import SocialMediaList from '../SocialMediaList';
import { FooterHeader } from './footer-header';
import { FooterSitemap } from './footer-sitemap';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <FooterHeader />
      <FooterSitemap />
      <SocialMediaList />
    </section>
  );
};
