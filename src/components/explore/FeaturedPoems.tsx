import Link from "next/link";

import { supabase } from "@/lib/supabase/client";

export default async function FeaturedPoems() {

  const { data: poems } = await supabase
    .from("poems")
    .select("*")
    .limit(6);
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Featured Collection
          </p>

          <h2 className="text-5xl text-white">
            Poems that stay with you.
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {poems?.map((poem) => (

            <Link
              key={poem.id}
              href={`/poetry/${poem.slug}`}
            >

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              {poem.cover_image && (

              <div
                className="mb-6 h-64 rounded-3xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${poem.cover_image})`,
                }}
              />

            )}
                <div className="mb-5 inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400">
                  {poem.mood}
                </div>

                <h3 className="text-4xl text-white">
                  {poem.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  {poem.excerpt}
                </p>

                <div className="mt-10 flex items-center justify-between">

                  <span className="text-sm text-zinc-500">

                    {
                      Math.max(
                        1,
                        Math.ceil(
                          poem.excerpt
                            .split(/\s+/)
                            .filter(Boolean)
                            .length / 180
                        )
                      )
                    }
                    {" "}
                    min read

                  </span>

                  <div className="rounded-full border border-white/10 px-5 py-3 text-sm text-white">
                    Read
                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}