import { socialMedia } from '@/data/social-media.data';
import { TSocialMedia } from '@/types/social-media.type';
import SocialMediaButton from './SocialMediaButton';
import styles from './social-media-list.module.css';

// type TSocialMediaList = {
//   color
// }

export default function SocialMediaList() {
  return (
    <div className={styles['social-media-list']}>
      {socialMedia.map((socialMediaItem: TSocialMedia, index: number) => (
        <SocialMediaButton key={index} socialMedia={socialMediaItem} />
      ))}
    </div>
  );
}
