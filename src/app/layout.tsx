import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Script from 'next/script';
import { GA_TRACKING_ID } from '../lib/gtag';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "名桜大学祭 2025",
    template: "%s | 名桜大学祭 2025"
  },
  description: '11月開催の名桜大学祭2025の公式ウェブサイトです。イベント情報、出店情報、協賛のお知らせなどを掲載していきます。',
  icons: {
    icon: '/icon.png', 
    apple: '/apple-icon.png',
  },
  keywords: ['名桜大学', '大学祭', 'イベント', '沖縄'],
  robots: 'index, follow',
  category: 'event',
};

export const viewport: Viewport = {
  themeColor: '#68be8d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}