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
      <div className="sticky top-0 z-50 w-full py-4 px-4 md:px-8">
        <header
          className={cn(
            "w-full transition-all duration-300 rounded-full shadow-md bg-black dark:bg-white text-white dark:text-black",
            isScrolled ? "shadow-lg" : ""
          )}
        >
          <div className="container mx-auto px-4 md:px-8 max-w-full">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href="/" className="flex items-center space-x-2">
                  <img src="/32rogo.svg" alt="名桜大学祭2025ロゴ" className="h-10 w-auto" />
                </Link>
                <p className="text-lg">名桜大学祭</p>
              </div>

              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="icon" aria-label="検索" className="h-10 w-10 text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10">
                  <Search className="h-6 w-6" />
                </Button>
                <ThemeToggle />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="メニュー" 
                  onClick={() => setIsMenuOpen(true)}
                  className="h-10 w-10 text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>
      
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;