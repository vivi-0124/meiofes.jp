import { MetadataRoute } from 'next'

// このルートを静的にエクスポートする
export const dynamic = 'force-static'

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: 'https://www.meiofes.jp/sitemap.xml',
  }
}
