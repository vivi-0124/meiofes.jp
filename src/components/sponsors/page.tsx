import { Building2, Target, Users2, Rocket, BadgeCheck, Newspaper } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SponsorsPage() {
  const benefits = [
    {
      icon: Target,
      title: "ターゲット層へのリーチ",
      description: "大学生を中心とした若年層への効果的なアプローチが可能です",
    },
    {
      icon: Users2,
      title: "地域との繋がり",
      description: "地域コミュニティとの関係構築、ブランド認知度の向上に貢献します",
    },
    {
      icon: Rocket,
      title: "イベント露出",
      description: "会場内での広告掲示、パンフレットへの掲載などの露出機会があります",
    },
  ];

  const plans = [
    {
      title: "プラチナスポンサー",
      price: "100,000円〜",
      features: [
        "メインステージでの企業PR",
        "公式サイトへのロゴ掲載",
        "パンフレットへの広告掲載（1ページ）",
        "会場内大型バナー設置",
        "SNSでの告知協力",
      ],
    },
    {
      title: "ゴールドスポンサー",
      price: "50,000円〜",
      features: [
        "公式サイトへのロゴ掲載",
        "パンフレットへの広告掲載（1/2ページ）",
        "会場内バナー設置",
        "SNSでの告知協力",
      ],
    },
    {
      title: "シルバースポンサー",
      price: "30,000円〜",
      features: [
        "公式サイトへのロゴ掲載",
        "パンフレットへの広告掲載（1/4ページ）",
        "SNSでの告知協力",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">企業様へ</h1>
          <p className="text-xl text-muted-foreground">
            名桜大学祭2024を一緒に盛り上げていただける企業様を募集しています
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">協賛のメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">協賛プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription className="text-xl font-bold text-primary">
                    {plan.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground mb-6">
            協賛に関する詳細資料のご請求、ご質問等がございましたら、<br />
            下記よりお気軽にお問い合わせください。
          </p>
          <Button size="lg">
            <Newspaper className="h-4 w-4 mr-2" />
            資料請求・お問い合わせ
          </Button>
        </div>
      </div>
    </div>
  );
}