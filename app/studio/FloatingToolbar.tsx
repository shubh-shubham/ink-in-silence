"use client";

interface Props {

  onPublish: () => void;

  onStyle: () => void;

  uploading: boolean;

  editingId: string | null;
}

export default function FloatingToolbar({

  onPublish,

  onStyle,

  uploading,

  editingId,

}: Props) {

  return (

    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">

      <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/50 px-6 py-4 shadow-2xl backdrop-blur-2xl">

        <button className="text-sm text-zinc-400 transition hover:text-white">

          Mood

        </button>

        <button

            onClick={onStyle}

            className="text-base text-zinc-400 transition-all duration-300 hover:text-white"
            >

            Style

            </button>

        <button className="text-sm text-zinc-400 transition hover:text-white">

          Audio

        </button>

        <button

          onClick={onPublish}

          disabled={uploading}

          className="rounded-full bg-white px-5 py-2 text-sm text-black transition hover:scale-[1.02] disabled:opacity-50"
        >

          {

            editingId
              ? "Update"
              : "Publish"

          }

        </button>

      </div>

    </div>
  );
}