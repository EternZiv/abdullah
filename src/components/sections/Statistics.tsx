"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";

const stats = [
  { value: PERSONAL_INFO.experienceYears, label: "Experience" },
  { value: PERSONAL_INFO.projectsCompleted, label: "Projects" },
  { value: PERSONAL_INFO.happyClients, label: "Happy Clients" },
  { value: PERSONAL_INFO.awards, label: "Awards" },
];

function AnimatedCounter({ value, isInView }: { value: string; isInView: boolean }) {
  return (
    <motion.span
      className="block text-4xl md:text-5xl font-bold font-heading text-heading mb-1"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {value}
    </motion.span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-14 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="glass-card-strong rounded-2xl py-10 px-6 md:py-12 md:px-8 cyan-glow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`text-center py-2 ${i < stats.length - 1 ? "stat-separator" : ""}`}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <AnimatedCounter value={stat.value} isInView={isInView} />
                <span className="text-sm text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
