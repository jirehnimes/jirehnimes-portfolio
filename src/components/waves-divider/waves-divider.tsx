import { formatClasses } from '@/utils/common.util';
import styles from './waves-divider.module.css';

export const WavesDivider = () => {
  return (
    <div className={styles.container}>
      <svg
        className={formatClasses([styles.wave, styles.waveBack])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2880 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,100C240,60,480,140,720,100C960,60,1200,140,1440,100C1680,60,1920,140,2160,100C2400,60,2640,140,2880,100L2880,200L0,200Z" />
      </svg>
      <svg
        className={formatClasses([styles.wave, styles.waveFront])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2880 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,80C240,40,480,120,720,80C960,40,1200,120,1440,80C1680,40,1920,120,2160,80C2400,40,2640,120,2880,80L2880,200L0,200Z" />
      </svg>
    </div>
  );
};
