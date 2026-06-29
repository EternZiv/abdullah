"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  "TechCorp", "DataFlow", "CloudNine", "InnoVate", "NexGen", "AlphaTech", "BetaSys", "GammaSoft",
];

export default function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-14 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="glass-card rounded-2xl py-8 px-6"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {logos.map((logo) => (
              <motion.div
                key={logo}
                className="text-muted-dark/60 text-sm font-semibold tracking-widest uppercase hover:text-muted/70 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
