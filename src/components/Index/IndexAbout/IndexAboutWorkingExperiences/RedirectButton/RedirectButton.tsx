import { A_TARGET, APP_ROUTE } from '@/constants/global.constants';
import styles from './redirect-button.module.css';

export default function RedirectButton() {
  return (
    <div className={styles.container}>
      <a
        href={APP_ROUTE.WORKING_EXPERIENCES}
        target={A_TARGET.BLANK}
        className={styles.link}
      >
        <div className={styles.button}>See More Work Experiences</div>
      </a>
    </div>
  );
}
