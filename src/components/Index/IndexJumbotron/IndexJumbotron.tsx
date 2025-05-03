import styles from './index-jumbotron.module.css';

export default function IndexJumbotron() {
  const videoURL =
    'https://wwr8omun2fwfutb2.public.blob.vercel-storage.com/index_bg-5QIXkIoGFilLrSVBrKo1Og3SnjzFc0.mp4';

  return (
    <section className={styles.container}>
      <video className={styles.video} autoPlay muted loop>
        <source src={videoURL} type="video/mp4" />
      </video>
    </section>
  );
}
