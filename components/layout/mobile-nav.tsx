"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="container h-full flex flex-col">
        <div className="flex items-center justify-between h-16 border-b">
          <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
            <span className="font-bold text-xl">名桜大学祭</span>
            <span className="text-primary font-semibold">2024</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="閉じる">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="flex flex-col pt-8 pb-8 space-y-8">
          <Link 
            href="/news" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={onClose}
          >
            お知らせ
          </Link>
          <Link 
            href="/about" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={onClose}
          >
            大学祭について
          </Link>
          <Link 
            href="/sponsors" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={onClose}
          >
            企業様へ
          </Link>
          <Link 
            href="/info" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={onClose}
          >
            開催情報
          </Link>
          <Link 
            href="/faq" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={onClose}
          >
            Q&A
          </Link>
        </nav>
        
        <div className="mt-auto pb-8">
          <div className="flex flex-col space-y-4">
            <Button className="w-full">
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}