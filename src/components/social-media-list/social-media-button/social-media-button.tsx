'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { COLOR, COLOR_DARK } from '@/constants/global.constants';
import { colorAtom } from '@/stores/global.store';
import { TSocialMedia } from '@/types/social-media.type';
import { formatClasses } from '@/utils/common.util';
import styles from './social-media-button.module.css';

type TSocialMediaButtonProps = {
  socialMedia: TSocialMedia;
  color?: COLOR | COLOR_DARK;
};

export default function SocialMediaButton({
  socialMedia: { icon, url },
  color,
}: TSocialMediaButtonProps) {
  const globalColor = useAtomValue(colorAtom);
  const iconColor = color ?? globalColor.BLUE_700;

  return (
    <button className={formatClasses([styles.button, 'hover__scale'])}>
      <Link href={url} target="_blank">
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
          style={{ color: iconColor }}
        />
      </Link>
    </button>
  );
}
