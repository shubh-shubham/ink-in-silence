import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

import AudioPlayer from "@/components/poetry/AudioPlayer";
import LanguageToggle from "@/components/poetry/LanguageToggle";
import MobileNav from "@/components/layout/MobileNav";

export default function PoetryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      <Sidebar />
      <Navbar />
      <MobileNav />
      
      <div className="lg:ml-24">
        
        <section className="relative overflow-hidden px-6 pb-32 pt-40">
          
          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl">
            
            {/* Top Meta */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
                  Love • 2 min read
                </p>

                <h1 className="text-6xl leading-tight text-white md:text-7xl">
                  The Last Goodbye
                </h1>
              </div>

              <LanguageToggle />
            </div>

            {/* Poem */}
            <div className="mt-20 space-y-12 text-3xl leading-[2.2] text-zinc-200 md:text-4xl">
              
              <p>
                Some goodbyes are not said,
                they are felt.
              </p>

              <p>
                They stay in silence,
                where words can’t reach.
              </p>

              <p>
                And years later,
                they ache the same.
              </p>

              <p>
                Because some people
                never really leave,
                they just become a part
                of your quiet.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-16 italic text-zinc-600">
              — Ink in Silence
            </div>

            {/* Audio */}
            <AudioPlayer />

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              
              <button className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black">
                Like
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black">
                Bookmark
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black">
                Share
              </button>

              <button className="rounded-full bg-white px-6 py-3 text-sm text-black transition hover:scale-105">
                Listen
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}