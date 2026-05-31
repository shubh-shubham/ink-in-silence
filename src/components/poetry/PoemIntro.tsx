"use client";

import {
  motion,
} from "framer-motion";

export default function PoemIntro() {

  return (

    <motion.p

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1.2,
      }}

      className="mb-20 text-center text-xl italic tracking-wide text-white/40"
    >

      “Some words arrive softly.”

    </motion.p>
  );
}