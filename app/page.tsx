import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";

import Hero from "@/components/home/Hero";

import FeaturedPoems from "@/components/explore/FeaturedPoems";
import MoodCategories from "@/components/explore/MoodCategories";
import SearchPoems from "@/components/explore/SearchPoems";

import AmbientParticles from "@/components/ui/AmbientParticles";

import { supabase } from "@/lib/supabase/client";


export default async function Home() {

  const { data: poems } =
    await supabase
      .from("poems")
      .select("*");

  const featuredPoem =
    poems?.[
      new Date().getDate() %
      poems.length
    ];

  return (

    <main className="min-h-screen bg-black text-white">

      <Sidebar />

      <Navbar />

      <MobileNav />

      <AmbientParticles />

      <div className="mx-auto max-w-[1600px] lg:ml-24">

        <Hero />

        {featuredPoem && (

          <section className="mx-auto mb-32 max-w-[1350px] px-6 lg:px-10">

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">

              Featured Tonight

            </p>

<div className="group relative mx-auto max-w-[1200px] overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-12 py-10 transition hover:bg-white/[0.05]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

              <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2">

               <div className="max-w-2xl py-4">

                  <p className="mb-8 text-sm uppercase tracking-[0.3em] text-white/40">
                    {featuredPoem.mood}
                  </p>

                  <h2 className="max-w-2xl text-5xl font-light leading-tight text-white lg:text-6xl">

                    {featuredPoem.title}

                  </h2>

                  <p className="mt-10 max-w-2xl text-xl leading-[1.8] text-zinc-400">

                    {featuredPoem.excerpt}

                  </p>

                  <a
                    href={`/poetry/${featuredPoem.slug}`}
                    className="mt-10 inline-flex w-fit items-center rounded-full border border-white/10 bg-white px-7 py-3 text-black transition duration-300 hover:scale-[1.02] hover:bg-zinc-200"                  >

                    Read Tonight's Poem

                  </a>

                </div>

                <div className="relative hidden items-center justify-center lg:flex">

                  <div className="absolute h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />

                  <div className="relative animate-pulse text-[160px] opacity-60">
                    ✦
                  </div>

                </div>

              </div>

            </div>

          </section>

        )}

        <SearchPoems
          poems={poems || []}
        />

        <FeaturedPoems />

        <MoodCategories />

      </div>

    </main>
  );
}