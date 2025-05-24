import styles from './index-jumbotron-background.module.css';

export default function IndexJumbotronBackground() {
  const videoURL =
    'https://wwr8omun2fwfutb2.public.blob.vercel-storage.com/index_bg-5QIXkIoGFilLrSVBrKo1Og3SnjzFc0.mp4';

  return (
    <>
      <div className={styles.overlay}></div>
      <video className={styles.video} autoPlay muted loop>
        <source src={videoURL} type="video/mp4" />
      </video>
    </>
  );
}
