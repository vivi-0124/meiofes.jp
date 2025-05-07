import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getNewsDetail, getNewsList } from "@/lib/microcms";
import Link from "next/link";

export const revalidate = 60;

// すべての記事IDを事前に生成
export async function generateStaticParams() {
  const news = await getNewsList();
  
  return news.map((item: any) => ({
    id: item.id,
  }));
}

// 型エラーを回避
export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // dynamic API の params を await して取得
    const { id } = await params;
    const news = await getNewsDetail(id);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/news" className="text-primary hover:underline">
            &larr; お知らせ一覧に戻る
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{news.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 mr-1" />
            {news.publishedAt ? news.publishedAt.slice(0, 10).split('-').join('/') : ''}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">{news.title}</h1>
        
        <div className="prose max-w-none" 
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </div>
    </div>
  );
}