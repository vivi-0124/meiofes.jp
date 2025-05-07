import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex justify-between items-start">
              <Link href="/" className="inline-block">
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">名桜大学祭</span>
                  <span className="font-semibold">2025 OFFICIAL WEBSITE</span>
                </div>
              </Link>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/meiofes32" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              名桜大学祭は毎年11月に開催される沖縄県名護市の名桜大学の大学祭です。
              学生主催のイベント、フード、パフォーマンスなど様々な催しを予定しています。
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">サイトマップ</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                トップページ
              </Link>
              <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                お知らせ
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                大学祭について
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">お問い合わせ</h3>
            <address className="not-italic text-muted-foreground">
              <p>第32回名桜大学祭実行委員会</p>
              <p>〒905-8585</p>
              <p>沖縄県名護市字為又1220-1</p>
              <p className="mt-2">Email: <a href="mailto:info@meio-festival.com" className="hover:underline">info@meio-festival.com</a></p>
              <p>Tel: <a href="tel:0980-XX-XXXX" className="hover:underline">0980-XX-XXXX</a></p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              利用規約
            </Link>
          </div> */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} 第32回名桜大学祭実行委員会
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;