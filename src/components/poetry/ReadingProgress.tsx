"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {

  const [progress, setProgress] =
    useState(0);

  useEffect(() => {

    const updateProgress = () => {

      const scrollTop =
        window.scrollY;

      const docHeight =
        document.body.scrollHeight
        -
        window.innerHeight;

      const scrollPercent =
        (scrollTop / docHeight) * 100;

      setProgress(scrollPercent);
    };

    window.addEventListener(
      "scroll",
      updateProgress
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );

  }, []);

  return (

    <div className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent">

      <div
        className="h-full bg-white transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}