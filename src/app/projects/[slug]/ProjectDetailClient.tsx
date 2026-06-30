"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, GitBranch, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";
import { projects } from "@/data/projects";
import GlowButton from "@/components/ui/GlowButton";
import ProjectGallery from "@/components/sections/ProjectGallery";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[currentIndex + 1] || projects[0];
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];

  return (
    <article className="pt-20 md:pt-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <span className="section-label">{project.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-heading mt-2">
            {project.title}
          </h1>
          <p className="mt-4 text-[15px] md:text-base text-muted leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mt-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {project.liveUrl && (
            <GlowButton
              variant="primary"
              href={project.liveUrl}
              className="!px-5 !py-2.5 !text-sm"
            >
              Live Demo
              <ExternalLink size={15} />
            </GlowButton>
          )}
          {project.githubUrl && (
            <GlowButton
              variant="secondary"
              href={project.githubUrl}
              className="!px-5 !py-2.5 !text-sm"
            >
              <GitBranch size={15} />
              View Source
            </GlowButton>
          )}
        </motion.div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8 mt-12 md:mt-16">
        <motion.div
          className="relative aspect-[21/9] rounded-2xl overflow-hidden glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 80vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-12 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          <h2 className="text-xl font-bold font-heading text-heading mb-4">Overview</h2>
          <p className="body-text">{project.longDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          <h2 className="text-xl font-bold font-heading text-heading mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 text-sm rounded-full bg-bg-card border border-border text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          <h2 className="text-xl font-bold font-heading text-heading mb-4">Challenges</h2>
          <ul className="space-y-2.5">
            {project.challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-3 body-text">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2.5 shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold font-heading text-heading mb-4">Solution</h2>
          <p className="body-text">{project.solution}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.24 }}
        >
          <h2 className="text-xl font-bold font-heading text-heading mb-4">Features</h2>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 glass-card px-4 py-2.5">
                <CheckCircle2 size={15} className="text-accent shrink-0" />
                <span className="text-sm text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {project.results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.28 }}
          >
            <h2 className="text-xl font-bold font-heading text-heading mb-4">Results</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.results.map((result) => (
                <div key={result} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-sm text-muted">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-16">
          <ProjectGallery
            images={project.gallery}
            labels={project.galleryLabels || []}
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-16 mb-16">
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-5">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-right">
                <p className="text-xs text-muted-dark">Previous</p>
                <p className="text-sm font-medium text-muted group-hover:text-heading transition-colors">{prevProject.title}</p>
              </div>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-muted hover:text-accent transition-colors text-right"
            >
              <div>
                <p className="text-xs text-muted-dark">Next</p>
                <p className="text-sm font-medium text-muted group-hover:text-heading transition-colors">{nextProject.title}</p>
              </div>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
