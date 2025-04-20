import { CalendarDays, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "名桜大学祭2024 ティザーサイトオープン",
      date: "2024-05-01",
      category: "お知らせ",
      description: "名桜大学祭2024の公式ウェブサイトを公開しました。今後、イベント情報や出店情報など、随時更新していきます。",
    },
    {
      id: 2,
      title: "協賛企業様の募集開始",
      date: "2024-05-15",
      category: "協賛",
      description: "名桜大学祭2024では、共に学園祭を盛り上げていただける企業様を募集しています。詳しくは協賛ページをご覧ください。",
    },
    {
      id: 3,
      title: "出店者説明会開催のお知らせ",
      date: "2024-06-01",
      category: "出店",
      description: "学園祭での出店を検討されている方向けの説明会を開催いたします。参加をご希望の方は事前申し込みが必要です。",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">お知らせ</h1>
        <p className="text-muted-foreground mb-8">
          名桜大学祭に関する最新情報をお届けします
        </p>
        
        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="ml-auto" size="sm">
                  続きを読む
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}