'use client';

import Image from 'next/image';
import styles from './page.module.css';
import useHomeHook from '@/hooks/home.hook';
import ThemeModeToggleButton from '@/components/ThemeModeToggleButton';

export default function Home() {
  const { themeText, toggleThemeMode } = useHomeHook();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantlys.</li>
        </ol>
      </main>

      <button onClick={() => toggleThemeMode()}>Toggle Dark</button>
      <h1>{themeText}</h1>
      <ThemeModeToggleButton />
    </div>
  );
}
