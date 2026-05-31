"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface RecentPoem {
  slug: string;
  title: string;
}

export default function RecentlyRead() {

  const [poems, setPoems] =
    useState<RecentPoem[]>([]);

  useEffect(() => {

    const stored =
      localStorage.getItem(
        "recent-poems"
      );

    if (stored) {

      setPoems(
        JSON.parse(stored)
      );

    }

  }, []);

  if (poems.length === 0)
    return null;

  return (

    <section className="mb-24">

      <h2 className="mb-10 text-4xl font-light text-white">

        Recently Read

      </h2>

      <div className="flex flex-wrap gap-6">

        {poems.map((poem) => (

          <Link
            key={poem.slug}
            href={`/poetry/${poem.slug}`}
          >

            <div className="group relative w-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition hover:bg-white/[0.05]">
              <p className="text-3xl font-light text-white transition group-hover:translate-x-1">
                {poem.title}
              </p>
              <p className="mt-4 text-sm tracking-[0.25em] text-white/30">
                RECENTLY VISITED
                </p>
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}