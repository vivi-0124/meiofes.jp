import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Script from 'next/script';
import { GA_TRACKING_ID } from '../lib/gtag';
import { Suspense } from 'react';
import GoogleAnalyticsTracker from '../components/layout/google-analytics-tracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "名桜大学祭 2025",
    template: "%s | 名桜大学祭 2025"
  },
  description: '「名桜大学祭」の公式ウェブサイトです。第32回名桜大学祭は「ひとやすみ」をテーマに、11月22日(土)〜23日(日)の2日間、名桜大学にて開催されます。',
  icons: {
    icon: '/rogo.svg', 
    apple: '/rogo.svg',
  },
  keywords: ['名桜大学', '大学祭', 'イベント', '沖縄'],
  robots: 'index, follow',
  category: 'event',
  alternates: {
    canonical: 'https://www.meiofes.jp/',
  },
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
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}