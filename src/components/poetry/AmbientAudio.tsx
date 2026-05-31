"use client";

import { useRef, useState } from "react";

export default function AmbientAudio() {

  const audioRef =
    useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] =
    useState(false);

  const toggleAudio = () => {

    if (!audioRef.current)
      return;

    if (playing) {

      audioRef.current.pause();

    } else {

      audioRef.current.volume = 0.2;

      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (

    <div className="fixed bottom-8 right-8 z-50">

      <button

        onClick={toggleAudio}

        className="rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-white backdrop-blur-xl transition hover:bg-white/10"
      >

        {
          playing
            ? "Ambient Sound Off"
            : "Ambient Sound On"
        }

      </button>

      <audio
        ref={audioRef}
        loop
        src="/audio/rain.mp3"
      />

    </div>
  );
}