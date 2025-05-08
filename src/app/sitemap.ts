import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // サイトのベースURLを設定
  const baseUrl = 'https://meiofes.jp'
  
  // 静的ページの一覧
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // 動的ページ（ニュース記事など）を取得する例
  // 実際のAPIやデータベースから取得する必要があります
  // ここでは仮のコードを示しています
  // const newsItems = await getNewsList()
  // const newsUrls = newsItems.map((news) => ({
  //   url: `${baseUrl}/news/${news.id}`,
  //   lastModified: new Date(news.publishedAt || news.updatedAt),
  //   changeFrequency: 'never' as const,
  //   priority: 0.5,
  // }))

  // 全てのURLを結合して返す
  return [
    ...staticPages,
    // ...newsUrls, // 実際のニュース記事を含める場合
  ]
}
