import Link from "next/link";
import { ChevronRight, CalendarDays, Building2, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const newsItems = [
    {
      title: "名桜大学祭2025 ティザーサイトオープン",
      date: "2024-05-01",
      category: "お知らせ",
    },
    {
      title: "模擬店・出展団体募集開始",
      date: "2024-06-15",
      category: "募集",
    },
    {
      title: "ボランティアスタッフ募集中",
      date: "2024-07-01",
      category: "募集",
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] text-center">
        <div className="mb-6">
          <img src="/rogo.svg" alt="名桜大学祭2025ロゴ" className="w-64 md:w-80 mx-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          第32回名桜大学祭
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          2025/11/22(土).23(日)<br />
          @名桜大学キャンパス
        </p>
      </section>

      <div className="max-w-6xl mx-auto my-12 grid grid-cols-1 gap-8">
        <div id="about" className="bg-card border rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center py-8 border-b">名桜大学祭とは?</h2>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">名桜大学祭とは?</p>
                <p className="text-sm text-muted-foreground">名桜大学の伝統と革新が融合する、年に一度の祭典。
                学生主催のイベント、フード、パフォーマンスなど様々な催しを予定しています。</p>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                詳しく見る
                <ChevronRight className="h-4 w-4 inline ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div id="news" className="bg-card border rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center py-8 border-b">お知らせ</h2>
          <div className="space-y-4 p-6">
            {newsItems.map((news, index) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{news.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                </div>
                <Link href={`/news/${index}`} className="text-lg font-medium hover:text-primary transition-colors">
                  {news.title}
                </Link>
              </div>
            ))}
          <div className="flex justify-end mt-4">
            <Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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