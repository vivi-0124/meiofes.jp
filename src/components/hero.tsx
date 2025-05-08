"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] text-center">
      <div className="mb-6">
        <Image
          src="/32rogo.webp"
          alt="名桜大学祭2025ロゴ"
          width={320}
          height={320}
          className="w-48 md:w-56 mx-auto"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        第32回名桜大学祭
      </h1>
      <p className="text-xl mb-8 max-w-2xl">
        2025/11/22(土).23(日)<br />
        @名桜大学キャンパス
      </p>
    </div>
  );
} 