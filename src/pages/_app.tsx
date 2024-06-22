import type { Metadata } from 'next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Selium - Fabric computing for developers',
  description:
    'Selium is a modern compute fabric that allows developers to build, deploy and scale code without leaving their IDE.',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} bg-white dark:bg-zinc-950`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
