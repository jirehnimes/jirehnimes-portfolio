import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import styles from './chat-bot.module.css';

export default function ChatBot() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faMessage} />
      </button>
    </div>
  );
}
