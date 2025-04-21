"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { NavMenu } from "@/components/layout/nav-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-full">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/32rogo.svg" alt="名桜大学祭2025ロゴ" className="h-12 w-auto" />
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="icon" aria-label="検索" className="h-10 w-10">
                <Search className="h-7 w-7" />
              </Button>
              <ThemeToggle />
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="メニュー" 
                onClick={() => setIsMenuOpen(true)}
                className="h-10 w-10"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;