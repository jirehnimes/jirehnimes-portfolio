'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { colorAtom } from '@/stores/global.store';
import { TSocialMedia } from '@/types/social-media.type';
import styles from './social-media-button.module.css';

type TSocialMediaButtonProps = {
  key?: number;
  socialMedia: TSocialMedia;
};

export default function SocialMediaButton({
  socialMedia: { icon, url },
}: TSocialMediaButtonProps) {
  const color = useAtomValue(colorAtom);

  return (
    <button className={styles.button}>
      <Link href={url} target="_blank">
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
          style={{ color: color.BLUE_100 }}
        />
      </Link>
    </button>
  );
}
