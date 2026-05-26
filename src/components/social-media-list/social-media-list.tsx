import { COLOR, COLOR_DARK } from '@/constants/global.constants';
import { socialMedia } from '@/data/social-media.data';
import SocialMediaButton from './social-media-button';
import styles from './social-media-list.module.css';

type TSocialMediaProps = {
  listColor?: COLOR | COLOR_DARK;
};

export const SocialMediaList = ({ listColor }: TSocialMediaProps) => (
  <div className={styles.container}>
    {socialMedia.map((socialMediaItem, index) => (
      <SocialMediaButton
        key={index}
        socialMedia={socialMediaItem}
        color={listColor}
      />
    ))}
  </div>
);
