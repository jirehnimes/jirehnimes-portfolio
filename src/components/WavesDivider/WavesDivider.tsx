'use client';

import { useWavesDividerHook } from './waves-divider.hook';
import styles from './waves-divider.module.css';

export default function WavesDivider() {
  const { componentRef, wave1, wave2 } = useWavesDividerHook();

  return (
    <svg
      ref={componentRef}
      className={styles.waves}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#1976d2"
        fillOpacity="1"
        fillRule="evenodd"
        clipRule="evenodd"
        d={wave1}
      ></path>

      <path
        fill="#1976d2"
        fillOpacity="1"
        fillRule="evenodd"
        clipRule="evenodd"
        d={wave2}
        style={{ opacity: 0 }}
      ></path>
    </svg>
  );
}
