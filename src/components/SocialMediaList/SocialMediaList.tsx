import { COLOR, COLOR_DARK } from '@/constants/global.constants';
import { socialMedia } from '@/data/social-media.data';
import { TSocialMedia } from '@/types/social-media.type';
import SocialMediaButton from './SocialMediaButton';
import styles from './social-media-list.module.css';

type TSocialMediaProps = {
  listColor?: COLOR | COLOR_DARK;
};

export default function SocialMediaList({ listColor }: TSocialMediaProps) {
  return (
    <div className={styles.container}>
      {socialMedia.map((socialMediaItem: TSocialMedia, index: number) => (
        <SocialMediaButton
          key={index}
          socialMedia={socialMediaItem}
          color={listColor}
        />
      ))}
    </div>
  );
}
