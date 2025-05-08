import { MapPin, Calendar, Clock, Train, Bus, Car, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function InfoPage() {
  const accessMethods = [
    {
      icon: Train,
      title: "電車でお越しの方",
      description: "名護駅から徒歩15分、またはバス5分",
    },
    {
      icon: Bus,
      title: "バスでお越しの方",
      description: "名桜大学前バス停下車すぐ",
    },
    {
      icon: Car,
      title: "お車でお越しの方",
      description: "学内駐車場をご利用いただけます（無料）",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">開催情報</h1>
          <p className="text-xl text-muted-foreground">
            名桜大学祭2024の開催概要をご案内いたします
          </p>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertTitle>開催情報は随時更新いたします</AlertTitle>
          <AlertDescription>
            イベントスケジュールなど、詳細が決定次第順次公開していきます。
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                開催日程
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">2024年11月予定</p>
              <p className="text-muted-foreground">
                ※詳細な日程は決定次第お知らせいたします
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                開催時間
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">10:00 - 20:00（予定）</p>
              <p className="text-muted-foreground">
                ※イベントにより終了時間が異なる場合があります
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              会場
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold">名桜大学 キャンパス</p>
                <p className="text-muted-foreground">〒905-8585 沖縄県名護市字為又1220-1</p>
              </div>
              
              <div className="aspect-video w-full bg-muted rounded-lg">
                {/* Google Mapsを埋め込む予定 */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground">地図は準備中です</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">アクセス</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accessMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg">
            詳細なアクセスマップ
          </Button>
        </div>
      </div>
    </div>
  );
}