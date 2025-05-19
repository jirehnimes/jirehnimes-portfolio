'use client';

import { useWavesDividerHook } from './waves-divider.hook';
import styles from './waves-divider.module.css';

export default function WavesDivider() {
  const { WAVE_COLOR, componentRef, wavePaths } = useWavesDividerHook();

  return (
    <svg
      ref={componentRef}
      className={styles.waves}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill={WAVE_COLOR}
        fillOpacity="1"
        fillRule="evenodd"
        clipRule="evenodd"
        d={wavePaths[0]}
      ></path>

      <path
        fill={WAVE_COLOR}
        fillOpacity="1"
        fillRule="evenodd"
        clipRule="evenodd"
        d={wavePaths[1]}
        style={{ opacity: 0 }}
      ></path>
    </svg>
  );
}
