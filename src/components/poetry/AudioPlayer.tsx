"use client";

import { Play } from "lucide-react";

export default function AudioPlayer() {
  return (
    <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
      
      <div className="flex items-center gap-5">
        
        {/* Play Button */}
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition hover:scale-105">
          <Play size={20} fill="black" />
        </button>

        {/* Waveform */}
        <div className="flex flex-1 items-center gap-1">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="w-1 rounded-full bg-zinc-500"
              style={{
                height: `${Math.random() * 35 + 10}px`,
              }}
            />
          ))}
        </div>

        {/* Time */}
        <div className="text-sm text-zinc-500">
          02:18
        </div>
      </div>
    </div>
  );
}