"use client";

type PoemCardProps = {
  title: string;
  excerpt: string;
  mood: string;
  readTime: string;
};

export default function PoemCard({
  title,
  excerpt,
  mood,
  readTime,
}: PoemCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05]">
      
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
      </div>

      {/* Mood */}
      <div className="relative z-10 mb-5 inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400">
        {mood}
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-4xl leading-tight text-white">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="relative z-10 mt-6 text-lg leading-8 text-zinc-400">
        {excerpt}
      </p>

      {/* Footer */}
      <div className="relative z-10 mt-10 flex items-center justify-between">
        
        <span className="text-sm text-zinc-500">
          {readTime}
        </span>

        <button className="rounded-full border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-white hover:text-black">
          Read
        </button>
      </div>
    </div>
  );
}