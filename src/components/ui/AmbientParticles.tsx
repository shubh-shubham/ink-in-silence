"use client";

import { motion } from "framer-motion";

export default function AmbientParticles() {

  return (

    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      <motion.div

        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl"
      />

      <motion.div

        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.22, 0.12],
        }}

        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute bottom-[-15%] right-[-10%] h-[600px] w-[600px] rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      <motion.div

        animate={{
          opacity: [0.06, 0.12, 0.06],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute left-[35%] top-[30%] h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl"
      />

    </div>
  );
}