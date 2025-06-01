import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { TSocialMedia } from '@/types/social-media.type';
import styles from './social-media-button.module.css';

type TSocialMediaButtonProps = {
  key?: number;
  socialMedia: TSocialMedia;
};

export default function SocialMediaButton({
  socialMedia: { icon, url },
}: TSocialMediaButtonProps) {
  return (
    <button className={styles['social-media']}>
      <Link href={url} target="_blank">
        <FontAwesomeIcon icon={icon} />
      </Link>
    </button>
  );
}
