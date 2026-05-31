"use client";

import { useState } from "react";
import Link from "next/link";
import useFavorites from "@/hooks/useFavorites";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

interface Poem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  mood: string;
}

export default function SearchPoems({
  poems,
}: {
  poems: Poem[];
}) {

  const [query, setQuery] =
    useState("");

  const [selectedMood, setSelectedMood] =
    useState("All");

const {
  favorites,
  toggleFavorite,
} = useFavorites();

  const moods = [
    "All",
    "Love",
    "Heartbreak",
    "Memories",
    "Loneliness",
    "Hope",
    "Silence",
    "Dreams",
    "Rain",
    "Midnight",
    "Goodbye",
    "Healing",
    "Overthinking",
    "Moonlight",
    "Distance",
  ];

  const moodDescriptions: Record<
    string,
    string
  > = {

    All:
      "Explore emotions written in silence.",

    Love:
      "Soft words that linger after midnight.",

    Heartbreak:
      "Where endings continue to echo.",

    Memories:
      "Fragments of moments that never left.",

    Loneliness:
      "Silence speaking louder than voices.",

    Hope:
      "Light surviving inside darkness.",

    Silence:
      "The quiet spaces between emotions.",

    Dreams:
      "Stories floating between sleep and reality.",

    Rain:
      "Every drop carrying an old memory.",

    Midnight:
      "Thoughts that awaken after the world sleeps.",

    Goodbye:
      "Some farewells stay forever unfinished.",

    Healing:
      "Slowly learning how to breathe again.",

    Overthinking:
      "When thoughts become louder than reality.",

    Moonlight:
      "Feelings glowing softly in the dark.",

    Distance:
      "Hearts trying to stay close across silence.",
  };

  const filteredPoems =
    poems.filter((poem) => {

      const matchesSearch =
        poem.title
          .toLowerCase()
          .includes(
            query.toLowerCase()
          );

      const matchesMood =
        selectedMood === "All"
        ||
        poem.mood === selectedMood;

      return (
        matchesSearch &&
        matchesMood
      );
    });

  return (
    <section className="px-6 py-20">

      <div className="mx-auto max-w-7xl">

        {/* Mood Hero */}
        <div
          className="relative mb-14 overflow-hidden rounded-[40px] border border-white/10 p-10"
          style={{
            background:
              selectedMood === "Love"
                ? "rgba(255,255,255,0.05)"
                : selectedMood === "Heartbreak"
                ? "rgba(255,0,0,0.08)"
                : selectedMood === "Memories"
                ? "rgba(120,120,255,0.08)"
                : selectedMood === "Loneliness"
                ? "rgba(150,150,150,0.08)"
                : "rgba(255,255,255,0.03)",
          }}
        >

          <AnimatePresence mode="wait">

            <motion.div

              key={selectedMood}

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -20,
              }}

              transition={{
                duration: 0.4,
              }}
            >

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Current Mood
              </p>

              <h2 className="flex items-center gap-4 text-5xl text-white">

                <motion.span

                  animate={{

                    y:
                      selectedMood === "Love"
                        ? [0, -10, 0]

                      : selectedMood === "Heartbreak"
                        ? [0, 0, 0]

                      : selectedMood === "Rain"
                        ? [0, 6, 0]

                      : selectedMood === "Dreams"
                        ? [0, -14, 0]

                      : [0, -6, 0],

                    rotate:
                      selectedMood === "Heartbreak"
                        ? [-4, 4, -4, 4, 0]

                      : selectedMood === "Moonlight"
                        ? [0, 6, -6, 0]

                      : [0, 3, -3, 0],

                    scale:
                      selectedMood === "Love"
                        ? [1, 1.12, 1]

                      : selectedMood === "Hope"
                        ? [1, 1.08, 1]

                      : [1, 1.03, 1],
                  }}

                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}

                  className="text-6xl"
                >

                  {
                    selectedMood === "Love"
                      ? "❤️"

                      : selectedMood === "Heartbreak"
                      ? "💔"

                      : selectedMood === "Memories"
                      ? "🌙"

                      : selectedMood === "Loneliness"
                      ? "☁️"

                      : selectedMood === "Hope"
                      ? "✨"

                      : selectedMood === "Silence"
                      ? "🤍"

                      : selectedMood === "Dreams"
                      ? "🪐"

                      : selectedMood === "Rain"
                      ? "🌧️"

                      : selectedMood === "Midnight"
                      ? "🌌"

                      : selectedMood === "Goodbye"
                      ? "🥀"

                      : selectedMood === "Healing"
                      ? "🕊️"

                      : selectedMood === "Overthinking"
                      ? "🫧"

                      : selectedMood === "Moonlight"
                      ? "🌕"

                      : selectedMood === "Distance"
                      ? "🚆"

                      : "🖋️"
                  }

                </motion.span>

                {selectedMood}

              </h2>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-400">

                {
                  moodDescriptions[
                    selectedMood
                  ]
                }

              </p>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* Search */}
        <div className="mb-10">

          <input
            placeholder="Search poems..."
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white outline-none placeholder:text-zinc-500"
          />

        </div>

        {/* Mood Filters */}
        <div className="mb-10 flex flex-wrap gap-3">

          {moods.map((mood) => (

            <button
              key={mood}
              onClick={() =>
                setSelectedMood(mood)
              }
              className={`rounded-full px-5 py-3 text-sm transition ${
                selectedMood === mood
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/[0.03] text-white"
              }`}
            >
              {mood}
            </button>

          ))}

        </div>

        {/* Results */}
        <>

          <>

            <p className="mb-8 text-zinc-500">

              {filteredPoems.length}
              {" "}
              poem
              {filteredPoems.length !== 1 && "s"}
              {" "}
              found

            </p>

            {filteredPoems.length === 0 && (

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center">

                <p className="text-2xl text-white">
                  No poems found
                </p>

                <p className="mt-4 text-zinc-500">
                  Try another title or keyword.
                </p>

              </div>

            )}

            {filteredPoems.length > 0 && (

              <div
                className={`grid gap-8 ${
                    filteredPoems.length === 1
                    ? "grid-cols-1"
                    : "md:grid-cols-2 xl:grid-cols-3"
                }`}
                >

                {filteredPoems.map((poem) => (

                  <Link
                    key={poem.id}
                    href={`/poetry/${poem.slug}`}
                    prefetch
                    className="w-full max-w-xl"
                  >

                    <motion.div

                      whileHover={{
                        y: -6,
                        scale: 1.01,
                      }}

                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}

                      className="group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition"
                    >

                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">


                        <button

                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(poem.slug);
                          }}

                          className="absolute right-0 top-0 text-3xl transition hover:scale-110"
                        >

                          {
                            favorites.includes(poem.slug)
                              ? "❤️"
                              : "🤍"
                          }

                        </button>


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

                    </motion.div>

                  </Link>

                ))}

              </div>

            )}

          </>

        </>

      </div>

    </section>
  );
}