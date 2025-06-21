import type { Metadata } from 'next';
import ChatBot from '@/components/ChatBot';
import FontAwesomeConfig from '@/components/FontAwesomeConfig';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
import ScrollListener from '@/components/ScrollListener';
import ScrollTopButton from '@/components/ScrollTopButton';
import ThemeMode from '@/components/ThemeMode';
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
          <Header />
          <NavigationBar />
          {children}
          <Footer />
          <ScrollTopButton />
          <ChatBot />
          <ScrollListener />
        </body>
      </html>
    </ThemeMode>
  );
}
