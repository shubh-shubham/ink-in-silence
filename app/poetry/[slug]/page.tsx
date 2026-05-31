import ReadingProgress from "@/components/poetry/ReadingProgress";
import { supabase } from "@/lib/supabase/client";
import SharePoem from "@/components/poetry/SharePoem";
import AnimatedPoemContent from "@/components/poetry/AnimatedPoemContent";
import PoemIntro from "@/components/poetry/PoemIntro";
import Link from "next/link";
import RecentlyViewedTracker from "@/components/poetry/RecentlyViewedTracker";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PoetryPage({
  params,
}: PageProps) {

  const { slug } = await params;

  const { data: poem } =
    await supabase
      .from("poems")
      .select("*")
      .eq("slug", slug)
      .single();

  if (!poem) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-black text-white">

        Poem not found

      </div>

    );
  }

  const {
    data: relatedPoems,
  } =
    await supabase
      .from("poems")
      .select("*")
      .eq("mood", poem.mood)
      .neq("slug", slug)
      .limit(3);

  const wordCount =
    poem.content
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .length;

  const readingTime =
    Math.max(
      1,
      Math.ceil(
        wordCount / 180
      )
    );

  const moodThemes:
    Record<
      string,
      string
    > = {

    Love:
      "from-rose-500/10 to-pink-500/5",

    Heartbreak:
      "from-red-900/20 to-black",

    Memories:
      "from-indigo-500/10 to-blue-500/5",

    Hope:
      "from-amber-300/10 to-yellow-500/5",

    Loneliness:
      "from-zinc-700/20 to-black",

    Dreams:
      "from-violet-500/10 to-fuchsia-500/5",

    Rain:
      "from-slate-500/10 to-zinc-900",

    Midnight:
      "from-blue-950/20 to-black",

    Silence:
      "from-zinc-500/10 to-black",
  };

  return (

    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Cinematic Background */}

      {poem.template_image && (

        <div
          className="absolute inset-0 scale-105 animate-[slowZoom_20s_linear_infinite_alternate]"
          style={{

            backgroundImage:
              `url(${poem.template_image})`,

            backgroundSize:
              "cover",

            backgroundPosition:
              "center",

          }}
        />

      )}

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      {/* Gradient Overlay */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          moodThemes[
            poem.mood
          ] ||
          "from-black to-black"
        }`}
      />

      <RecentlyViewedTracker
        slug={poem.slug}
        title={poem.title}
      />

      <ReadingProgress />

      {/* Ambient Blur */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-zinc-500/10 blur-3xl" />

      </div>

      {/* Floating Navigation */}

      <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2">

        <div className="flex items-center gap-6 rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-2xl">

          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >

            Home

          </Link>

          <div className="h-5 w-px bg-white/10" />

          <p className="text-sm uppercase tracking-[0.3em] text-white/40">

            Ink in Silence

          </p>

        </div>

      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-32">

        <p className="mb-6 uppercase tracking-[0.3em] text-white/40">

          {poem.mood}

        </p>

        {poem.template_name && (

          <div className="mb-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">

            <div className="h-3 w-3 rounded-full bg-white/60" />

            <p className="text-sm text-white">

              {poem.template_name}

            </p>

          </div>

        )}

        <h1 className="max-w-3xl text-5xl font-light leading-tight text-white lg:text-7xl">

          {poem.title}

        </h1>

        <div className="mt-8 flex items-center gap-3">

          <div className="h-2 w-2 rounded-full bg-white/40" />

          <p className="text-sm uppercase tracking-[0.3em] text-white/50">

            by {
              poem.author_name ||
              "Anonymous"
            }

          </p>

        </div>

        <div className="mb-16 mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400">

          <span>

            {readingTime} min read

          </span>

          <span>

            •

          </span>

          <span>

            {
              wordCount < 80
                ? "Short poem"
                : wordCount < 200
                ? "Reflective piece"
                : "Long read"
            }

          </span>

          <div className="ml-4">

            <SharePoem />

          </div>

        </div>

        {poem.audio_url && (

          <div className="mb-14">

            <audio
              controls
              src={poem.audio_url}
              className="w-full"
            />

          </div>

        )}

        <PoemIntro />

        <div className="mt-16 max-w-3xl">

          <AnimatedPoemContent
            content={poem.content}
          />

        </div>

        {relatedPoems &&
          relatedPoems.length >
            0 && (

            <section className="mt-40">

              <h2 className="mb-12 text-4xl font-light text-white">

                More in {poem.mood}

              </h2>

              <div className="grid gap-8 md:grid-cols-3">

                {relatedPoems.map(
                  (related) => (

                    <Link
                      key={
                        related.id
                      }
                      href={`/poetry/${related.slug}`}
                    >

                      <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:bg-white/[0.05]">

                        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/40">

                          {
                            related.mood
                          }

                        </p>

                        <h3 className="text-3xl text-white">

                          {
                            related.title
                          }

                        </h3>

                        <p className="mt-6 line-clamp-4 text-zinc-400">

                          {
                            related.excerpt
                          }

                        </p>

                      </div>

                    </Link>

                  )
                )}

              </div>

            </section>

          )}

      </div>

    </main>
  );
}