"use client";

import {
  Home,
  Compass,
  Heart,
  Bookmark,
  User,
} from "lucide-react";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-2xl lg:hidden">
      
      <button className="flex flex-col items-center gap-1 text-white">
        <Home size={20} />
        <span className="text-[10px]">Home</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-zinc-500">
        <Compass size={20} />
        <span className="text-[10px]">Explore</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-zinc-500">
        <Heart size={20} />
        <span className="text-[10px]">Moods</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-zinc-500">
        <Bookmark size={20} />
        <span className="text-[10px]">Saved</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-zinc-500">
        <User size={20} />
        <span className="text-[10px]">Profile</span>
      </button>
    </div>
  );
}