import { socialMedia } from '@/data/social-media.data';
import styles from './social-media-list.module.css';
import SocialMediaButton from './SocialMediaButton';
import { TSocialMedia } from '@/types/social-media.type';

export default function SocialMediaList() {
  return (
    <div className={styles['social-media-list']}>
      {socialMedia.map((socialMediaItem: TSocialMedia, index: number) => (
        <SocialMediaButton key={index} />
      ))}
    </div>
  );
}
