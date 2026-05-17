"use client";

export default function FeatherHero() {
  return (
    <div className="relative flex items-center justify-center py-20">
      
      {/* Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-amber-100/[0.05] blur-3xl" />

      {/* Feather */}
      <div className="relative z-10 rotate-[-10deg] text-[220px] opacity-90">
        🪶
      </div>

      {/* Floating Particles */}
      <div className="absolute left-1/2 top-10 h-3 w-3 rounded-full bg-white/30 blur-sm" />

      <div className="absolute left-[40%] top-32 h-2 w-2 rounded-full bg-amber-200/40 blur-sm" />

      <div className="absolute right-[40%] bottom-20 h-4 w-4 rounded-full bg-zinc-300/20 blur-sm" />
    </div>
  );
}