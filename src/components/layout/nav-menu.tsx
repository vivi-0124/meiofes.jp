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
        "bg-white text-black",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="container h-full flex flex-col relative pb-20 px-4 max-w-full py-4">
        <div className="bg-black text-white rounded-full">
          <div className="flex items-center justify-between h-16 md:h-20 px-4">
            <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
              <img src="/light-rogo.svg" alt="名桜大学祭2025ロゴ" className="h-12 md:h-16 w-auto" />
              <p className="text-lg">名桜大学祭</p>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose} 
              aria-label="閉じる"
              className="h-12 w-12 md:h-16 md:w-16 text-white"
            >
              <X className="h-6 w-6 md:h-8 md:w-8" />
            </Button>
          </div>
        </div>
        <nav className="flex flex-col p-10 space-y-8">
          <Link 
            href="/" 
            className="text-3xl font-medium transition-colors hover:text-primary hover:bg-gray-100 rounded-lg p-2 text-center w-full flex justify-center"
            onClick={onClose}
          >
            TOP
          </Link>
          
          <Link 
            href="/news" 
            className="text-3xl font-medium transition-colors hover:text-primary hover:bg-gray-100 rounded-lg p-2 text-center w-full flex justify-center"
            onClick={onClose}
          >
            お知らせ
          </Link>
          
          <Link 
            href="/about" 
            className="text-3xl font-medium transition-colors hover:text-primary hover:bg-gray-100 rounded-lg p-2 text-center w-full flex justify-center"
            onClick={onClose}
          >
            大学祭について
          </Link>
          
          <Link 
            href="/sponsors" 
            className="text-3xl font-medium transition-colors hover:text-primary hover:bg-gray-100 rounded-lg p-2 text-center w-full flex justify-center"
            onClick={onClose}
          >
            企業様へ
          </Link>
          
          <Link 
            href="/info" 
            className="text-3xl font-medium transition-colors hover:text-primary hover:bg-gray-100 rounded-lg p-2 text-center w-full flex justify-center"
            onClick={onClose}
          >
            開催情報
          </Link>
        </nav>
        
        <div className="absolute bottom-10 right-4">
          <Link 
            href="/contact" 
            className="flex items-center bg-black rounded-full py-2 px-4 shadow-lg text-white"
            onClick={onClose}
          >
            <img src="/rogo.svg" alt="ロゴ" className="h-10 w-10 mr-2" />
            <div>
              <div className="text-xl font-bold">お問い合わせ</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}