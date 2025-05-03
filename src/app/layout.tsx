import type { Metadata } from 'next';
import ThemeMode from '@/components/ThemeMode';
import FontAwesomeConfig from '@/components/FontAwesomeConfig';
import Footer from '@/components/Footer';
import { kanitRegular } from '@/constants/fonts.constants';
import '@/styles/app.css';

export const metadata: Metadata = {
  title: 'Jireh Nimes',
  description: 'My portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeMode>
      <html lang="en">
        <head>
          <FontAwesomeConfig />
        </head>

        <body className={`${kanitRegular.className}`}>
          {children}
          <Footer />
        </body>
      </html>
    </ThemeMode>
  );
}
