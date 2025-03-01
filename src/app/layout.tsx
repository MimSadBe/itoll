'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';
import { useEffect } from 'react';
import { Workbox } from 'workbox-window';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js', { type: 'module' });

      wb.register();
    }
  }, []);

  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0175C2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="E-Commerce Products" />
      <link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png" />
      <link rel="manifest" href="/manifest.json" />
      <title>itoll</title>
    </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {children}
    </body>
    </html>
  );
}
