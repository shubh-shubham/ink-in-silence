"use client";

import {
  Home,
  Compass,
  Heart,
  Bookmark,
  User,
} from "lucide-react";

const menuItems = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: Compass,
    label: "Explore",
  },
  {
    icon: Heart,
    label: "Moods",
  },
  {
    icon: Bookmark,
    label: "Bookmarks",
  },
  {
    icon: User,
    label: "Author",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-24 border-r border-white/10 bg-black/40 backdrop-blur-xl lg:flex lg:flex-col lg:items-center">
      
      {/* Logo */}
      <div className="mt-8 text-center">
        <div className="text-2xl">🪶</div>

        <p className="mt-3 text-xs tracking-[0.3em] text-zinc-500">
          INK
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-20 flex flex-col gap-8">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="group flex flex-col items-center gap-2 text-zinc-500 transition hover:text-white"
            >
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition group-hover:border-white/10 group-hover:bg-white/[0.06]">
                <Icon size={20} />
              </div>

              <span className="text-xs">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}