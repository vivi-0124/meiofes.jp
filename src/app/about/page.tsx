import { MapPin, Calendar, Users, Trophy, Music, Store } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const features = [
    {
      icon: Music,
      title: "ステージパフォーマンス",
      description: "学生バンド、ダンス、お笑いなど、多彩なステージイベントを開催",
    },
    {
      icon: Store,
      title: "模擬店・出店",
      description: "学生団体による飲食店や企画出店が多数出展",
    },
    {
      icon: Trophy,
      title: "コンテスト企画",
      description: "様々な競技や催し物で盛り上がりを創出",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">大学祭について</h1>
          <p className="text-xl text-muted-foreground">
            名桜大学の伝統と革新が融合する、年に一度の祭典
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">開催日時</h3>
                <p className="text-muted-foreground">2024年11月予定</p>
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
                <p className="text-muted-foreground">名桜大学祭実行委員会</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>テーマ</CardTitle>
              <CardDescription>2024年度 大学祭テーマ</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-4">Coming Soon...</p>
              <p className="text-muted-foreground">
                今年度のテーマは準備中です。<br />
                決定次第、こちらで発表いたします。
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
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

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">参加をご検討の方へ</h2>
          <p className="text-muted-foreground mb-6">
            出店・協賛・ボランティアなど、様々な形で大学祭に参加いただけます。<br />
            詳しい情報は各ページをご確認ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">出店について</Button>
            <Button size="lg" variant="outline">協賛のお願い</Button>
          </div>
        </div>
      </div>
    </div>
  );
}