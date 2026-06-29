"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";
import { projects, getProjectCategories } from "@/data/projects";

const categories = ["All", ...getProjectCategories()];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeCategory === "All"
    ? projects.slice(0, 6)
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">PROJECTS</span>
          <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.5rem] mt-3">
            Latest Projects
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#00BFFF]/15 text-accent border border-[#00BFFF]/20"
                  : "text-muted hover:text-heading bg-bg-card border border-border hover:border-[#00BFFF]/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative glass-card rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute inset-0 bg-[#00BFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-3 right-3 z-10 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-1 group-hover:translate-y-0">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-bg-card/80 backdrop-blur-sm text-muted hover:text-accent border border-border hover:border-accent/30 transition-all"
                        onClick={(e) => e.stopPropagation()} aria-label="Live demo">
                        <ExternalLink size={13} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-bg-card/80 backdrop-blur-sm text-muted hover:text-accent border border-border hover:border-accent/30 transition-all"
                        onClick={(e) => e.stopPropagation()} aria-label="GitHub">
                        <GitBranch size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[10px] text-accent font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-sm font-semibold text-heading mt-1.5 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted mt-1.5 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] rounded-full bg-bg-card text-muted border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-2.5 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Case Study</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>

                <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
