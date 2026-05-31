"use client";

interface Props {

  open: boolean;

  onClose: () => void;

  title: string;

  content: string;

  onSelect: (
    template: any
  ) => void;
}

const templates = [

  {

    name: "Midnight Rain",

    mood:
      "Dark cinematic atmosphere",

    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",

  },

  {

    name: "Silent Fog",

    mood:
      "Minimal melancholy",

    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",

  },

  {

    name: "Golden Healing",

    mood:
      "Warm hopeful glow",

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",

  },

];
export default function TemplateGallery({

  open,

  onClose,

  title,

  content,

  onSelect,

}: Props) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-8 backdrop-blur-xl">

      <div className="w-full max-w-6xl rounded-[40px] border border-white/10 bg-black p-10">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">

              Style Your Poem

            </p>

            <h2 className="text-5xl font-light text-white">

              Choose an atmosphere

            </h2>

          </div>

          <button
            onClick={onClose}
            className="text-zinc-500 transition hover:text-white"
          >

            Close

          </button>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {templates.map((template) => (

            <button

  key={template.name}

  onClick={() => {

    onSelect(template);

    onClose();
  }}

  className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 text-left transition hover:bg-white/[0.05]"
>

<div
    
  className="relative mb-6 flex h-72 flex-col justify-end overflow-hidden rounded-[24px] p-6"
  
  style={{

    backgroundImage:
      `url(${template.image})`,

    backgroundSize:
      "cover",

    backgroundPosition:
      "center",

  }}

>
    <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10">

                <h3 className="text-3xl font-light text-white">

                  title={title}

                </h3>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-white/70">

                  {content || "Your words will appear here..."}

                </p>

                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40">

                  Ink in Silence

                </p>
                </div>
              </div>

              <h3 className="text-2xl text-white">

                {template.name}

              </h3>

              <p className="mt-3 text-zinc-500">

                {template.mood}

              </p>

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}