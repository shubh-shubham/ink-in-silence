"use client";

interface Props {

  title: string;

  content: string;

  author: string;

  templateImage: string;

  templateName?: string;

  fontFamily?: string;

  textColor?: string;

  watermark?: boolean;

  alignment?: string;
}

export default function PoemCard({

  title,

  content,

  author,

  templateImage,

  templateName,

  fontFamily =
  "Playfair Display",

  alignment =
    "text-center",

  textColor =
    "text-white",

  watermark = true,

}: Props) {

  return (

    <div className="relative mx-auto aspect-[9/14] w-[340px] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">

      {/* Background */}

      <div

        className="absolute inset-0 scale-105"

        style={{

          backgroundImage:
            `url(${templateImage})`,

          backgroundSize:
            "cover",

          backgroundPosition:
            "center",

        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/75" />

      {/* Glow */}

      <div className="absolute bottom-[-20%] left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col justify-between p-10">

        {/* Template */}

        <div>

          {templateName && (

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">

              <div className="h-2 w-2 rounded-full bg-white/70" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">

                {templateName}

              </p>

            </div>

          )}

        </div>

        {/* Main Content */}

        <div

          className={`
            flex flex-1 flex-col justify-center

            ${
              alignment ===
              "text-left"

                ? "items-start"

                : alignment ===
                  "text-right"

                ? "items-end"

                : "items-center"
            }
          `}
        >

          {title && (

            <h1

              style={{
  fontFamily:
    fontFamily,
}}

              className={`
                mb-8
                text-5xl
                leading-tight
                transition-all
                duration-500
                ${alignment}
                ${textColor}
              `}
            >

              {title}

            </h1>

          )}

          <p

           style={{
  fontFamily:
    fontFamily,
}}

            className={`
              max-w-[240px]
              break-words
              whitespace-pre-wrap
              text-[22px]
              leading-[2]
              transition-all
              duration-500
              ${alignment}
              ${textColor}/90
            `}
          >

            {content}

          </p>

        </div>

        {/* Footer */}

        <div className="flex flex-col items-center">

          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/80">

            — {author}

          </p>

          {watermark && (

            <div className="flex items-center gap-2 opacity-70">

              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-[10px] text-white">

                ✦

              </div>

              <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">

                Ink in Silence

              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}