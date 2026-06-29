"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">ABOUT ME</span>
          <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.5rem] mt-3">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {PERSONAL_INFO.aboutDescription.split("\n\n").map((para, i) => (
              <p key={i} className="body-text mb-4">
                {para.trim()}
              </p>
            ))}

            <h3 className="text-base font-semibold text-heading mt-8 mb-5 font-heading">
              Education
            </h3>
            <div className="space-y-5">
              {PERSONAL_INFO.education.map((edu, i) => (
                <motion.div
                  key={edu.year}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="p-2 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/10">
                      <GraduationCap size={17} className="text-accent" />
                    </div>
                    {i < PERSONAL_INFO.education.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-[#00BFFF]/20 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pb-5">
                    <span className="text-[11px] text-accent font-semibold uppercase tracking-wider">{edu.year}</span>
                    <h4 className="text-sm font-semibold text-heading mt-1">{edu.degree}</h4>
                    <p className="text-xs text-muted mt-0.5">{edu.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-base font-semibold text-heading mb-6 font-heading">
              Skills &amp; Expertise
            </h3>
            <div className="space-y-4">
              {PERSONAL_INFO.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.04 }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-heading font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-dark">{skill.level}%</span>
                  </div>
                  <div className="h-[6px] bg-bg-card rounded-full overflow-hidden border border-border/50">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#00BFFF] to-[#3DD9FF]"
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.04, ease: "easeOut" }}
                      style={{ willChange: "width" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
