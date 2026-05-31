"use client";

import { useState } from "react";

interface Props {

  open: boolean;

  onSave: (
    name: string
  ) => void;
}

export default function PenNameModal({

  open,

  onSave,

}: Props) {

  const [name, setName] =
    useState("");

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-6 backdrop-blur-2xl">

      <div className="w-full max-w-lg rounded-[40px] border border-white/10 bg-black p-10 text-white">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/40">

          Your Identity

        </p>

        <h2 className="text-5xl font-light leading-tight">

          What should the world call you?

        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-500">

          Your pen name will appear on every poem you publish.

        </p>

        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          placeholder="Silent Voyager"
          className="mt-10 w-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-xl outline-none placeholder:text-white/20"
        />

        <button
          onClick={() =>
            onSave(name)
          }
          className="mt-8 w-full rounded-full bg-white py-5 text-black transition hover:scale-[1.01]"
        >

          Continue

        </button>

      </div>

    </div>
  );
}