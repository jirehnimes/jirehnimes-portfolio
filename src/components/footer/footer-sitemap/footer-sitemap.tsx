import { formatClasses } from '@/utils/common.util';
import { sitemaps } from './footer-sitemap.config';
import styles from './footer-sitemap.module.css';

export const FooterSitemap = () => {
  return (
    <div className={styles.container}>
      <div className={formatClasses([styles.sitemapContainer, 'margin-auto'])}>
        {sitemaps.map((sitemap) => (
          <div key={sitemap.title} className={styles.sitemap}>
            <h3>{sitemap.title}</h3>
            <ul>
              <li key={sitemap.link.label}>
                <a
                  href={sitemap.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sitemap.link.label}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
