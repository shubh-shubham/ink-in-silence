"use client";

import AmbientBackground from "../immersive/AmbientBackground";
import FeatherHero from "../immersive/FeatherHero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-40">
      
      <AmbientBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Left Content */}
        <div>
          
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Immersive Poetry Experience
          </p>

          <h1 className="text-6xl leading-[1] text-white md:text-8xl">
            Poetry that speaks
            <span className="block text-zinc-500">
              your hidden emotions.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">
            A cinematic poetry platform crafted for silence,
            storytelling, emotion, midnight thoughts, and immersive reading.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            
            <button className="rounded-full bg-white px-10 py-5 text-sm font-medium text-black transition hover:scale-105">
              Explore Poems
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.06]">
              Listen in Voice
            </button>
          </div>

          <div className="mt-20 italic text-zinc-600">
            “Some feelings survive only in poetry.”
          </div>
        </div>

        {/* Right Visual */}
        <div>
          <FeatherHero />
        </div>
      </div>
    </section>
  );
}