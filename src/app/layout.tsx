import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/global.css';
import AppProvider from '@/providers/AppProvider';
import ThemeMode from '@/components/ThemeMode';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
    <AppProvider>
      <ThemeMode>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
          </body>
        </html>
      </ThemeMode>
    </AppProvider>
  );
}
