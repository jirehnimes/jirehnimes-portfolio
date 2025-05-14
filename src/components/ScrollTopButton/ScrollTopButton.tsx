import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import styles from './scroll-top-button.module.css';

export default function ScrollTopButton() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </div>
  );
}
