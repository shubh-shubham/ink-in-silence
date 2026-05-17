"use client";

export default function LanguageToggle() {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
      
      <button className="rounded-full bg-white px-6 py-3 text-sm text-black">
        English
      </button>

      <button className="px-6 py-3 text-sm text-zinc-400 transition hover:text-white">
        हिंदी
      </button>
    </div>
  );
}