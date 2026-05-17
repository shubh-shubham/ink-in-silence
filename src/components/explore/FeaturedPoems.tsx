import PoemCard from "./PoemCard";

const poems = [
  {
    title: "Midnight Conversations",
    excerpt:
      "Some nights carry memories louder than words ever could.",
    mood: "Loneliness",
    readTime: "3 min read",
  },
  {
    title: "Rain on Old Letters",
    excerpt:
      "The rain remembered things I tried very hard to forget.",
    mood: "Memories",
    readTime: "4 min read",
  },
  {
    title: "Silence Between Us",
    excerpt:
      "Not every goodbye arrives with words. Some arrive quietly.",
    mood: "Heartbreak",
    readTime: "5 min read",
  },
];

export default function FeaturedPoems() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Featured Collection
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Poems that stay with you.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {poems.map((poem) => (
            <PoemCard
              key={poem.title}
              title={poem.title}
              excerpt={poem.excerpt}
              mood={poem.mood}
              readTime={poem.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}