'use client';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Layout from '@/layout/Layout';
import '@/styles/globals.css';
import { Quicksand } from 'next/font/google';
import { useEffect, useState } from 'react';

const quicksand = Quicksand({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  //use local storage to store theme
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <>
      <div className={quicksand.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NextThemesProvider>
        </NextUIProvider>
      </div>
    </>
  );
}
