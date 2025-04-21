"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavMenu({ isOpen, onClose }: NavMenuProps) {
  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out",
        "bg-background dark:bg-black text-foreground dark:text-white",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="container h-full flex flex-col relative pb-20 px-0 max-w-full">
        <div className="flex items-center justify-between h-20 px-4">
          <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
            <img src="/32rogo.svg" alt="名桜大学祭2025ロゴ" className="h-12 w-auto" />
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            aria-label="閉じる"
            className="h-10 w-10 text-foreground dark:text-white hover:bg-background/10 dark:hover:bg-white/10"
          >
            <X className="h-7 w-7" />
          </Button>
        </div>
        
        <nav className="flex flex-col pt-10 px-8 space-y-8">
          <Link 
            href="/" 
            className="text-3xl font-medium transition-colors hover:text-primary"
            onClick={onClose}
          >
            TOP
          </Link>
          
          <Link 
            href="/news" 
            className="text-3xl font-medium transition-colors hover:text-primary flex items-center justify-between"
            onClick={onClose}
          >
            お知らせ
          </Link>
          
          <Link 
            href="/about" 
            className="text-3xl font-medium transition-colors hover:text-primary flex items-center justify-between"
            onClick={onClose}
          >
            大学祭について
          </Link>
          
          <Link 
            href="/sponsors" 
            className="text-3xl font-medium transition-colors hover:text-primary flex items-center justify-between"
            onClick={onClose}
          >
            企業様へ
          </Link>
          
          <Link 
            href="/info" 
            className="text-3xl font-medium transition-colors hover:text-primary flex items-center justify-between"
            onClick={onClose}
          >
            開催情報
          </Link>
        </nav>
        
        <div className="absolute bottom-10 right-4">
          <Link 
            href="/contact" 
            className="flex items-center bg-black dark:bg-white rounded-full py-2 px-6 shadow-lg text-white dark:text-black"
            onClick={onClose}
          >
            <img src="/32rogo.svg" alt="ロゴ" className="h-10 w-10 mr-2" />
            <div>
              <div className="text-xl font-bold">お問い合わせ</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}