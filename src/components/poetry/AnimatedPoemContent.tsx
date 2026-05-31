"use client";

import { motion } from "framer-motion";

export default function AnimatedPoemContent({
  content,
}: {
  content: string;
}) {

  return (

    <div className="space-y-10 text-3xl leading-[1.9] text-white/90">

      {content
        .replace(/\\n/g, "\n")
        .split("\n")
        .map((line, index) => (

          <motion.p

            key={index}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: index * 0.08,
            }}

            viewport={{
              once: true,
            }}
          >

            {line || "\u00A0"}

          </motion.p>

        ))}

    </div>
  );
}