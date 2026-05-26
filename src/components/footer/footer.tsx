import { formatClasses } from '@/utils/common.util';
import { FooterCopyright } from './footer-copyright';
import { FooterHeader } from './footer-header';
import { FooterSitemap } from './footer-sitemap';
import { FooterSocialMediaList } from './footer-social-media-list';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <FooterHeader />
      <FooterSitemap />

      <div className={formatClasses([styles.lastRow, 'margin-auto'])}>
        <FooterSocialMediaList />
        <FooterCopyright />
      </div>
    </section>
  );
};
