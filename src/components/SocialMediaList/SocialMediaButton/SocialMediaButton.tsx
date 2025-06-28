'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { COLOR, COLOR_DARK } from '@/constants/global.constants';
import { colorAtom } from '@/stores/global.store';
import { TSocialMedia } from '@/types/social-media.type';
import styles from './social-media-button.module.css';

type TSocialMediaButtonProps = {
  socialMedia: TSocialMedia;
  key?: number;
  color?: COLOR | COLOR_DARK;
};

export default function SocialMediaButton({
  socialMedia: { icon, url },
  color,
}: TSocialMediaButtonProps) {
  const globalColor = useAtomValue(colorAtom);
  const [iconColor, setIconColor] = useState<COLOR | COLOR_DARK>(
    globalColor.BLUE_700
  );

  useEffect(() => {
    if (color !== undefined) {
      setIconColor(color);
    } else {
      setIconColor(globalColor.BLUE_700);
    }
  }, [color, globalColor]);

  return (
    <button className={styles.button}>
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
