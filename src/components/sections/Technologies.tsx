"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techCategories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    name: "AI",
    items: ["OpenAI API", "LangChain", "LM Studio", "Ollama", "Python"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Docker"],
  },
];

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">TECHNOLOGIES</span>
          <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.5rem] mt-3">
            Technologies I Work With
          </h2>
          <p className="body-text mt-3 max-w-2xl">
            Modern technologies I use to build scalable, high-performance digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <h3 className="text-sm font-semibold text-heading mb-4 font-heading">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs rounded-full bg-bg-card text-muted border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
