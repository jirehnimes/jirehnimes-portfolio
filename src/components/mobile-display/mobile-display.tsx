import styles from './mobile-display.module.css';

type TProps = {
  url: string;
};

export const MobileDisplay = ({ url }: TProps) => {
  return (
    <div className={styles.mobile}>
      <div className={styles['mobile__camera']} />
      <div className={styles['mobile__screen']}>
        <iframe
          src={url}
          className={styles['mobile__iframe']}
          title="Mobile preview"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <div className={styles['mobile__home']} />
    </div>
  );
};
