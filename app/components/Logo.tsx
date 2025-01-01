"use client";
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <Image
          src="/logo.jpg"
          alt="Sattva Wellness"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-xl font-semibold bg-gradient-to-r from-teal-700 to-emerald-600 dark:from-teal-300 dark:to-emerald-200 bg-clip-text text-transparent">
        Sattva
      </span>
    </div>
  );
} 