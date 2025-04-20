import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function FAQPage() {
  const faqs = [
    {
      category: "開催について",
      items: [
        {
          question: "入場料は必要ですか？",
          answer: "いいえ、入場は無料です。どなたでもご参加いただけます。",
        },
        {
          question: "雨天の場合はどうなりますか？",
          answer: "雨天決行です。ただし、荒天の場合は安全を考慮して一部イベントを中止または変更する場合があります。",
        },
        {
          question: "駐車場はありますか？",
          answer: "はい、学内に無料駐車場をご用意しています。ただし、台数に限りがありますので、可能な限り公共交通機関のご利用をお願いいたします。",
        },
      ],
    },
    {
      category: "出店・参加について",
      items: [
        {
          question: "模擬店の出店申し込みはどのように行いますか？",
          answer: "出店申し込みは学内団体のみを対象としています。詳細は学内で配布する出店要項をご確認ください。",
        },
        {
          question: "企業の協賛は受け付けていますか？",
          answer: "はい、各種協賛プランをご用意しています。詳しくは「企業様へ」のページをご確認いただくか、お問い合わせフォームよりご連絡ください。",
        },
      ],
    },
    {
      category: "その他",
      items: [
        {
          question: "取材は可能ですか？",
          answer: "はい、事前申請が必要です。お問い合わせフォームより、取材の目的と希望日時をお知らせください。",
        },
        {
          question: "ペットを連れて行くことはできますか？",
          answer: "申し訳ございませんが、補助犬を除くペットの入場はご遠慮いただいております。",
        },
        {
          question: "迷子や落し物はどこで対応していますか？",
          answer: "総合案内所にて対応いたします。お困りの際は、お近くのスタッフにお声がけください。",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">よくあるご質問</h1>
          <p className="text-xl text-muted-foreground">
            名桜大学祭に関するよくあるご質問をまとめました
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, index) => (
            <Card key={index} className="p-6">
              <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}