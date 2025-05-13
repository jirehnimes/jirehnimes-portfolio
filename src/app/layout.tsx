import type { Metadata } from 'next';
import ThemeMode from '@/components/ThemeMode';
import FontAwesomeConfig from '@/components/FontAwesomeConfig';
import Footer from '@/components/Footer';
import { kanitRegular } from '@/constants/fonts.constants';
import ScrollListener from '@/components/ScrollListener';
import ScrollTopButton from '@/components/ScrollTopButton';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
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
          <Header />
          <NavigationBar />
          {children}
          <Footer />
          <ScrollTopButton />
          <ScrollListener />
        </body>
      </html>
    </ThemeMode>
  );
}
