"use client";

const moods = [
  {
    title: "Midnight Thoughts",
    description: "For the nights when silence becomes louder than words.",
    glow: "from-indigo-500/20",
  },
  {
    title: "Silent Love",
    description: "Poetry about feelings never fully spoken aloud.",
    glow: "from-pink-500/20",
  },
  {
    title: "Rainy Memories",
    description: "Fragments of nostalgia hidden inside old moments.",
    glow: "from-cyan-500/20",
  },
  {
    title: "Healing Slowly",
    description: "Soft words for broken hearts learning peace again.",
    glow: "from-amber-500/20",
  },
];

export default function MoodCategories() {
  return (
    <section className="relative px-6 py-32">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-16">
          
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Explore by Mood
          </p>

          <h2 className="max-w-3xl text-5xl leading-tight text-white md:text-6xl">
            Every emotion deserves
            <span className="block text-zinc-500">
              its own poetry.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {moods.map((mood) => (
            <div
              key={mood.title}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10 transition duration-500 hover:-translate-y-2 hover:border-white/20"
            >
              
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${mood.glow} to-transparent opacity-0 transition duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                
                <h3 className="text-4xl text-white">
                  {mood.title}
                </h3>

                <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                  {mood.description}
                </p>

                <button className="mt-10 rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black">
                  Explore Mood
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}