"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [

  {
    label: "Home",
    href: "/",
    icon: "⌂",
  },

  {
    label: "Explore",
    href: "/#explore",
    icon: "✦",
  },

  {
    label: "Favorites",
    href: "/favorites",
    icon: "♡",
  },

  {
    label: "Studio",
    href: "/studio",
    icon: "✎",
  },
];

export default function FloatingDock() {

  const pathname =
    usePathname();

  return (

    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">

      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-2xl">

        {items.map((item) => {

          const active =
            pathname === item.href;

          return (

            <Link
              key={item.href}
              href={item.href}
            >

              <div
                className={`group flex h-14 w-14 items-center justify-center rounded-full text-xl transition ${
                  active
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >

                {item.icon}

              </div>

            </Link>

          );
        })}

      </div>

    </div>
  );
}