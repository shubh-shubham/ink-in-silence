"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/5 bg-black/30 backdrop-blur-xl">
      
      <div className="ml-0 flex items-center justify-between px-6 py-6 lg:ml-24">
        
        {/* Brand */}
        <div>
          <h1 className="text-3xl text-white">
            Ink in Silence
          </h1>
        </div>

        {/* Links */}
        <div className="hidden items-center gap-10 md:flex">
          <button className="text-sm text-zinc-400 transition hover:text-white">
            Explore
          </button>

          <button className="text-sm text-zinc-400 transition hover:text-white">
            Categories
          </button>

          <button className="text-sm text-zinc-400 transition hover:text-white">
            Moods
          </button>

          <button className="rounded-full border border-white/10 bg-white px-6 py-3 text-sm text-black transition hover:scale-105">
            Studio
          </button>
        </div>
      </div>
    </nav>
  );
}