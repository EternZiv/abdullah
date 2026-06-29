"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Building Scalable Web Applications with Next.js 15",
    category: "Development",
    date: "June 15, 2026",
    image: "/images/project-auto-1.png",
  },
  {
    title: "Integrating AI into Modern Web Experiences",
    category: "AI",
    date: "May 28, 2026",
    image: "/images/project-auto-2.png",
  },
  {
    title: "Performance Optimization: Achieving 95+ Lighthouse Score",
    category: "Performance",
    date: "May 10, 2026",
    image: "/images/project-auto-1.png",
  },
];

export default function Articles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="articles" className="relative py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">BLOG</span>
          <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.5rem] mt-3">
            Latest Articles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="aspect-[16/9] bg-bg-card relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-bg/20 to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] text-accent font-semibold uppercase tracking-wider">{article.category}</span>
                  <span className="text-[10px] text-muted-dark">{article.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-heading leading-snug group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1 mt-2.5 text-xs text-accent">
                  <span>Read More</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
