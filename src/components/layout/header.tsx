"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className="sticky top-0 z-50 w-full px-4 pt-4">
        <header
          className={cn(
            "w-full transition-all duration-300 rounded-full shadow-md bg-white text-black",
            isScrolled ? "shadow-lg" : ""
          )}
        >
          <div className="container mx-auto px-4 max-w-full">
            <div className="flex h-16 md:h-20 items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href="/" className="flex items-center space-x-4 px-4">
                  <Image
                    src="/rogo.svg"
                    alt="名桜大学祭2025 ロゴマーク"
                    width={64}
                    height={64}
                    className="h-10 md:h-12 w-auto"
                  />
                  <Image
                    src="/名桜大学祭.svg"
                    alt="名桜大学祭 テキスト"
                    width={64}
                    height={64}
                    className="h-6 md:h-8 w-auto"
                  />
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="メニュー" 
                  onClick={() => setIsMenuOpen(true)}
                  className="h-12 w-12 md:h-16 md:w-16 text-w"
                >
                  <Menu className="h-6 w-6 md:h-8 md:w-8" />
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