'use client';

import styles from './chat-bot.module.css';

export default function ChatBot() {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => window.alert('Coming soon...')}
      >
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M832 83H166q-34 0-58.5 24.5T83 166v749l167-166h582q34 0 58.5-24.5T915 665V166q0-34-24.5-58.5T832 83zM250 374h499v83H250v-83zm332 208H250v-83h332v83zm167-249H250v-83h499v83z" />
        </svg>
      </button>
    </div>
  );
}
