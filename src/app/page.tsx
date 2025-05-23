import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CalendarDays, Building2, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNewsList } from "@/lib/microcms";

export const revalidate = 60; // 60秒ごとに再検証

export default async function Home() {
  // MicroCMSからニュース記事を取得（最新の3件のみ）
  const newsItems = await getNewsList();
  const latestNews = newsItems.slice(0, 3);

  return (
    <div className="container mx-auto px-4">
      <div id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] text-center">
        <div className="mb-6">
          <Image
            src="/rogo-text.svg"
            alt="名桜大学祭2025 ロゴテキスト"
            width={320}
            height={320}
            className="w-[200px] md:w-[400px] mx-auto"
            priority
          />
          <Image
            src="/第32回名桜大学祭.svg"
            alt="第32回名桜大学祭 タイトル"
            width={320}
            height={320}
            className="w-[250px] md:w-[400px] mx-auto mb-4 md:mb-8"
          />
          <div className="w-[250px] md:w-[400px] mx-auto transition-all duration-300 rounded-full shadow-md bg-white">
              <Image
                src="/開催情報.svg"
                alt="名桜大学祭2025 開催情報"
                width={320}
                height={320}
                className="w-[200px] md:w-[300px] mx-auto p-2 md:p-4"
              />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-12 grid grid-cols-1 gap-8">
        <div id="about" className="bg-card border rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center py-8 border-b">名桜大学祭とは?</h2>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">名桜大学祭とは?</p>
                <p className="text-sm text-muted-foreground">沖縄北部・名護市の青春が輝く、活気あふれる2日間。
                学生主催のイベント、フード、パフォーマンスなど様々な催しを予定しています。</p>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                詳しく見る
                <ChevronRight className="h-4 w-4 inline ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div id="news" className="bg-card border rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center py-8 border-b">お知らせ</h2>
          <div className="space-y-4 p-6">
            {latestNews.map((news: any) => (
              <div key={news.id} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{news.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {news.publishedAt ? new Date(news.publishedAt).toLocaleDateString('ja-JP') : ''}
                  </div>
                </div>
                {/* リンクの代わり */}
                <div className="text-lg font-medium">
                  {news.title}
                </div>
                {/* <Link href={`/news/${news.id}`} className="text-lg font-medium hover:text-primary transition-colors"> */}
                  {/* {news.title} */}
                {/* </Link> */}
              </div>
            ))}
          <div className="flex justify-end mt-4">
            <Link href="/news" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              すべてのお知らせ
              <ChevronRight className="h-4 w-4 inline ml-1" />
            </Link>
          </div>
          </div>
        </div>

        
        <div id="info" className="bg-card border rounded-lg shadow-sm p-0 overflow-hidden">
          <h2 className="text-3xl font-bold text-center py-8 border-b">イベント情報</h2>
          <div className="p-6">

            <div className="grid grid-cols-[60px_1fr] gap-6 mb-6 pb-6 border-b">
              <div className="font-bold text-lg">主催</div>
              <div>
                <p>第32回名桜大学祭実行委員会</p>
              </div>
            </div>

            <div className="grid grid-cols-[60px_1fr] gap-6 mb-6 pb-6 border-b">
              <div className="font-bold text-lg">日時</div>
              <div>
                <p className="mb-1">2025年11月22日(土).23日(日)</p>
                <p className="text-muted-foreground">10:30 開場 | 11:00 開演</p>
              </div>
            </div>
            
            <div className="grid grid-cols-[60px_1fr] gap-6 pb-6">
              <div className="font-bold text-lg">会場</div>
              <div>
                <p className="mb-1 flex items-center">名桜大学</p>
                <p className="text-muted-foreground">〒905-8585<br />沖縄県名護市為又1220-1</p>
              </div>
            </div>

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                title="名桜大学祭会場"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14266.998553880376!2d127.96357358255614!3d26.62447061154936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e4f8a943c7f5bb%3A0x6b901e4404efc3db!2z5ZCN5qGc5aSn5a2m!5e0!3m2!1sja!2sjp!4v1745164331471!5m2!1sja!2sjp"
                width="100%" 
                height="50%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}