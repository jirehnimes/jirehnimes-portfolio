import styles from './laptop-display.module.css';

type TProps = {
  url: string;
};

export const LaptopDisplay = ({ url }: TProps) => {
  return (
    <div className={styles.laptop}>
      <div className={styles['laptop__lid']}>
        <div className={styles['laptop__screen']}>
          <iframe
            src={url}
            className={styles['laptop__iframe']}
            title="Laptop preview"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      </div>
      <div className={styles['laptop__base']} />
      <div className={styles['laptop__foot']} />
    </div>
  );
};
