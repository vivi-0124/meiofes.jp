import { CalendarDays, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getNewsList } from "@/lib/microcms";

// ページをサーバーコンポーネントとして指定
export const revalidate = 60; // 60秒ごとに再検証

export default async function NewsPage() {
  // MicroCMSからニュース記事を取得
  const newsItems = await getNewsList();

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">お知らせ</h1>
          <p className="text-xl text-muted-foreground">
            名桜大学祭に関する最新情報をお届けします
          </p>
        </div>
        <div className="space-y-6">
          {newsItems.map((item: any) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {item.publishedAt ? item.publishedAt.slice(0, 10) : ''}
                  </div>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              {/* <CardFooter className="flex justify-end">
                <Link href={`/news/${item.id}`} passHref>
                  <Button variant="ghost" size="sm">
                    続きを読む
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}