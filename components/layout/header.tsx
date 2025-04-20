"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { MobileNav } from "@/components/layout/mobile-nav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">名桜大学祭</span>
              <span className="text-primary font-semibold">2024</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/news" className="text-foreground/80 hover:text-foreground transition-colors">
              お知らせ
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              大学祭について
            </Link>
            <Link href="/sponsors" className="text-foreground/80 hover:text-foreground transition-colors">
              企業様へ
            </Link>
            <Link href="/info" className="text-foreground/80 hover:text-foreground transition-colors">
              開催情報
            </Link>
            <Link href="/faq" className="text-foreground/80 hover:text-foreground transition-colors">
              Q&A
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="検索">
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="メニュー"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;