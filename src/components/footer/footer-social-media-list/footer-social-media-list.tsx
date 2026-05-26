import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { socialMedia } from '@/data/social-media.data';
import styles from './footer-social-media-list.module.css';

export const FooterSocialMediaList = () => {
  return (
    <div className={styles.container}>
      {socialMedia.map((socialMediaItem, index) => (
        <Link
          key={index}
          href={socialMediaItem.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.iconContainer}>
            <FontAwesomeIcon
              icon={socialMediaItem.icon}
              className={styles.icon}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
