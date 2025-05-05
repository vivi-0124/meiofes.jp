import { MapPin, Calendar, Users, Trophy, Music, Store, PaintBucket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const features = [
    {
      icon: Music,
      title: "ステージパフォーマンス",
      description: "学生バンド、ダンス、豪華アーティストなど、多彩なステージイベントを開催",
    },
    {
      icon: Store,
      title: "模擬店・出店",
      description: "学生団体による飲食店や企画出店が多数出展",
    },
    {
      icon: PaintBucket,
      title: "装飾展示",
      description: "キャンパス全体を彩る学生制作の装飾物",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">大学祭について</h1>
          <p className="text-xl text-muted-foreground">
            沖縄北部・名護市の青春が輝く、活気あふれる2日間
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">開催日時</h3>
                <p className="text-muted-foreground">2025年11月22日(土).23日(日)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">開催場所</h3>
                <p className="text-muted-foreground">名桜大学キャンパス</p>
                <p className="text-sm text-muted-foreground">沖縄県名護市為又1220-1</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">主催</h3>
                <p className="text-muted-foreground">第32回名桜大学祭実行委員会</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>テーマ</CardTitle>
              <CardDescription>2025年度 大学祭テーマ</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-4">ひとやすみ</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-0">
          <h2 className="text-2xl font-bold mb-6">開催内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}