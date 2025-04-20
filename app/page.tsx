import Link from "next/link";
import { ChevronRight, CalendarDays, Building2, MapPin, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const latestNews = {
    title: "名桜大学祭2024 ティザーサイトオープン",
    date: "2024-05-01",
    category: "お知らせ",
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          名桜大学祭<span className="text-primary">2024</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          11月開催予定の名桜大学祭公式サイトです。<br />
          詳細情報は随時更新していきます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">イベント情報</Button>
          <Button size="lg" variant="outline">協賛のお願い</Button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>お知らせ</span>
              <Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                すべて見る
                <ChevronRight className="h-4 w-4 inline ml-1" />
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{latestNews.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 mr-1" />
                {latestNews.date}
              </div>
            </div>
            <Link href="/news" className="text-lg font-medium hover:text-primary transition-colors">
              {latestNews.title}
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>大学祭について</span>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                詳しく見る
                <ChevronRight className="h-4 w-4 inline ml-1" />
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              名桜大学の伝統と革新が融合する、年に一度の祭典。
              学生主催のイベント、フード、パフォーマンスなど様々な催しを予定しています。
            </p>
            <Link href="/about">
              <Button variant="outline" className="w-full">もっと詳しく</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>企業様へ</span>
              <Link href="/sponsors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                協賛について
                <ChevronRight className="h-4 w-4 inline ml-1" />
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">協賛企業様募集中</p>
                <p className="text-sm text-muted-foreground">各種協賛プランをご用意しています</p>
              </div>
            </div>
            <Link href="/sponsors">
              <Button variant="outline" className="w-full">協賛プランを見る</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>開催情報</span>
              <Link href="/info" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                アクセス情報
                <ChevronRight className="h-4 w-4 inline ml-1" />
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">名桜大学キャンパス</p>
                <p className="text-sm text-muted-foreground">沖縄県名護市為又1220-1</p>
              </div>
            </div>
            <Link href="/info">
              <Button variant="outline" className="w-full">アクセスマップ</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>よくあるご質問</span>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                すべての質問
                <ChevronRight className="h-4 w-4 inline ml-1" />
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">お困りの方はこちら</p>
                <p className="text-sm text-muted-foreground">よくある質問をまとめています</p>
              </div>
            </div>
            <Link href="/faq">
              <Button variant="outline" className="w-full">FAQ一覧へ</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}